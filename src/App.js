import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Create from './components/Create'
import List from './components/List'
import Mail from './components/Mail'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nextId: 5,
      mails: [
        {
          to: 'test1@react.com',
          subject: 'Apple',
          text: 'This is an apple.',
          id: 1,
          read: false,
          checked: false,
        },
        {
          to: 'test2@react.com',
          subject: 'Banana',
          text: 'This is a banana.',
          id: 2,
          read: false,
          checked: false,
        },
        {
          to: 'test3@react.com',
          subject: 'Cherry',
          text: 'This is a cherry.',
          id: 3,
          read: false,
          checked: false,
        },
        {
          to: 'test4@react.com',
          subject: 'Dog',
          text: 'Wow, it is a dog.',
          id: 4,
          read: false,
          checked: false,
        },
      ],
    };

    this.createMail = this.createMail.bind(this);
    this.viewMail = this.viewMail.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.deleteMail = this.deleteMail.bind(this);
  }

  createMail(mail) {
    let { nextId, mails } = this.state;
    mail.id = nextId;
    mails.push(mail);
    nextId++;  
    this.setState({ mails });
  }

  viewMail(id) {
    let { mails } = this.state;
    for (var i = 0; i < mails.length; i++) {
      if (mails[i].id === parseInt(id, 10)) {
        mails[i].read = true;
      }
    }
    this.setState({ mails });
  }

  handleCheckboxChange(id, checked) {
    let { mails } = this.state;
    for (var i = 0; i < mails.length; i++) {
      if (mails[i].id === parseInt(id, 10)) {
        mails[i].checked = checked;
      }
    }
    this.setState({ mails });
  }

  deleteMail() {
    const { mails } = this.state;
    this.setState({
      mails: mails.filter(mail => !mail.checked),
    });
  }

  render() {
    const { mails } = this.state;
    return (
      <BrowserRouter>
        <div className='nav-bar'>
          <ul>
            <li><Link to='/list'>LIST</Link></li>
            <li><Link to='/create'>CREATE</Link></li>
          </ul>
          <Switch>
            <Route path='/' exact render={props => 
              <List 
                mails={mails}
                viewMail={this.viewMail}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteMail={this.deleteMail}
                {...props} 
              />} 
            />
            <Route path='/list' render={props => 
              <List 
                mails={mails}
                viewMail={this.viewMail}
                handleCheckboxChange={this.handleCheckboxChange}
                deleteMail={this.deleteMail}
                {...props} 
              />} 
            />
            <Route path='/create' render={props => <Create createMail={this.createMail} {...props} />} />
            <Route path='/mail/:id' render={props => <Mail mails={mails} {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
