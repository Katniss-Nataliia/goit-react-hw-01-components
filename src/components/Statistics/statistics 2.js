import React from 'react';
import PropTypes from 'prop-types';
import data from './data.json';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsData,
  StatisticsList,
  LabelPercentage,
  LabelFormat,
} from './Statistics.styled'

const StatisticsItem = ({ title, stats }) => {
  return (
    <StatisticsData>
      <LabelFormat>{title}</LabelFormat>
      <LabelPercentage>{stats}%</LabelPercentage>
    </StatisticsData>

  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.number,
};

const Statistics = () => {
  return (
    <StatisticsSection>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsList>
        {data.map(item => (
          <StatisticsItem
            key={item.id}
            title={item.label}
            stats={item.percentage}
          />
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

export default Statistics;