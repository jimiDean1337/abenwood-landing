import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbenwoodHeaderModule } from './abenwood-header/abenwood-header.module';
import { AbenwoodAboutModule } from './abenwood-about/abenwood-about.module';
import { AbenwoodCtaModule } from './abenwood-cta/abenwood-cta.module';
import { AbenwoodContactModule } from './abenwood-contact/abenwood-contact.module';
import { AbenwoodHeroModule } from './abenwood-hero/abenwood-hero.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    AbenwoodHeaderModule,
    AbenwoodAboutModule,
    AbenwoodCtaModule,
    AbenwoodContactModule,
    AbenwoodHeroModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
