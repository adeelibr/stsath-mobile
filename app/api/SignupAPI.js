import config from './config';

let SignupAPI = (object) => {
  let url = config.API_URL + '/signup';
  return fetch(url, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
		},
    body: JSON.stringify(object)
	})
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    return res;
  })
  .catch((error) => {
    console.log('API SignupAPI.js: ', error);
  });

}

export default SignupAPI;
