import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodFooterComponent } from './abenwood-footer.component';

@NgModule({
  declarations: [AbenwoodFooterComponent],
  imports: [
    SharedModule
  ],
	entryComponents: [AbenwoodFooterComponent],
	exports: [AbenwoodFooterComponent],
})
export class AbenwoodFooterModule { }
