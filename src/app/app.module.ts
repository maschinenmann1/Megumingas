import { NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* ngx-bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ReplaceTagDirective } from './directives/replace-tag.directive';
import { ROUTES } from './routes';
import { SharedModule } from './shared';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ReplaceTagDirective,
    ...ROUTES,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
