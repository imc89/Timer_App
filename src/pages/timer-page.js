import { html, css, LitElement } from 'lit';
import '../components/app-timer.js';
import '../components/app-button.js';

class TimerPage extends LitElement {
  static get styles() {
    return css`
      div {
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
      }
    `;
  }

  static get properties() {
    return {
      _stop: { type: Boolean },
      _user: { type: String },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    const arr = window.location.pathname.split('/');
    this._user = arr[arr.length - 1];
  }

  handleClick() {
    this._stop = true;
  }

  render() {
    return html`
      <div>
        <h1>WELCOME!</h1>
        <span>The last time you acccessed was:</span>
        <br />
        <app-timer .stop="${this._stop}" .user="${this._user}"></app-timer>
        <a href="/">
          <app-button text="LOGOUT" @click="${this.handleClick}"></app-button>
        </a>
      </div>
    `;
  }
}
customElements.define('timer-page', TimerPage);
