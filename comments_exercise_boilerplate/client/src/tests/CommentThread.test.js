import React from 'react';
import { shallow } from 'enzyme';
import CommentThread from '../components/CommentThread';

describe('CommentThread', () => {
  let comment =  {
    id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
    author: "Reed Fisher",
    body: "Sint in in sunt amet.",
    postedAt: 1550488214207,
    replies_count: 3,
    replies: [
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546
      },
      {
        id: "116dbd01-d5f3-4dfb-afeb-f822a9264a5e",
        comment_id: "4b2d74e6-7d1a-4ba3-9e95-0f52ee8ebc6e",
        author: "Kathleen Nikolaus",
        body: "Officia suscipit sint sint impedit nemo. Labore aut et quia quasi ut. Eos voluptatibus quidem eius delectus beatae excepturi.",
        postedAt: 1550419941546
      }
    ]
  }
  let wrapper;
  let func;
  beforeEach(() => {
    func = jest.fn();
    wrapper = shallow(<CommentThread comment={comment} onMoreReplies={func}/>);
  })

  it('Has class parent-comment', () => {
    expect(wrapper.find('.parent-comment').length).toBe(1);
  });

  it('Renders replies', () => {
    expect(wrapper.find('.replies Comment').length).toBe(comment.replies.length);
  });

  it('Invokes onMoreReplies when link is clicked', () => {
    wrapper.find('.show_more').simulate('click', {
      preventDefault: () => { }
    });
    expect(func.mock.calls.length).toBe(1);
  });

  it('Invokes onMoreReplies with comment.id as an arg', () => {
     wrapper.find('.show_more').simulate('click', {
      preventDefault: () => { }
    });

    expect(func.mock.calls[0][0]).toEqual(comment.id);
    expect(func.mock.calls.length).toBe(1);
  });
})