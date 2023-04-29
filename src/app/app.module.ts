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
import { COMPONENTS } from './components';
import { AboutMeModule } from './about-me/about-me.module';
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { WorkModule } from './work/work.module';

@NgModule({
  declarations: [
    AppComponent,
    ReplaceTagDirective,
    ...ROUTES,
    ...COMPONENTS,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AboutMeModule,
    BlogModule,
    CoreModule,
    ContactModule,
    WorkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
