import transactions from './transactions.json';

const TransactionHistory = ({ id, type, amount, currency }) => {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            </tbody>
        </table>
    )

};

const Transactions = () => {
    return (
        <div>
            {transactions.map(transaction => (
                <TransactionHistory
                    type={transaction.type}
                    amount={transaction.amount}
                    currency={transaction.currency}
                
                ></TransactionHistory>
            ))}
        </div>
    )
}


export default Transactions