import React from 'react';
import { getFancyMenu } from 'api/data.js';

export default React.createClass({
	getInitialState: function(){
		return{	
			menu: " "
		}
	},
	componentWillMount: function(){
		getFancyMenu().then(function(response){
			console.log(response);
			this.setState({
				menu: response.data
			})
		}.bind(this))
	},

  render: function () {
    return (
      <p>{this.state.menu}</p>
    )
  }
})