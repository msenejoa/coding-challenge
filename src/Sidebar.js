import React from 'react';
import { Link } from 'react-router-dom'

import { Row, Col } from 'react-flexbox-grid';


export default class SidebarIndex extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blank: ''

    }
  }
  render() {

    return (
      <div className='sidebar'>
        <Row start='xs'>
          <Col xs={4} className='sidebar-container'>
            <Link to='/' className='dev-name'>Michael Senejoa</Link>
          </Col>
        </Row>
        <Row start='xs'>
          <Col xs={4} className='sidebar-container'>
            <Link to="/holdings" className='sidebar-content'>Holdings</Link>
          </Col>
        </Row>
        <Row start='xs'>
          <Col xs={4} className='sidebar-container'>
            <Link to="/accounts" className='sidebar-content'>Accounts</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

