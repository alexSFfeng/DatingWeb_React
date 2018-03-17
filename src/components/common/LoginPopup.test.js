import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import LoginPopup from './LoginPopup';
import { wrap } from 'module';

describe('Testing LoginPopup functionality', () =>{
  
  var wrapper = mount(<LoginPopup />);

  it("testing default login type", () =>{
    expect(wrapper.state().type).toEqual("Agent");
  })
});