import s from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <span className={s.messageText}>{message}</span>
    </div>
  );
};
