import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { SharedModule } from './shared/shared.module';
import { AbenwoodHeaderModule } from './abenwood-header/abenwood-header.module';
import { AbenwoodAboutModule } from './abenwood-about/abenwood-about.module';
import { AbenwoodCtaModule } from './abenwood-cta/abenwood-cta.module';
import { AbenwoodContactModule } from './abenwood-contact/abenwood-contact.module';
import { AbenwoodHeroModule } from './abenwood-hero/abenwood-hero.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AbenwoodFactsModule } from './abenwood-facts/abenwood-facts.module';
import { AbenwoodServicesModule } from './abenwood-services/abenwood-services.module';
import { AbenwoodFooterModule } from './abenwood-footer/abenwood-footer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireMessagingModule,
    AbenwoodHeaderModule,
    AbenwoodAboutModule,
    AbenwoodCtaModule,
    AbenwoodContactModule,
    AbenwoodHeroModule,
    SharedModule,
    AbenwoodFactsModule,
    AbenwoodServicesModule,
    AbenwoodFooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
