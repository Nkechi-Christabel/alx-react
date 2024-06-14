import React, { Component } from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext, defaultUser } from './AppContext';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

export const listNotificationsInitialState = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

document.body.style.margin = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: listNotificationsInitialState,
    };
  }

  handleKeyCombination(e) {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => {
        return notification.id !== id;
      }),
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyCombination);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyCombination);
  }

  render() {
    const { user, logOut, displayDrawer, listNotifications } = this.state;

    const { isLoggedIn } = this.props;

    const value = { user, logOut };

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className={css(styles.App)}>
          <div>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              markNotificationAsRead={this.markNotificationAsRead}
            />
            <Header />
          </div>
          <div className={css(styles.body)}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                explicabo cupiditate! Voluptas maxime omnis, incidunt sapiente
                odit quae sint possimus cumque corrupti quos atque quam
                repudiandae ducimus rem, commodi error!
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    fontSize: '1.2rem',
    padding: '1rem',
    height: '100vh',
  },

  body: {
    padding: '2rem',
    height: '100%',
    borderBottom: '4px solid #e0364b',
  },

  footer: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '2rem',
  },
});

App.defaultProps = {};

App.propTypes = {};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

export default connect(mapStateToProps)(App);
