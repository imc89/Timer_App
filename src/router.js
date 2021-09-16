import "./pages/login-page.js";
import "./pages/timer-page.js";
import { Router } from '@vaadin/router';

function initRouter() {
  const comp = document.querySelector('my-app');
  const main = comp.shadowRoot.querySelector('main');
  const router = new Router(main);
  router.setRoutes([
    {
      path: '/',
      component: 'login-page'
    },
    {
      path: '/timer',
      component: 'timer-page'
    }
  ]);
}

window.addEventListener('load', () => {
  initRouter();
});
