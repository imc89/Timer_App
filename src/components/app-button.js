import { html, css, LitElement } from 'lit';

export class AppButton extends LitElement {

  static get styles() {
    return css`
      button {
          margin-top: 15px;
          background-color: rgb(37, 99, 235);
          font-weight: bold;
          color: white;
          padding: 10px 16px;
          font-size: 1rem;
          border-radius: .5rem;
          border: none;
          cursor: pointer;
          outline:0;
      }
    `;
  }

    static get properties() {
      return {
        text : { type: String }
      };
    }

    render() {

        return html`

          <button  id="loginbutton">${this.text}</button>
        `;
    }
}
customElements.define('app-button', AppButton);
