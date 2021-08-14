import * as React from 'react';

interface SpreadsheetCellProps {
  id: string;
  value: string;
  onCellValueChange: Function;
}
interface SpreadsheetCellState {
  format: string;
}

class SpreadsheetCell extends React.Component<
  SpreadsheetCellProps,
  SpreadsheetCellState
> {
  constructor(props) {
    super(props);
    this.state = { format: '' };
    this.formatCellValue = this.formatCellValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e);
    this.props.onCellValueChange(e.target.value);
  }

  /**
   * Given a format type (currently currency, time-ms, time-days, date, and other) and a numerical value for
   * the first four formats or currently any value for other, returns the value in the given format
   * @param format the format of the value to return (currently currency, time-ms, time-days, date, and other)
   * @param value the numerical value to format
   * @return h:m:s time
   **/
  formatCellValue(format: string, value: string): string {
    if (format === 'currency') {
      return '$' + value;
    } else if (format === 'time-ms') {
      // return getTimeStrFromMs(value || 0);
    } else if (format === 'time-days') {
      // return getTimeStrFromDays(value || 0);
    } else if (format === 'date') {
      return new Date(parseInt(value || '0')).toString();
    } else {
      return value;
    }
  }
  render() {
    return (
      <td className="spreadsheet-cell">
        <input
          type="text"
          id={this.props.id}
          className="input-cell"
          value={this.formatCellValue(this.state.format, this.props.value)}
          onChange={this.handleChange}
        />
      </td>
    );
  }
}

export default SpreadsheetCell;
