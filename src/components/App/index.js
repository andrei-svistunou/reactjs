import React, { Component } from 'react';
import { Hello, Img, TextField, WrapperBlock } from '../Task_1';
import { hot } from 'react-hot-loader'
import worldImg from '../../assets/img/world.jpg';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'World',
      text: ''
    };
  }

  componentDidMount() {
    this.getMsg()
      .then(res => this.setState({ text: res.msg }))
      .catch(err => console.log(err));
  }

  async getMsg() {
    const response = await fetch('http://localhost:3003/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  render() {
    return (
      <div>
        {WrapperBlock}
        <Hello name={this.state.name} />
        <TextField text={this.state.text} />
        <Img imgSrc={worldImg} />
      </div>
    );
  }
}

export default hot(module)(App);
