import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { DashboardComponent } from './dashboard.component';

@Component({
  selector: 'app-profile',
  template: ''
})
class MockProfileComponent {
}

@Component({
  selector: 'app-posts-list',
  template: ''
})
class MockPostsListComponent {

}

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent, MockProfileComponent, MockPostsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create dashboard', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
