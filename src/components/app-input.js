import { html, css, LitElement } from 'lit';

export class AppInput extends LitElement {

  static get styles() {
    return css`
      input {
        font-size: 1rem;
        outline: none;
        border: none;
        border-radius: 0px;
        padding: 1rem 0.6rem;
        color:  #333333;
        border-bottom: 1px solid  #333333;
        background: transparent;
        cursor: text;
        margin-left: auto;
        width: 95%;
        margin-right: auto;
      }
    `;
  }

  static get properties() {
    return {
      types : { type: String },
      placeholder: {type: String},
      child: {type: Object}
    };
  }

  firstUpdated() {
    this.child = this.shadowRoot.querySelector('input');
  }

  render() {
    return html`

    <input .type="${this.types}" .placeholder="${this.placeholder}"/>
    `;
  }
}
customElements.define('app-input', AppInput);
