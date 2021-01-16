import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
//services
import { AuthService } from "../services/auth.service";
import { DataStorageService } from "../services/data-storage.service";
import { AuthGuard } from "../services/auth-guard.service";
import { ProfileComponent } from "./profile/profile.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./posts/post/post.component";
import { CommentComponent } from "./posts/comment/comment.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "profile/:id",
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    PostsComponent,
    PostComponent,
    CommentComponent
  ],
  providers: [AuthService, DataStorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
