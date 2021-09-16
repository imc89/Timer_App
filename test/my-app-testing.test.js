import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/my-app.js';

describe('MyApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<my-app></my-app>`);
  });

  it('renders main', () => {
    const main = element.shadowRoot.querySelector('main');
    expect(main).to.exist;
  });
});
