import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
// services
import { AuthService } from '../../services/auth.service';
// models
import { User } from '../../models/user.model';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("f") form: NgForm;
  emailNotFound = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .authenticate(this.form.value.email)
      .subscribe((data: User | boolean) => {
        if (!data) {
          this.emailNotFound = true;
        } else {
          this.router.navigate([`/profile/${data[0].id}`]);
        }
      });
  }
}
