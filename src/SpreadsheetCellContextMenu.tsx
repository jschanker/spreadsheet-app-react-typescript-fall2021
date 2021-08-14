import * as React from 'react';

interface SpreadsheetCellContextMenuProps {
  id: string;
}
interface SpreadsheetCellContextMenuState {}

class SpreadsheetCellContextMenu extends React.Component<
  SpreadsheetCellContextMenuProps,
  SpreadsheetCellContextMenuState
> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="context-menu">
        <ul>
          <li>
            Format {`>`}
            <ul>
              <li data-type="number" className="format">
                Number
              </li>
              <li data-type="currency" className="format">
                Currency
              </li>
              <li data-type="time-ms" className="format">
                Time (given in ms)
              </li>
              <li data-type="time-days" className="format">
                Time (given in days)
              </li>
              <li data-type="date" className="format">
                Date (given in ms)
              </li>
            </ul>
          </li>
          <li>Placeholder</li>
        </ul>
      </div>
    );
  }
}

export default SpreadsheetCellContextMenu;
