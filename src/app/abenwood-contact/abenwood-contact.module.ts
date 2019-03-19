import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodContactComponent } from './abenwood-contact.component';

@NgModule({
  declarations: [AbenwoodContactComponent],
  imports: [
		SharedModule
  ],
	exports: [AbenwoodContactComponent],
  entryComponents: [AbenwoodContactComponent]
})
export class AbenwoodContactModule { }
