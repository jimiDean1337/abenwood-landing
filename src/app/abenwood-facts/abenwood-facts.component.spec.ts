import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodFactsComponent } from './abenwood-facts.component';

describe('AbenwoodFactsComponent', () => {
  let component: AbenwoodFactsComponent;
  let fixture: ComponentFixture<AbenwoodFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
