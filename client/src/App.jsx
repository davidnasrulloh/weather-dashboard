import axios from "axios";
import AddCity from "./components/AddCity";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import ShowWeather from "./components/ShowWeather";


function App() {

  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCities()
    // console.log(cities)
  }, [cities])

  const handleSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    if (city !== '') {
      addCity(city);
    } else {
      alert('Masukkan data kota terlebih dahulu')
    }
  }

  const addCity = async (city) => {
    await axios.post(`/api/cities`, { city })
    getCities();
    setCity('');
  }

  const getCities = async () => {
    const { data } = await axios.get(`/api/cities`);
    const cities = data.cities.map((city) => city.city_name);
    // console.log(cities)
    setCities(cities);
  }

  const getWeather = async (city) => {
    const { data } = await axios.get(`/api/weather/${city}`)
    setWeather(data);
  }

  return (
    <div className="container text-center mx-auto my-20 text-gray-700">
      <h1 className='text-3xl text-gray-600 font-bold'>Weather Dashboard | David Nasrulloh</h1>
      <p className='text-lg my-2'>The current weather for your favorite cities!</p>
      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />
      <Weather cities={cities} handleSelectCity={(e) => getWeather(e.target.value)} />
      {
        weather && <ShowWeather data={weather} />
      }
    </div>
  );
}

export default App;
