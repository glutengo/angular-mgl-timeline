import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo.module';
import * as smoothScroll from 'smoothscroll-polyfill';

smoothScroll.polyfill();
window['__forceSmoothScrollPolyfill__'] = true;

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
