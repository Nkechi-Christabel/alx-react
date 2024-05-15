/** @jest-environment jsdom */
import React from 'react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { shallow, mount } from 'enzyme';

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

describe('When ctrl + h is pressed', () => {
  it('calls logOut function', () => {
    const mocked = jest.fn();
    const wrapper = mount(<App logOut={mocked} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(mocked).toHaveBeenCalledTimes(1);
    wrapper.unmount();
  });

  document.alert = jest.fn();
  it('checks that alert function is called', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, 'alert');
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith('Logging you out');
    jest.restoreAllMocks();
    wrapper.unmount();
  });
  document.alert.mockClear();
});
