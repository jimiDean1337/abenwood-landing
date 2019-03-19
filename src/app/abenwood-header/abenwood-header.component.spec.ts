import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodHeaderComponent } from './abenwood-header.component';

describe('AbenwoodHeaderComponent', () => {
  let component: AbenwoodHeaderComponent;
  let fixture: ComponentFixture<AbenwoodHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
