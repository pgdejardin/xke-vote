import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends PureComponent {

  render() {
    return(
      <div>
        <h1>HomePage</h1>
        <Link to="/vote">You can vote</Link>
      </div>
    );
  }

}

export default HomePage;