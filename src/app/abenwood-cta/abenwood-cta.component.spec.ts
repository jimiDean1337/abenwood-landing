import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodCtaComponent } from './abenwood-cta.component';

describe('AbenwoodCtaComponent', () => {
  let component: AbenwoodCtaComponent;
  let fixture: ComponentFixture<AbenwoodCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
