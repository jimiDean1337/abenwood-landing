import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodFooterComponent } from './abenwood-footer.component';

describe('AbenwoodFooterComponent', () => {
  let component: AbenwoodFooterComponent;
  let fixture: ComponentFixture<AbenwoodFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
