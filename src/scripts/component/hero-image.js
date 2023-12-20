import Hero from "../../assets/heroo.jpeg";

class HeroImage extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
        <div id="carouselExampleControls" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-inner rounded-4 box">
          <div class="carousel-item active">
            <img src="${Hero}" class="d-block img-hero" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${Hero}" class="d-block img-hero" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${Hero}" class="d-block img-hero" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>`;
	}
}

customElements.define("hero-image", HeroImage);

