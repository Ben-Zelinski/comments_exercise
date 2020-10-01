import React from "react";
import moment from "moment";

function Comment({ comment }) {
	return (
		<div className="comment">
			<hr />
			<div className="image">
				<img src="/images/no-user-image.gif" alt="" />
			</div>
			<div className="header">
				<h3 className="author">{comment.author}</h3>
				<span>{moment(comment.postedAt).fromNow()}</span>
			</div>
			<p>{comment.body}</p>
		</div>
	);
}

export default Comment;
