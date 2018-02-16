import React from 'react';



export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      blank: ''

    }
  }

  render() {

    return (
      <div>
        <h1 className='main-body'> Quovo Coding Challenge </h1>
      </div>
    );
  }
}

