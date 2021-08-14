import * as React from 'react';
import SpreadsheetCell from './SpreadsheetCell';

interface SpreadsheetRowProps {
  row: string;
  values: string[];
  onCellValueChange: Function;
}
interface SpreadsheetRowState {}

class SpreadsheetRow extends React.Component<
  SpreadsheetRowProps,
  SpreadsheetRowState
> {
  render() {
    // ASSIGNMENT: Generate with higher-order function
    return (
      <tr className="spreadsheet-row">
        <th>{this.props.row}</th>
        <SpreadsheetCell
          id={'a' + this.props.row}
          value={this.props.values && this.props.values[0]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              0,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'b' + this.props.row}
          value={this.props.values && this.props.values[1]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              1,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'c' + this.props.row}
          value={this.props.values && this.props.values[2]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              2,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'d' + this.props.row}
          value={this.props.values && this.props.values[3]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              3,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'e' + this.props.row}
          value={this.props.values && this.props.values[4]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              4,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'f' + this.props.row}
          value={this.props.values && this.props.values[5]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              5,
              newValue
            )
          }
        />
        <SpreadsheetCell
          id={'g' + this.props.row}
          value={this.props.values && this.props.values[6]}
          onCellValueChange={(newValue: string) =>
            this.props.onCellValueChange(
              parseInt(this.props.row) - 1,
              6,
              newValue
            )
          }
        />
      </tr>
    );
  }
}

export default SpreadsheetRow;
