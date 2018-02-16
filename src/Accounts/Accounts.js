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

import accountData from './../data/accounts.json'
import holdingData from './../data/holdings.json'


//  import { TableCell, Typography } from 'bootstrap';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'type', title: 'Type' },
        { name: 'sum', title: 'Sum ($)' },
        { name: 'percentage', title: 'Percent of Total' }
      ],
      rows: []
    }
  }

  componentDidMount(){
    let accountsArray = accountData.Accounts;
    let holdingsArray = holdingData.Positions;


    let arr=[]

    //CONSOLIDATES SIMILAR ACCOUNTS BY ACCOUNT ID
    accountsArray.forEach(i=>{
      let a = []      
      let c = {}
      for (let v in holdingsArray){
        if (holdingsArray[v].account_id === i.id){
          a.push(holdingsArray[v])
        }
      }

      let sum = 0;
      let internalSum= 0
      a.forEach(i=>{
        sum = (i.price * i.quantity) 
        i['sum']=sum
        internalSum += sum
        })

      c.id=i.id
      c.type=i.type
      c.name=i.name
      c.sum=internalSum.toFixed(2)
      arr.push(c)

      })

    //FINDS TOTAL PORTFOLIO VALUE
    let cumSum = 0
    arr.forEach(i=>{
      cumSum += parseFloat(i.sum)
    })

    //PASSES VALUE TO PARENT COMPONENT
    this.props.portfolioValue(cumSum.toFixed(2))

    //FINDS PERCENTAGE OF EACH ACCOUNT ID
    arr.forEach(i=>{
      let percentage = (i.sum/cumSum) * 100;
      i.percentage = percentage.toFixed(2)
    })



    //FINDS SIMILAR ACCOUNT TYPES AND CONSOLIDATES 
    let accounts = [];
    arr.forEach(i=>{
      let index = accounts.findIndex(o=> o.type === i.type)
      if (accounts[index]){
        accounts[index]['sum'] = (parseFloat(accounts[index]['sum']) + parseFloat(i['sum'])).toFixed(2);
        accounts[index]['percentage'] = (parseFloat(accounts[index]['percentage']) + parseFloat(i['percentage'])).toFixed(2);
              }
      else {
        accounts.push(i)
      }
    })

    //FORMATTED NEEDED FOR SORTING
    accounts.forEach(i=>{
      i.sum = parseFloat(i.sum)
      i.percentage = parseFloat(i.percentage)
    })

    this.setState({rows: accounts})
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