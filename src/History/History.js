import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';
import FilterSection from '../Components/FilterSection';
import axios from 'axios';

function History({items,searchBox}) {
    const {transactionHistory} = useGlobalContext()
    const [data,setData] = useState([])

    const [...history] = transactionHistory(items)

    const searchHandler = async(term)=>{
        let results = data.filter(e=> e.title.includes(term))
        setData(results)
    }

    useEffect(()=>{
     setData(history)
    },[])

    return (
        <HistoryStyled>
            {searchBox && <FilterSection setData={setData} searchHandler={searchHandler}/>}
            <h2 style={{fontSize: '1.5rem'}}>Transactions {`(${data.length})`}</h2>
            {data.map((item) =>{
                const {id, title, amount, type,date} = item
                return (
                    <div key={Math.random()} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            <span>
                                <p>{title}</p>
                                <p style={{fontSize: '12px',color: '#333'}} > {date.split('T')[0].split('-').reverse().join(' / ')} </p>
                            </span>
                        </p>

                        <p style={{
                          fontSize: '16px',  color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .history-item{
        background: #FCF6F9;
        background: #ffff;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;



export default History