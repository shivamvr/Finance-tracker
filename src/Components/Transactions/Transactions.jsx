

import React from 'react'
import styled from "styled-components";
import History from '../../History/History'
const Transactions = () => {
  return (
    <TransactionsStyled>
        <History searchBox={true}/>
    </TransactionsStyled>
  )
}

const TransactionsStyled = styled.div`
 padding:2rem;
 

  
`

export default Transactions