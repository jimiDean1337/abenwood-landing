import { NgModule } from '@angular/core';
import { AbenwoodAboutComponent } from './abenwood-about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AbenwoodAboutComponent],
  imports: [
    SharedModule
  ],
	exports: [AbenwoodAboutComponent],
  entryComponents: [AbenwoodAboutComponent]
})
export class AbenwoodAboutModule { }
