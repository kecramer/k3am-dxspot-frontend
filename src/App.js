import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'
import SpotsContainer from './containers/SpotsContainer'
import Header from './components/Header'
import SpotDetail from './components/SpotDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid style={{marginTop: '2em'}}>
          <Grid.Column width={11}>
            <SpotsContainer />
          </Grid.Column>
          <Grid.Column width={5}>
            <SpotDetail />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
