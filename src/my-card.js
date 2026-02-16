import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";


export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Mayhem";
    this.image = "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Lady_Gaga_-_Mayhem.png/250px-Lady_Gaga_-_Mayhem.png";
    this.alt = "Lady Gaga";
    this.description = "Lady Gaga's 7th studio album, Mayhem, explores love, chaos, fame, and identity. It was preceded by two singles: 'Disease' and 'Abracadabra'.";
    this.cardButton = "Details";
    this.btnLink = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
    :host([fancy]) {
  display: block;
  border: 3px solid fuchsia;
  background-color: fuchsia

}
      
    .card {
  border: 5px solid;
  border-radius: 5%;
  background-color: var(--my-card-background-color);
  text-align: center;
  width: 300px;
  height: 530px;
  color: var(--my-card-text-color);
  font-family: var(--my-card-font-family);
  display: flex;
  flex-direction: column;
}

:root, html, body {
  font-size: 16px; 
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
  flex: 1;
  overflow: hidden;
}

.card-title {
  text-align: left;
  padding: 0 16px 0px 16px;
  margin: 4px 4px 4px 4px;
}

.description-box {
  height: 100px;
  overflow-y: auto;
  border: 3px solid #ccc;
  padding: 8px;
  box-sizing: border-box;
}

.btn {
  background-color: var(--my-card-btn-color);
  text-align: center;
  color: white;
  font-size: 20px;
  border-radius: 10%;
  padding: 16px 100px 16px 100px;
  margin: 10px 10px 16px 16px;
  margin: auto 10px 16px 16px;
  margin-top: auto;
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

  openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
  // use slots for body text
  //<img class="card-image" 
  //src="${this.image}" alt="${this.alt}">
    return html`
    <div id="wrapper">
<div class="card">
  
<div class="card-image">
  <meme-maker
alt="Up your meme game with hax and allow for more accessible memes"
image-url="${this.image}"
bottom-text="is awesome"
top-text="${this.title}">
</meme-maker>
</div>
  
  <h1 class="card-title">${this.title}</h1>
  <div class="card-details">
   <details ?open="${this.fancy}" @toggle="${this.openChanged}">
      <summary>Description</summary>
        <div class="description-box">
          <slot>${this.description}</slot>
        </div>
  </details>
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
      fancy: { type: Boolean, reflect: true },
      description: { type: String }

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
