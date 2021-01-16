import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { DataStorageService } from "../../services/data-storage.service";
// import { User } from '../../../models/user.model';

class MockDataStorage {
  getUser() {
    return {
      id: 0,
      name: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    };
  }
}

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [{ provide: DataStorageService, useClass: MockDataStorage }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
  });

  it("should create profile", () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("should grab user from service and set it to user", () => {
    // make sure service will return user
    const dataStorageService = fixture.debugElement.injector.get(
      DataStorageService
    );
    const user = {
      id: 0,
      name: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: ""
        }
      },
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: ""
      }
    };
    spyOn(dataStorageService, "getUser").and.returnValue(user);
    expect(component.user).toEqual(user);
  });
});
