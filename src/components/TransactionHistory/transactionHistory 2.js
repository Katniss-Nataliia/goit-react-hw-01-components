import React from 'react';
import PropTypes from 'prop-types';
import transactions from './transactions.json';
import {
    TableSection,
    TransactionTable,
    HeaderElement,
    TransactionData,
    TransactionDataTwo,
} from './TransactionHistory.styled'

const TransactionHistory = ({ 
    
    type, 
    amount, 
    currency }) => {
    return (
    <tr>
        <TransactionDataTwo>{type}</TransactionDataTwo>
        <TransactionDataTwo>{amount}</TransactionDataTwo>
        <TransactionDataTwo>{currency}</TransactionDataTwo>
    </tr>
    )

};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };

const Transactions = () => {
    return (
        <TableSection>
        <TransactionTable>
            <thead>
                <tr>
                    <HeaderElement>Type</HeaderElement>
                    <HeaderElement>Amount</HeaderElement>
                    <HeaderElement>Currency</HeaderElement>
                </tr>
            </thead>

            <tbody>
            {transactions.map(transaction => (
                <TransactionHistory
                    key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                
                ></TransactionHistory>
            ))}
            </tbody>
        </TransactionTable></TableSection>
    )
}


export default Transactions