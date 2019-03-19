import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodHeaderComponent } from './abenwood-header.component';

@NgModule({
  declarations: [AbenwoodHeaderComponent],
  imports: [
    SharedModule
  ],
  exports: [AbenwoodHeaderComponent],
  entryComponents: [AbenwoodHeaderComponent]
})
export class AbenwoodHeaderModule { }
