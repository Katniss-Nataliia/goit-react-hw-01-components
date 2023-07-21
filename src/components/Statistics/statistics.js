import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';

const StatisticsItem = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item">
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item">
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item">
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item">
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
      </ul>
    </section>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};

const Statistics = () => {
  return (
    <div>
      {data.map(item => (
        <StatisticsItem
          // Use the unique 'id' as the key to help React efficiently update the list
          key={item.id}
          title={item.label}
          stats={item.percentage}
        ></StatisticsItem>
      ))}
    </div>
  );
};

export default Statistics;