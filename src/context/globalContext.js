import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes
    const addIncome = async (income) => {
        const url = `${BASE_URL}income`
        const response = await axios.post(url, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getIncomes()
    }

    const getIncomes = async () => {
        const url = `${BASE_URL}income`
        const response = await axios.get(url)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const url = `${BASE_URL}income/${id}`
        const res  = await axios.delete(url)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    //calculate incomes
    const addExpense = async (expense) => {
        const url = `${BASE_URL}expense`
        const response = await axios.post(url, expense)
            .catch((err) =>{
                setError(err.response.data.message)
            })
        getExpenses()
    }

    const getExpenses = async () => {
        const url = `${BASE_URL}expense`
        const response = await axios.get(url)
        setExpenses(response.data)
    }

    const deleteExpense = async (id) => {
        const url = `${BASE_URL}expense/${id}`
        const res  = await axios.delete(url)
        getExpenses()
    }

    const totalExpenses = () => {
        let totalIncome = 0;
        expenses.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = (n) => {
        const history = [ ...expenses,...incomes]
        history.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })
        if(n==undefined){
            n = history.length
        }
        return history.slice(0,n)
    }

    const filterTransactions = (type,order) =>{

        let history = transactionHistory()
        if(type=='expense'){
            history = [...expenses]
        }else if(type=='income'){
            history = [...incomes]
        }

        if(order=='desc'){
             history =  history.sort((a, b) => b.amount - a.amount)
        }else if(order=='asc'){
             history =  history.sort((a, b) => a.amount - b.amount)
        }

        return history
    }



    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            filterTransactions,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}