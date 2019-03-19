import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AbenwoodHeroComponent } from './abenwood-hero.component';

@NgModule({
  declarations: [AbenwoodHeroComponent],
	imports: [
		SharedModule
	],
	exports: [AbenwoodHeroComponent],
	entryComponents: [AbenwoodHeroComponent]
})
export class AbenwoodHeroModule { }
