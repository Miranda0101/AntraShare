import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login/login.component';
import { RegisterComponent } from './modules/register/register/register.component';
import { NewsFeedComponent } from './modules/news-feed/news-feed/news-feed.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'newsfeed', component: NewsFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
