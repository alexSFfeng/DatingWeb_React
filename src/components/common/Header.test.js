import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Header from './Header';
import { wrap } from 'module';

describe('Testing Chatbox functionality', () =>{

  var wrapper = mount(<Header/>);

  it('Should have nav bar and two buttons for sign up login', () =>{
    expect(wrapper.find('.LSbuttons').length).toBe(2);
    expect(wrapper.find('nav').length).toBe(1);
  });

  it('Should have 3 place to link to', () => {
    expect(wrapper.find('a').length).toBe(3);
  })
});