import { enableProdMode } from "@angular/core";

import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideAnimationsAsync()],
});
