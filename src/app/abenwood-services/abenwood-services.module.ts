import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodServicesComponent } from './abenwood-services.component';

@NgModule({
  declarations: [AbenwoodServicesComponent],
  imports: [
    SharedModule
  ],
	entryComponents: [AbenwoodServicesComponent],
	exports: [AbenwoodServicesComponent],
})
export class AbenwoodServicesModule { }
