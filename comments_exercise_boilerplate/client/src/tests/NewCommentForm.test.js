import React from 'react';
import { shallow } from 'enzyme';
import NewCommentForm from '../components/NewCommentForm';

describe('NewCommentForm', () => {
  it('changes the state when author input is changed', () => {
    let wrapper = shallow(<NewCommentForm />);
    let input = wrapper.find("[name='author']");
    input.simulate('change', {
      target: {
        name: 'author',
        value: 'Ilyas'
      }
    });

    expect(wrapper.state().author).toEqual('Ilyas');
  });

  it('onSubmit is called when Submit is pressed', () => {
    let func = jest.fn();
    let wrapper = shallow(<NewCommentForm onSubmit={func}/>);
    wrapper.simulate('submit', {
      preventDefault: () => {},
    });

    expect(func.mock.calls.length).toBe(1);
  });

  it('passes an object to onSubmit as argument upon submit', () => {
    let func = jest.fn();
    let wrapper = shallow(<NewCommentForm onSubmit={func}/>);
    wrapper.simulate('submit', {
      preventDefault: () => {},
    });
    let comment = {
      author: wrapper.state().author,
      body: wrapper.state().body
    }

    expect(func.mock.calls[0][0]).toEqual(comment);
  })
})