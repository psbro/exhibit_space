// const fetch = require('node-fetch');

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f996dfce6bmsh4274148b9d1cab2p10ee15jsn8c0345275220',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export async function fetchCars() {

  const headers: {
    'X-RapidAPI-Key': 'f996dfce6bmsh4274148b9d1cab2p10ee15jsn8c0345275220',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla)
}