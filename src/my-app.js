import { LitElement, html } from "lit-element";
import './router.js';

class App extends LitElement {

  render() {
    return html`
      <main></main>
    `;
  }
}

customElements.define("my-app", App);

