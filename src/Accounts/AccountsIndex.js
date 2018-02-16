import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Holdings from './Accounts'


export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blank: '',
      value: 0

    }
  }

  setHeaderValue(v){
    this.setState({value: v})
  }

  render() {
    return (
      <Grid className='content-header'>
        <Row between="xs">
          <Col xs={8}>
            <h1 className='conent-header-text'>Accounts</h1>
          </Col>
          <Col xs={4}>
            <h1 className='conent-header-price'>Portfolio Value <span className='portfolio-value'>{this.state.value}</span></h1>
          </Col>
        </Row>
        <Row start='xs'>
          <Col xs={12}>
            <p className='table-header-text'>HOLDINGS IN ACCOUNTS</p>
        </Col>
        </Row>
        <Row className='holding-content'>
          <Col xs={14} className='holding-content'> 
            <Holdings
              portfolioValue = {(v)=>this.setHeaderValue(v)}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

