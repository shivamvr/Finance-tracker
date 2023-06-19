import styled from 'styled-components';
import React, { useState } from 'react'
import { useGlobalContext } from '../context/globalContext';

const FilterSection = ({setData,searchHandler}) => {
 const {transactionHistory} = useGlobalContext()
 const [searchInput,setSearchInput] = useState('')
 const {filterTransactions} = useGlobalContext()
 const [type,setType] = useState('all')
 const [order,setOrder] = useState('all')


 

 const handleFilter = (e) => {
   setOrder(e.target.value)
   let data = filterTransactions(type,e.target.value)
   setData(data)
 }
 const handleType = (e) => {
   setType(e.target.value)
   let data = filterTransactions(e.target.value,order)
   setData(data)
 }

 const handleChange = (e) => {
   setSearchInput(e.target.value)
   if(e.target.value==''){
    setData(transactionHistory())
   }
 }



  return (
    <FiltersStyled>
    <div>
    <select value={type} onChange={handleType}>
        <option value='all'>Select</option>
        <option value='income'>income</option>
        <option value='expense'>expense</option>
    </select>
    <select value={order} onChange={handleFilter}>
        <option value='all'>Order</option>
        <option value='desc'>High to low</option>
        <option value='asc'>Low to high</option>
    </select>
    </div>
    <form onSubmit={(e)=>{e.preventDefault(); searchHandler(searchInput)}}>
        <input value={searchInput} onChange={handleChange}  type='text'/>
        <button type='submit'>Search</button>
    </form>
 </FiltersStyled>
  )
}
const FiltersStyled = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    div:nth-child(1){
       /* background-color: red; */
       display: flex;
       gap: 1rem;
    }
    div>select{
        background: #fff;
        color: #333;
        padding: 10px;
        border-radius: 4px;
        outline: none;
        border: #ccc 1px solid;
        font-size: 16px
    }
    form>input{
        width: 300px;
        border: solid 1px #ddd;
        box-shadow: inset 1px 1px 2px #ddd;
        padding: 10px;
        border-radius:  6px 0 0 6px ;  
        border-right: none;
        outline: none;
        color: #333
    }

    form>button{
        border: solid 1px #ddd;
        border-left: none;
        padding: 10px;
        border-radius: 0 6px 6px 0;  
        outline: none;
        background: pink;
        background: #B8FF4A;
        cursor: pointer;
        color: #333
    }
  
`;

export default FilterSection

