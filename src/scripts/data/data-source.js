const axios = require("axios");

// Base URL
const API_URL = "https://api.themoviedb.org/3/";
// API Key
const KEY = "api_key=9bc11dbb5ec2c3c8cdf2f2d3d4e0b064";

class DataSource {
	static buildUrl(path) {
		return `${path}&${KEY}`;
	}

	static async getAllMovie(keyword) {
		try {
			const url = this.buildUrl(`${API_URL}/${keyword}?sort_by=popularity.desc`);
			const response = await axios.get(url);
			return response.data.results;
		} catch (error) {
			return `${keyword} is not found`;
		}
	}

	static async searchMovies(keyword) {
		try {
			if (!keyword.trim()) {
				// Jika kata kunci kosong, tampilkan semua film
				return this.getAllMovie("movie");
			}

			const url = this.buildUrl(
				`${API_URL}/search/movie?language=en-US&query=${encodeURIComponent(keyword)}&page=1&include_adult=false`
			);
			const response = await axios.get(url);
			return response.data.results;
		} catch (error) {
			throw new Error(`${keyword} is not found`);
		}
	}

	static async getGenreMovies(id) {
		try {
			const url = this.buildUrl(`${API_URL}/discover/movie?with_genres=${id}`);
			const response = await axios.get(url);
			return response.data.results;
		} catch (error) {
			throw new Error(`${id} is not found`);
		}
	}
}

export default DataSource;
