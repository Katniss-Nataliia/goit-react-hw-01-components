import React from 'react';
import PropTypes from 'prop-types';
import transactions from './transactions.json';
import {
    
    HeaderElement,
    TransactionData,
    TransactionDataTwo,
} from './TransactionHistory.styled'

const TransactionHistory = ({ 
    
    type, 
    amount, 
    currency }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <HeaderElement>Type</HeaderElement>
                    <HeaderElement>Amount</HeaderElement>
                    <HeaderElement>Currency</HeaderElement>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <TransactionData>{type}</TransactionData>
                    <TransactionData> {amount}</TransactionData>
                    <TransactionData>{currency}</TransactionData>
                </tr>
                <tr>
                    <TransactionDataTwo>{type}</TransactionDataTwo>
                    <TransactionDataTwo>{amount}</TransactionDataTwo>
                    <TransactionDataTwo>{currency}</TransactionDataTwo>
                </tr>
            </tbody>
        </table>
    )

};

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };

const Transactions = () => {
    return (
        <div>
            {transactions.map(transaction => (
                <TransactionHistory
                    key={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                
                ></TransactionHistory>
            ))}
        </div>
    )
}


export default Transactions