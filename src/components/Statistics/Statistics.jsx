import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsItemLabel,
  StatisticsItemValue,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} eventType={label}>
            <StatisticsItemLabel>{label}</StatisticsItemLabel>
            <StatisticsItemValue>{percentage + '%'}</StatisticsItemValue>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
