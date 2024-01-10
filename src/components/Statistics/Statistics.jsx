import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <ul className={s.statisticsList}>
        <li className={s.statisticsLi}>Good: {good}</li>
        <li className={s.statisticsLi}>Neutral: {neutral}</li>
        <li className={s.statisticsLi}>Bad: {bad}</li>
        <li className={s.statisticsLi}>Total: {total}</li>
        <li className={s.statisticsLi}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};
