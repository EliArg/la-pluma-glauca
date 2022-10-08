import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './c/hero/hero.component';
import { NavbarComponent } from './c/navbar/navbar.component';
import { ServicesComponent } from './c/services/services.component';
import { FooterComponent } from './c/footer/footer.component';
import { ContactComponent } from './c/contact/contact.component';
import { ProcessComponent } from './c/process/process.component';
import { WhyComponent } from './c/why/why.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    ProcessComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
