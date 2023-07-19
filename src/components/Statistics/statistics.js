import React from 'react';
import PropTypes from "prop-types";
import data from './data.json';

const StatisticsItem = ({
  id,
  title,
  stats,
}) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        <li className="item" key={id}>
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item" key={id}>
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item" key={id}>
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
        <li className="item" key={id}>
          <span className="label">{title}</span>
          <span className="percentage">{stats}</span>
        </li>
      </ul>
    </section>
  )

};

StatisticsItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  stats: PropTypes.number,
}

const Statistics = () => {
  return (
    <div>
      {data.map(item => (
        <StatisticsItem
          id={item.id}
          title={item.label}
          stats={item.percentage}
        ></StatisticsItem>
      ))}
    </div>
  )
};

export default Statistics