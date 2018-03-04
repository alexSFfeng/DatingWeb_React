import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import Chatbox from './Chatbox';
import { wrap } from 'module';

describe('Testing Chatbox functionality', () =>{

  // set up
  var wrapper = mount(<Chatbox isClient/>);

  it('Default data counter is 0', () =>{
    expect(wrapper.state().messages.length).toBe(1);
  });

  it('Mode of chatbox should be client', () =>{
    expect(wrapper.state().isClient).toEqual(true);
    expect(wrapper.state().mode).toEqual("Client");
  });

  it('The default display should be false', () =>{
    expect(wrapper.state().showUp).toEqual(false);
  });

  it('show display on click open', () => {
    wrapper.find('#openS').simulate('click');
    expect(wrapper.state().showUp).toEqual(true);
  });

  it('close display on click close', () => {
    wrapper.find('#closeS').simulate('click');
    expect(wrapper.state().showUp).toEqual(false);
    wrapper.find('#openS').simulate('click');
    expect(wrapper.state().showUp).toEqual(true);
  });

  // sending a message
  it('send adds message to messages', () => {
    wrapper.find('#sendBttn').simulate('click');
    expect(wrapper.state().messages.length).toBe(3);
  })

  it('make sure the messages are displayed', ()=>{
    expect(wrapper.find('.container').length).toBe(3);
  });
});