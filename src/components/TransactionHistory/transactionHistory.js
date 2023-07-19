import React from 'react';
import PropTypes from 'prop-types';
import transactions from './transactions.json';

const TransactionHistory = ({ 
    id, 
    type, 
    amount, 
    currency }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr key={id}>
                    <td>{type}</td>
                    <td> {amount}</td>
                    <td>{currency}</td>
                </tr>
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            </tbody>
        </table>
    )

};

TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };

const Transactions = () => {
    return (
        <div>
            {transactions.map(transaction => (
                <TransactionHistory
                    id={transaction.id}
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                
                ></TransactionHistory>
            ))}
        </div>
    )
}


export default Transactions