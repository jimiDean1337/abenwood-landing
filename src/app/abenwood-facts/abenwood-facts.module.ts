import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodFactsComponent } from './abenwood-facts.component';

@NgModule({
  declarations: [AbenwoodFactsComponent],
  imports: [
    SharedModule
  ],
	entryComponents: [AbenwoodFactsComponent],
	exports: [AbenwoodFactsComponent],
})
export class AbenwoodFactsModule { }
