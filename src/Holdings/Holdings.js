import React from 'react';
import {
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
} from '@devexpress/dx-react-grid-bootstrap3';

import data from './../data/holdings.json'
//  import { TableCell, Typography } from 'bootstrap';
//const data = require('./../data/holdings')
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      columns: [
        { name: 'account_id', title: 'Account ID' },
        { name: 'ticker_name', title: 'Ticker Name' },
        { name: 'ticker', title: 'Ticker' },
        { name: 'price', title: 'Price' },
        { name: 'quantity', title: "Quantity"}
      ],
      rows: []


    }
  }
  componentDidMount(){
    let dataArray = data.Positions;
      dataArray.forEach((i)=>{
        i['price'] = parseFloat(i['price'].toFixed(2))
      })
    this.setState({rows: dataArray, loaded: true})


  }
  render() {
    const { rows, columns } = this.state;

    return (
      <div>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SortingState
            defaultSorting={[{ columnName: 'city', direction: 'asc' }]}
          />
          <IntegratedSorting />
          <Table />
          <TableHeaderRow
            className='table-header-row'
            showSortingControls
          />
        </Grid>
      </div>
    );
  }
}