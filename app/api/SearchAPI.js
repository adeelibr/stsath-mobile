import config from './config';

let SearchQueryAPI = (word, token) => {
  let url = config.API_URL + '/search/query?word=' + word;

  return fetch(url, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
      "Authorization": "Bearer" + " " + token
		}
	})
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    return res;
  })
  .catch((error) => {
    console.log('API SearchQueryAPI.js: ', error);
  });

}

export default SearchQueryAPI;
