const api = {
  key: '12ad92778c100cff3285c6e695c7a946',
  base: 'http://api.openweathermap.org/data/2.5/',
};
let Weathers = [];
const cities = [
  'Вена',
  'Баку',
  'Ереван',
  'Ватикан',
  'Минск',
  'Лондон',
  'Берлин',
  'Хельсинки',
  'Москва',
];

const fetchTours = async (name) => {
  try {
    const response = await fetch(
      `${api.base}weather?q=${name}&appid=${api.key}`
    );
    const data = await response.json();
    if (data.cod === '404') {
      Weathers.push('data');
    } else {
      Weathers.push(data);
    }
  } catch (error) {
    console.log(error);
  }
};

cities.map((citi) => fetchTours(citi));

export default Weathers;
