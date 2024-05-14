import React from 'react';
import './Notifications.css';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { html, id, markAsRead, type, value } = this.props;
    return (
      <div>
        {type && value ? (
          <li data-notification-type={type} onClick={() => markAsRead(id)}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}
            onClick={() => markAsRead(id)}
          ></li>
        ) : null}
      </div>
    );
  }
}

export default NotificationItem;
