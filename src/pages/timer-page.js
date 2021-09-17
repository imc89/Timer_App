import { LitElement, html } from "lit-element";
import  '../components/app-timer.js';
import  '../components/app-button.js';

class TimerPage extends LitElement {

  static get properties() {
    return {
      _stop : { type: Boolean }
    };
  }

  handleClick() {
    this._stop = true;
  }


  render() {
    return html`
    <style>
      div {
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
      }
    </style>

    <div>
      <h1>WELCOME!</h1>
      <span>The last time you acccessed was:</span>
      <app-timer .stop="${this._stop}"></app-timer>
      <a href="/">
        <app-button text="LOGOUT" @click="${this.handleClick}"></app-button>
      </a>
    </div>
    `;
  }


}
customElements.define("timer-page", TimerPage);
