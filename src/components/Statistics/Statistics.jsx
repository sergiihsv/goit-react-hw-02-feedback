import propTypes from 'prop-types';
import { List, Item } from './StatisticsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>Good:{good}</Item>
      <Item>Neutral:{neutral}</Item>
      <Item>Bad:{bad}</Item>
      <Item>Total:{total}</Item>
      <Item>Positive feedback:{positivePercentage}%</Item>
    </List>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
