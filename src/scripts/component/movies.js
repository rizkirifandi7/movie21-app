import "./movies-item.js";

class Movies extends HTMLElement {
	set movies(movies) {
		this._movies = movies;
		this.render();
	}

	render() {
		this.className = "row row-cols-auto row-cols-md-auto justify-content-center";
		this.innerHTML = this._movies.map((movie) => this.createMovieItemElement(movie)).join("");
	}

	createMovieItemElement(movie) {
		const movieItemElement = document.createElement("movie-item");
		movieItemElement.movie = movie;
		return movieItemElement.outerHTML;
	}
}

customElements.define("movie-list", Movies);
