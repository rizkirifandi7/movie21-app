import "../component/movie-navbar.js";
import "../component/hero-image.js";
import "../component/search-movie.js";
import "../component/movies.js";
import "../component/genre.js";

import DataSource from "../data/data-source.js";

const main = () => {
	const searchElement = document.querySelector("search-movie");
	const movieListElement = document.querySelector("movie-list");

	let selectedGenre = [];

	// initialization render movie
	const getAllMovies = (keyword) => {
		DataSource.getAllMovie(keyword).then(renderResult).catch(fallbackResult);
	};

	// search movie
	const onButtonSearchClicked = () => {
		selectedGenre = [];
		setGenreEvent();
		if (onButtonSearchClicked) {
			searchMovie(searchElement.value);
		} else {
			getAllMovies("discover/movie");
		}
	};

	const searchMovie = async (keyword) => {
		try {
			const results = await DataSource.searchMovies(keyword);
			renderResult(results);
		} catch (e) {
			fallbackResult(e);
		}
	};

	const renderResult = (results) => {
		movieListElement.movies = results;
	};

	const fallbackResult = (e) => {
		movieListElement.innerHTML = `
            <style>
                .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            </style>

            <h2 class="placeholder>${e}</h2>
        `;
	};

	// initialization genre movie
	const getGenreMovies = (id) => {
		DataSource.getGenreMovies(id).then(renderResult).catch(fallbackResult);
	};

	// render all movies
	getAllMovies("discover/movie");

	// search movie
	searchElement.clickEvent = onButtonSearchClicked;

	const setGenreEvent = () => {
		const tags = document.querySelectorAll(".tag");
		tags.forEach((tag) => {
			tag.addEventListener("click", handleTagClick);
		});
	};
	setGenreEvent();

	function handleTagClick(e) {
		let genreId = e.target.id;
		if (selectedGenre.includes(genreId)) {
			selectedGenre = selectedGenre.filter((id) => id !== genreId);
		} else {
			selectedGenre.push(genreId);
		}
		console.log(selectedGenre);
		getGenreMovies(selectedGenre.join(","));
		highlightSelection();
	}

	const highlightSelection = () => {
		const tags = document.querySelectorAll(".tag");
		tags.forEach((tag) => {
			tag.classList.remove("highlight");
		});
		selectedGenre.forEach((id) => {
			const highlightedTag = document.getElementById(id);
			highlightedTag.classList.add("highlight");
		});
	};
};

export default main;
