import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import Profile from 'components/Profile/profile';
import Statistics from 'components/Statistics/statistics';
import FriendList from 'components/FriendList/friends';
import Transactions from 'components/TransactionHistory/transactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile></Profile>
    <Statistics></Statistics>
    <FriendList></FriendList>
    <Transactions></Transactions>
  </React.StrictMode>
);
