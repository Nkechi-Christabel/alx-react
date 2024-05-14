import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <div className='notification-wrapper'>
      <div className='menuItem'>
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className='Notifications'>
          <ul>
            {listNotifications?.length ? (
              <>
                <p>Here is the list of notifications</p>
                {listNotifications.map(({ id, html, type, value }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    value={value}
                    html={html}
                  />
                ))}
              </>
            ) : (
              <NotificationItem
                value='No new notification for now'
                type=''
                id={0}
              />
            )}
          </ul>
          <button
            style={{
              background: 'none',
              border: 'none',
              position: 'absolute',
              right: '.8rem',
              top: '1rem',
              cursor: 'pointer',
            }}
            aria-label='Close'
            onClick={() => console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt='closeIcon' width='18px' />
          </button>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
