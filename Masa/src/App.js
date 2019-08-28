import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Analog from './components/Analog';
import Digital from './components/Digital';
import Info from './components/Info';

import 'typeface-roboto';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={style}>
          <NavBar />

          <Route path={'/'} exact component={Analog} />
          <Route path={'/digital'} exact component={Digital} />
          <Route path={'/info'} component={Info} />
        </div>
      </BrowserRouter>
    );
  }
}

const style = {
  fontFamily: 'roboto'
}

export default App;
