import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Spreadsheet from './Spreadsheet';
import SpreadsheetCellContextMenu from './SpreadsheetCellContextMenu';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Spreadsheet Application Starter Code</h1>
        <Spreadsheet />
        <SpreadsheetCellContextMenu />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
