import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodAboutComponent } from './abenwood-about.component';

describe('AbenwoodAboutComponent', () => {
  let component: AbenwoodAboutComponent;
  let fixture: ComponentFixture<AbenwoodAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
