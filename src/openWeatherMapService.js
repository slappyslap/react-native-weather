class openWeatherMapDataService {

    baseURL = "https://api.openweathermap.org/data/2.5/";
    APIKey = "5c239cde6675d9cccc63f41c295e25bc";

    forecast(id) {
        return fetch(`${this.baseURL}/forecast?id=${id}&lang=fr&units=metric&appid=${this.APIKey}`, { method: 'get' })
            .then(function(result) {
                return result.json();
            })
    }

    find(lat, lon) {
        return fetch(`${this.baseURL}/weather?lat=${lat}&lon=${lon}&lang=fr&units=metric&appid=${this.APIKey}`, { method: 'get' })
            .then(function(result) {
                return result.json();
            })
    }
}
export default new openWeatherMapDataService();