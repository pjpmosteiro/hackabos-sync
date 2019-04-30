import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrvNavComponent } from './prv-nav.component';

describe('PrvNavComponent', () => {
  let component: PrvNavComponent;
  let fixture: ComponentFixture<PrvNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrvNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrvNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
