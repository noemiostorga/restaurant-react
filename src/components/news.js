import React from 'react';
import { getNews } from 'api/data.js';

export default React.createClass({
	getInitialState: function(){
		return {
			news: " "
		}
	},
	componentWillMount: function(){
		getNews().then(function(response){
			console.log(response)
			this.setState({
				news:response.data.post
			})
		}.bind(this))
	},
  render: function () {
    return (
      <div>
      	<h1>news</h1>
      	<p>{this.state.news}</p>
      </div>
    )
  }
})