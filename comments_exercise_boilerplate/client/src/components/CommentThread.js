import React from "react";
import Comment from "./Comment";
import store from '../lib/store';

function CommentThread({ comment, onMoreReplies }) {

  
  const handleMoreReplies = (event) => {
    event.preventDefault();

    fetch(`/api/comment_replies?comment_id=${comment.id}`)
    .then(response => response.json())
    .then(replies => {
      store.dispatch({
        type: 'REPLIES_RECEIVED',
        payload: {
          replies,
          id: comment.id,
        }
      })
    });
  }

  const replies = store.getState().replies.filter((reply) => reply.comment_id === comment.id);
  const repliesCount = replies.length;
  
	return (
		<div className="parent-comment">
			<Comment key={comment.id} comment={comment} />
			<div className="replies">
				{replies.map((comment) => {
					return <Comment key={comment.id} comment={comment} />;
				})}
				{repliesCount !== comment.replies_count ? <a href="#" onClick={handleMoreReplies} className="show_more">Show More Replies (2)</a> : null}
			</div>
		</div>
	);
}

export default CommentThread;
