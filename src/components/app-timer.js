import { html, css, LitElement } from 'lit';
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["pad"] }] */

export class AppTimer extends LitElement {
  static get styles() {
    return css`
      #time {
        font-family: monospace;
        color: lightgray;
        font-size: 5em;
        padding-top: 1em;
        text-align: center;
      }
    `;
  }

  static get properties() {
    return {
      stop: { type: Boolean },
      seconds: { type: String },
      minutes: { type: String },
      hours: { type: String },
      user: { type: String },
    };
  }

  constructor() {
    super();

    this.stop = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.verifyTime();
  }

  updated(changedProps) {
    if (changedProps.has('stop')) {
      if (this.stop) {
        this.stopTimer();
      }
    }
  }

  verifyTime() {
    const timer = this.getTimer();
    if (timer) {
      this.fillTime(timer);
      const timerArr = timer.split(':');
      this.setTimer(timerArr[0], timerArr[1], timerArr[2]);
    } else {
      this.setTimer();
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    const time = `${this.hours}:${this.minutes}:${this.seconds}`;
    localStorage.setItem(this.user, time);
  }

  getTimer() {
    const time = localStorage.getItem(this.user);
    if (time) {
      return time;
    }
    return null;
  }

  fillTime(timer) {
    const [hours, minutes, seconds] = timer.split(':');
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  setTimer(h = 0, m = 0, s = 0) {
    this.seconds = '00';
    this.minutes = '00';
    this.hours = '00';
    let seconds = Number(s);
    let minutes = Number(m);
    let hours = Number(h);

    this.interval = setInterval(() => {
      seconds += 1;
      this.seconds = this.pad(seconds);
      if (seconds === 60) {
        seconds = 0;
        this.seconds = '00';
        minutes += 1;
        this.minutes = this.pad(minutes);
      }
      if (minutes === 60) {
        minutes = 0;
        this.minutes = '00';
        hours += 1;
        this.hours = this.pad(hours);
      }
    }, 1000);
    this.requestUpdate();
  }

  pad(val) {
    const valString = `${val}`;
    if (valString.length < 2) {
      return `0${valString}`;
    }
    return valString;
  }

  render() {
    return html`
      <span id="time">${this.hours}:</span
      ><span id="time">${this.minutes}:</span
      ><span id="time">${this.seconds}</span>
      <br />
    `;
  }
}
customElements.define('app-timer', AppTimer);
