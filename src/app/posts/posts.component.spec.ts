import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component, Input } from "@angular/core";
import { of } from "rxjs";

import { PostsComponent } from "./posts.component";
import { DataStorageService } from "../../services/data-storage.service";

@Component({
  selector: "app-post",
  template: ""
})
class MockPostComponent {
  @Input() post;
}

class MockDataStorage {
  user = { id: 1 };
  fetchPosts(userId) {
    return of(null);
  }
}

describe("PostsComponent", () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent, MockPostComponent],
      providers: [{ provide: DataStorageService, useClass: MockDataStorage }]
    }).compileComponents();
  }));

  it("should create post-list", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should grab data from service and set it to posts", () => {
    // make sure fetchposts will return data
    const dataStorageService = fixture.debugElement.injector.get(
      DataStorageService
    );
    const data = [];
    spyOn(dataStorageService, "fetchPosts").and.returnValue(of(data));
    // run ngOnInit
    fixture.detectChanges();
    expect(component.posts).toBe(data);
  });
});
