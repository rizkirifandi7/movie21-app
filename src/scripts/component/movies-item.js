class MovieItem extends HTMLElement {
	set movie(movie) {
		this._movie = movie;
		this.render();
	}

	get genreId() {
		return this._movie.genre_ids;
	}

	render() {
		this.className = "col mb-4";
		this.innerHTML = `
        <style>
            .card .card-img-container {
                position: relative;
                overflow: hidden;
            }
            .card .card-img {
                transition: transform 0.3s ease;
            }
            .card .ratings {
                position: absolute;
                bottom: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.5);
                color: white;
                padding: 5px;
                display: none;
            }
            .card:hover .ratings {
                display: block;
            }
            .card:hover .card-img {
                transform: scale(1.1); 
            }
        </style>

        <div class="card card-content" data-id="${this._movie.id}">
            <div class="card-img-container">
                <img src="https://image.tmdb.org/t/p/w500/${
									this._movie.poster_path
								}" class="card-img-top card-img" alt="${this._movie.original_title}">
                <span class="ratings">
                    <i class="bi bi-star-fill"></i>
                    ${parseFloat(this._movie.vote_average).toFixed(1)}
                </span>
            </div>
            <div class="card-body">
                <h5 class="card-title text-white fs-6 text-truncate">${this._movie.original_title}</h5>
                <div class="row card-text">
                    <div class="col-8">
                        <span>${new Date(this._movie.release_date).getFullYear()}</span>
                    </div>
                </div>
            </div>
        </div>`;
	}
}

customElements.define("movie-item", MovieItem);

