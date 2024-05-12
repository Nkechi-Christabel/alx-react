import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { shallow } from 'enzyme';

describe('App tests', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it('contain Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  it('should render Header component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it('should render Footer component', () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it('Should not render courselist if logged out', () => {
    const component = shallow(<App />);

    component.setProps({ isLoggedIn: false });

    expect(component.contains(<Login />)).toBe(true);
  });

  it('should render courselist if logged in', () => {
    const component = shallow(<App isLoggedIn />);
    component.update();
    expect(component.find('CourseList')).toHaveLength(1);
  });
});
