import React from "react";
import CommentThread from "./CommentThread";
import store from '../lib/store';

class CommentsList extends React.Component {

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    fetch('/api/comments')
    .then(response => response.json())
    .then(data => {
      store.dispatch({
        type: 'COMMENTS_RECEIVED',
        payload: {
          comments: data,
        },
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render () {
    return (
      <div className="comments">
        <h2>Comments (2)</h2>
        {store.getState().comments.map((thread) => {
          return <CommentThread key={thread.id} comment={thread} />;
        })}
      </div>
    );
  }
}

export default CommentsList;
