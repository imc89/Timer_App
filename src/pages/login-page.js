import { html, css, LitElement } from 'lit';
import { Router } from '@vaadin/router';
import  '../components/app-input.js';
import '../components/app-button.js';

const lock = new URL('../../assets/lock.png', import.meta.url).href;
const mock = new URL('../mocks/user.json', import.meta.url).href;


class LoginPage extends LitElement {

  static get styles() {
    return css`
     img {
        padding-top: 50px;
        width:100px ;
        height:140px
      }
      div {
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
      }
    `;
  }

  firstUpdated() {
    this.email = this.shadowRoot.querySelector("#email");
    this.pass = this.shadowRoot.querySelector("#pass");
  }

  async validateUser() {
    const email = this.email.child.value;
    const pass = this.pass.child.value;
    if(email==="" || pass==="") {
      return false;
    }

    const response = await fetch(mock);
    const user = await response.json();
    if(user.email === email && user.pass === pass){
      return true;
    }
    return false;
  }


   async handleClick() {
    if (await this.validateUser()) {

      Router.go('/timer');
    }
  }

  render() {
    return html`

    <div >
      <img src=${lock} alt=""/>
      <app-input id="email" types="email" placeholder="email"></app-input>
      <app-input id="pass" types="password" placeholder="pass"></app-input>
      <app-button @click="${this.handleClick}" text="Log in"></app-button>
  </div>
      `;
  }

}
customElements.define("login-page", LoginPage);
