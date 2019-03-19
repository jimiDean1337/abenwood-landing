import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodContactComponent } from './abenwood-contact.component';

describe('AbenwoodContactComponent', () => {
  let component: AbenwoodContactComponent;
  let fixture: ComponentFixture<AbenwoodContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
