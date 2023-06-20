const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': 'f996dfce6bmsh4274148b9d1cab2p10ee15jsn8c0345275220',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}