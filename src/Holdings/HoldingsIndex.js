import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Holdings from './Holdings'


export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blank: ''

    }
  }

  render() {

    return (
      <Grid className='content-header'>
        <Row start='xs'>
          <Col xs={12}>
            <h1 className='conent-header-text'>Account Holdings</h1>
          </Col>
        </Row>
        <Row start='xs'>
          <Col xs={12}>
            <p className='table-header-text'>TOTAL HOLDINGS</p>
        </Col>
        </Row>
        <Row className='holding-content'>
          <Col xs={14} className='holding-content'> 
            <Holdings/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

