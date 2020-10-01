const replies = (state = [], action) => {
  switch (action.type) {
    case 'REPLIES_RECEIVED':
      return state.concat(action.payload.replies);
    case 'COMMENTS_RECEIVED':
      const replies = action.payload.comments.reduce((acc, comment) => {
      const { replies } = comment;

        return acc.concat(replies);
      }, []);

      return state.concat(replies);
  }

  return state;
};

export default replies;