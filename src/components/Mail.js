import React, { Component } from 'react';
import './../App.css';

export default class Mail extends Component {
  onClickNext() {
    const { mails, history } = this.props;
    let { id } = this.props.match.params;
    for (var i = 0; i < mails.length; i++) {
      if (mails[i].id === parseInt(id, 10)) {
        if (i === mails.length - 1) {
          alert('This is the last email!');
        } else {
          id = mails[i + 1].id;
          history.push('/mail/' + id);
          return;
        }
      }
    }
  }

  onClickPrev() {
    const { mails, history } = this.props;
    let { id } = this.props.match.params;
    for (var i = mails.length - 1; i >= 0; i--) {
      if (mails[i].id === parseInt(id, 10)) {
        if (i === 0) {
          alert('This is the first email!');
        } else {
          id = mails[i - 1].id;
          history.push('/mail/' + id);
          return;
        }
      }
    }
  }
  
  render() {
    const { mails } = this.props;
    const { id } = this.props.match.params;
    let mail = {};
    for (var i = 0; i < mails.length; i++) {
      if (mails[i].id === parseInt(id, 10)) {
        mail = mails[i];
      }
    }

    return (
      <div className="mail">
        <div>To: {mail.to}</div>
        <div>Subject: {mail.subject}</div>
        <p>{mail.text}</p>
        <button onClick={this.onClickPrev.bind(this)}>PREV</button>
        <button onClick={this.onClickNext.bind(this)}>NEXT</button>
      </div>
    );
  }
}
