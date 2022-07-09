import propTypes from 'prop-types';
import { Message } from './NotificationStyled';

export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: propTypes.string,
};
