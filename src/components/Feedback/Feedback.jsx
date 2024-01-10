import s from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <div className={s.leaveFeedback}>
      <ul className={s.feedbackList}>
        {options.map(option => (
          <li className={s.feedbackLi} key={option}>
            <button
              name={option}
              type="button"
              className={s.feedbackBtn}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
