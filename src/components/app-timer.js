import { LitElement, html} from 'lit-element';

export class AppTimer extends LitElement {

  static get properties() {
    return {
      stop : { type: Boolean },
      seconds : { type: String },
      minutes : { type: String },
      hours : { type: String }
    };
  }

  constructor() {
    super();
    this.stop = false;
    this.setTimer();
  }

  updated(changedProps) {
    if(changedProps.has('stop')) {
      if(this.stop) {
        this.stopTimer();
      }
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    const time = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    localStorage.setItem('timer', time);
  }

  setTimer() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    this.seconds = '00';
    this.minutes = '00';
    this.hours = '00';

    this.interval = setInterval(() => {
      seconds += 1;
      this.seconds = this.pad(seconds);
      if(seconds === 60){
        seconds = 0;
        this.seconds = '00';
        minutes += 1;
        this.minutes = this.pad(minutes);
      }
      if(minutes === 60){
        minutes = 0;
        this.minutes = '00'
        hours += 1;
        this.hours = this.pad(hours);
      }
    }, 1000);
  }

  pad(val) {
    const valString = `${val}` ;
    if (valString.length < 2) {
      return `0${valString}`;
    }
      return valString;
  }

  render() {
    return html`
    <style>
     #time {
      font-family: monospace;
      color:lightgray;
      font-size: 5em;
      padding-top: 1em;
      text-align: center;
      }
    </style>

    <span id="time">${this.hours}:</span><span id="time">${this.minutes}:</span><span id="time">${this.seconds}</span>
    <br>
    `;
  }
}
customElements.define('app-timer', AppTimer);
