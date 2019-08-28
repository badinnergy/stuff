import React, { Component } from 'react'
import Clock from 'react-clock'

export class Analog extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
  
  render() {
    return (
      <div style={style.text}>
        <h1>Masa terkini:</h1>
        <div style={style.container}>
          <Clock 
            value={this.state.date}
            size='250'
          />
        </div>
      </div>
    )
  }
}

const style = {
  text: {
    textAlign: 'center',
  },
  container: {
    marginLeft: '44%',
  }
}

export default Analog
