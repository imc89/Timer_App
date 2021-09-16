import { LitElement, html} from "lit-element";
import { AppInputs } from "../components/app-inputs";
import { AppButton } from "../components/app-button";
import { Router } from '@vaadin/router';

const lock = new URL('../../assets/lock.png', import.meta.url).href;
const mock = new URL('../mocks/user.json', import.meta.url).href;


class LoginPage extends LitElement {

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    this.email = this.querySelector("#email");
    this.pass = this.querySelector("#pass");
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

  }


   async handleClick() {
    if (await this.validateUser()) {

      Router.go('/timer');
    }
  }

  render() {
    return html`
    <style>
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
    </style>

    <div >
      <img src=${lock} />
      <app-inputs id="email" types="email" placeholder="email"></app-inputs>
      <app-inputs id="pass" types="password" placeholder="pass"></app-inputs>
      <app-button @click="${this.handleClick}" text="Log in"></app-button>
  </div>
      `;
  }

}
customElements.define("login-page", LoginPage);
