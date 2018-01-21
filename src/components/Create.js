import React, { Component } from 'react';
import './../App.css';

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      to: '',
      subject: '',
      text: '',
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClickSend = this.onClickSend.bind(this);
  };

  componentDidMount() {
    this.setState({
      to: '',
      subject: '',
      text: '',
    })
  }

  handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    })
  }

  onClickSend(e) {
    e.preventDefault();
    const { to, subject, text } = this.state;
    const mail = {
      to,
      subject,
      text,
      read: false,
      checked: false,
    }
    this.props.createMail(mail);
    this.props.history.push('/list');
  }

  render() {
    return (
      <div className="create">
        <hr />
        <form onSubmit={this.onClickSend}>
          To: <input name='to' type='text' onChange={this.handleInputChange} />
          <hr />
          Subject: <input name='subject' type='text' onChange={this.handleInputChange} />
          <hr />
          <input name='text' type='text' onChange={this.handleInputChange} placeholder='Type your message here' />
          <button type='submit'>SEND</button>  
        </form>
      </div>
    );
  }
}
