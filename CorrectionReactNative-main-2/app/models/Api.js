import axios from 'axios'

export default class Api {
  token = "3eae3c077969fa60150d994cbf91f14e0a1a8948cd935e21fbbe118c00b7287d"

  async search(city) {
    const url =
      'https://api.meteo-concept.com/api/location/cities?token=' +
      this.token +
      '&search=' +
      city
    return await axios.get(url).then((response) => response.data)
  }

  async getMeteoForCityFor5Days(insee) {
    const url =
      'https://api.meteo-concept.com/api/forecast/daily?token=' +
      this.token +
      '&insee=' +
      insee

    const result = await axios.get(url).then((response) => response.data)

    return result.forecast.slice(0,6)
  }

  async getMeteoForCityForNextHour(insee) {
    const url =
      'https://api.meteo-concept.com/api/forecast/daily/periods?token=' +
      this.token +
      '&insee=' +
      insee
    return await axios.get(url).then((response) => response.data)
  }
}
