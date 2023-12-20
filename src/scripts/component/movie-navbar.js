class Navbar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
      <nav class="navbar mb-4">
        <div class="container my-2 d-flex justify-content-center">
          <a class="navbar-brand fw-bold text-white fs-1">Movie21</a>
        </div>
      </nav>`;
	}
}

customElements.define("movie-navbar", Navbar);

