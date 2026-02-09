import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Mayhem";
    this.image = "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Lady_Gaga_-_Mayhem.png/250px-Lady_Gaga_-_Mayhem.png";
    this.alt = "Lady Gaga";
    this.cardButton = "Details";
    this.btnLink = "https://hax.psu.edu";
    this.body = "Lady Gaga's 7th studio albulm, Mayhem, explores love, chaos, fame, and identity. It was preceded by two singles: 'Disease' and 'Abracadabra'.";
  }

  static get styles() {
    return css`
      .card {
  border: 5px solid;
  border-radius: 5%;
  background-color: var(--my-card-background-color);
  text-align: center;
  width: 300px;
  color: var(--my-card-text-color);
  font-family: var(--my-card-font-family);
}

:root, html, body {
  font-size: 16px; 
}

.card.fancy {
  background-color: #F76A2A;
}

#cardList {
  display: flex;
}

.wrapper {
  display: flex;
  gap: 1rem; 
  flex-wrap: wrap; 
}

.card-image {
  border-radius: 10%;
  padding: 16px 16px 0px 16px;
  margin: 4px 4px 4px 4px;
  width: 250px;
}

.card-details {
  text-align: left;
  padding: 0 16px 0px 16px;
  margin: 4px 4px 4px 4px;
  align: left;
}

.card-title {
  text-align: left;
  padding: 0 16px 0px 16px;
  margin: 4px 4px 4px 4px;
  align: left;
}

.btn {
  background-color: var(--my-card-btn-color);
  text-align: center;
  color: white;
  font-size: 20px;
  border-radius: 10%;
  padding: 16px 100px 16px 100px;
  margin: 10px 10px 16px 16px;
}

.btn:hover {
  background-color: var(--my-card-btn-hover-color);
}

@media (min-width: 500px) and (max-width: 800px) {
  .btn {
    display: block;
  }
}

@media (max-width: 500px) {
  .card {
    transform: scale(0.9);
  }
  .card img {
    width: auto;
    height: auto;
  }
   .btn {
    display: none;
  }
}
    `;
  }

  render() {
  // use slots for body text
    return html`
    <div id="wrapper">
<div class="card">
  <img class="card-image" src="${this.image}" alt="${this.alt}">
  <h1 class="card-title">${this.title}</h1>
  <div class="card-details">
  <p>${this.body}</p>
  </div>
  <a href="${this.btnLink}">
    <button class="btn">${this.cardButton}</button>
  </a>
  </div>
  </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      fancy: { type: Boolean }, 

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
