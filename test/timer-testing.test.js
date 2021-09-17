import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/pages/timer-page.js';

describe('MyApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<timer-page></timer-page>`);
  });

  it('renders component app-button', () => {
    const button = element.querySelector('app-button');
    expect(button).to.exist;
  });

  it('renders component app-inputs', () => {
    const timer = element.querySelectorAll('app-timer');
    expect(timer).to.exist;
  });
});
