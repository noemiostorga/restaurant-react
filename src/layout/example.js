import React from 'react';
import {Link} from 'react-router';

import BoxContainer from 'components/boxContainer.js';
import Header from 'components/header.js';
import PhotoContainer from 'components/photoContainer.js';

export default React.createClass({
  render: function () {
    return (
      <div className="page">
      	
      	<Header />

      	<BoxContainer />

      	<ul id="nav">
      		<li><Link to="/">Story</Link></li>
      		<li><Link to="/menu">Menu</Link></li>
      		<li><Link to="/menu/reservation">Reservations</Link></li>
      	</ul>

      	<PhotoContainer />

      	<div className="footer">
      		<p>&copy; 2016 O.N.O </p>
      	</div>
      </div>
    )
  }
})