import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './demo.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
