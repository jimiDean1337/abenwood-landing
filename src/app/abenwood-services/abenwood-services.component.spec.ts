import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodServicesComponent } from './abenwood-services.component';

describe('AbenwoodServicesComponent', () => {
  let component: AbenwoodServicesComponent;
  let fixture: ComponentFixture<AbenwoodServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
