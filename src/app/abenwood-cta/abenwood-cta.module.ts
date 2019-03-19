import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodCtaComponent } from './abenwood-cta.component';

@NgModule({
  declarations: [AbenwoodCtaComponent],
	imports: [
		SharedModule
	],
	exports: [AbenwoodCtaComponent],
	entryComponents: [AbenwoodCtaComponent]
})
export class AbenwoodCtaModule { }
