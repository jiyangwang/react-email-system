import React, { Component } from 'react';
import './../App.css';

export default class List extends Component {
  handleCheckboxChange(e) {
    const { id, checked } = e.target;
    this.props.handleCheckboxChange(id, checked);
  }

  onClickView(e) {
    const { id } = e.target;
    this.props.viewMail(id);
    this.props.history.push('/mail/' + id);
  }

  render() {
    const { mails, deleteMail } = this.props;
    const mailList = mails.map((mail, idx) => {
      const backgroundColor = mail.read ? 'gray' : 'white';
      return (
        <tr key={idx} style={{backgroundColor}}>
          <td>
            <input
              type='checkbox'
              onChange={this.handleCheckboxChange.bind(this)}
              id={mail.id}
            />
          </td>
          <td id={mail.id} onClick={this.onClickView.bind(this)}>{mail.to}</td>
          <td id={mail.id} onClick={this.onClickView.bind(this)}>{mail.subject}</td>
        </tr>
      );
    })

    return (
      <div className="list">
        <table>
          <tbody>
            {mailList}
          </tbody>
        </table>
        <button onClick={deleteMail}>DELETE</button>
      </div>
    );
  }
}
