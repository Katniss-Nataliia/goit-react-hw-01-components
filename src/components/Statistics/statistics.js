import data from './data.json';
import PropTypes from "prop-types";

const StatisticsItem = ({ title, stats }) => {
    return(
        <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    </li>
    <li class="item">
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    </li>
    <li class="item">
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    </li>
    <li class="item">
      <span class="label">{title}</span>
      <span class="percentage">{stats}</span>
    </li>
  </ul>
</section>
    )
    
};

const Statistics = () => {
    return(
        <div>
            {data.map(item => (
                <StatisticsItem
                    title={item.label}
                    stats={item.percentage}
                ></StatisticsItem>
            ))}
        </div>
    )
};


StatisticsItem.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.string
}

export default Statistics