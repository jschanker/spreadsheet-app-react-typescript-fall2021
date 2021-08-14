import * as React from 'react';
import SpreadsheetRow from './SpreadsheetRow';

interface SpreadsheetProps {
  id: string;
}
interface SpreadsheetState {
  cellValues: string[][];
}

class Spreadsheet extends React.Component<SpreadsheetProps, SpreadsheetState> {
  // ASSIGNMENT : Allow a spreadsheet with a variable number of rows and columns;
  //              use a loop when initializing cellValues and higher-order function
  //              when rendering spreadsheet rows
  constructor(props) {
    super(props);
    this.state = {
      cellValues: [
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '']
      ]
    };
    this.setValue = this.setValue.bind(this);
  }
  setValue(row, col, newValue) {
    this.setState(state => {
      state.cellValues[row][col] = newValue;
      return state;
    });
  }
  render() {
    return (
      <table>
        <tr>
          <th>&nbsp;</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
        </tr>
        <SpreadsheetRow
          row="1"
          values={this.state.cellValues[0]}
          onCellValueChange={this.setValue.bind(0)}
        />
        <SpreadsheetRow
          row="2"
          values={this.state.cellValues[1]}
          onCellValueChange={this.setValue.bind(1)}
        />
        <SpreadsheetRow
          row="3"
          values={this.state.cellValues[2]}
          onCellValueChange={this.setValue.bind(2)}
        />
        <SpreadsheetRow
          row="4"
          values={this.state.cellValues[3]}
          onCellValueChange={this.setValue.bind(3)}
        />
        <SpreadsheetRow
          row="5"
          values={this.state.cellValues[4]}
          onCellValueChange={this.setValue.bind(4)}
        />
        <SpreadsheetRow
          row="6"
          values={this.state.cellValues[5]}
          onCellValueChange={this.setValue.bind(5)}
        />
        <SpreadsheetRow
          row="7"
          values={this.state.cellValues[6]}
          onCellValueChange={this.setValue.bind(6)}
        />
      </table>
    );
  }
}

export default Spreadsheet;
