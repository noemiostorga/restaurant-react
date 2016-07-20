import React from 'react';

import News from './news.js';
import Special from './special.js';
import GoogleApi from './googleapi.js';


export default React.createClass({
  render: function () {
    return (
      <div className="boxContainer">
      	
      	<News />
      	<Special />
      	<GoogleApi />
      </div>
    )
  }
})