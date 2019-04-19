
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavTest01Component } from './nav-test01.component';

describe('NavTest01Component', () => {
  let component: NavTest01Component;
  let fixture: ComponentFixture<NavTest01Component>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavTest01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTest01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
