import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodHeroComponent } from './abenwood-hero.component';

describe('AbenwoodHeroComponent', () => {
  let component: AbenwoodHeroComponent;
  let fixture: ComponentFixture<AbenwoodHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
