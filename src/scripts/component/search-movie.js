import DataSource from "../data/data-source.js";

class SearchMovie extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	set clickEvent(event) {
		this._clickEvent = event;
		this.render();
	}

	get value() {
		return this.querySelector("#searchElement").value;
	}

	render() {
		this.innerHTML = `
        <div class="mb-4">
                <div class="search-form form-group" id="form">
                    <i class="bi bi-search icon"></i>
                    <input placeholder="Explore what movies you want to find..." class="form-control me-2" id="searchElement" type="search"/>
                </div>
        </div>`;

		this.querySelector("#searchElement").addEventListener("input", () => {
			if (!this.value.trim()) {
				DataSource.getAllMovie("movie");
			} else {
				this._clickEvent();
			}
		});
	}
}

customElements.define("search-movie", SearchMovie);

