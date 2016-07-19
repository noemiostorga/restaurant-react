import axios from 'axios';

export function getFancyMenu(){
 	var path = "https://json-data.herokuapp.com/restaurant/menu/1";
 	return axios.get(path);
}

export function getNews(){
	var path = "https://json-data.herokuapp.com/restaurant/news/1";
	var axios.get(path);
}

export function getSpecial(){
	var path = "https://json-data.herokuapp.com/restaurant/special/1";
	var axios.get(path);
}

