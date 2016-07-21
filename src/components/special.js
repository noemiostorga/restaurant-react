import React from 'react';
import { getSpecial } from 'api/data.js';

export default React.createClass({
getInitialState: function(){
	return{
		special: " "
	}	
},
componentWillMount: function(){
	getSpecial().then(function(response){
		console.log(response)
		this.setState({
			special:response.data.menu_item_id
		})
	}.bind(this))
},
  render: function () {
    return (
      <p>{this.state.special}</p>
    )
  }
})