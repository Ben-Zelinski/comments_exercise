import React from "react";
import store from '../lib/store';

class NewCommentForm extends React.Component {
  state = {
    author: '',
    body: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const comment = {
      author: this.state.author,
      body: this.state.body,
    };

    fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment) 
    }).then((response) => {
      return response.json();
    }).then((newComment) => {
      store.dispatch({
        type: 'COMMENT_ADDED',
        payload: {
          newComment,
        },
      });

      this.resetInputs();
    });
  }

  handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({
      [name]: value
    })
  }

  resetInputs = () => {
    this.setState({
      author: '',
      body: '',
    });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <h2>Post a Comment</h2>
        <div className="input-group">
          <label>Your Name</label>
          <input type="text" name="author" onChange={this.handleInputChange} value={this.state.author} />
        </div>

        <div className="input-group">
          <label>Your Comment</label>
          <textarea name="body" onChange={this.handleInputChange} value={this.state.body} cols="30" rows="10"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NewCommentForm;
