import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactService } from './contact.service';
import { AbenwoodContactComponent } from './abenwood-contact.component';

@NgModule({
  declarations: [AbenwoodContactComponent],
  imports: [
		SharedModule
  ],
  providers: [ContactService],
	exports: [AbenwoodContactComponent],
  entryComponents: [AbenwoodContactComponent]
})
export class AbenwoodContactModule { }
