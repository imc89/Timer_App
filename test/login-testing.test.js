import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/pages/login-page.js';

describe('MyApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<login-page></login-page>`);
  });

  it('renders component app-button', () => {
    const button = element.querySelector('app-button');
    expect(button).to.exist;
  });

  it('renders component app-inputs', () => {
    const input = element.querySelectorAll('app-input');
    expect(input).to.exist;
  });
});
