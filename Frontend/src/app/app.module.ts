import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './modules/login/login.module';
import { RegisterModule } from './modules/register/register.module';
import { NewsFeedModule } from './modules/news-feed/news-feed.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SettingModule } from './modules/setting/setting.module';
import { AdminModule } from './modules/admin/admin.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DatetransPipe } from './shared/datetrans.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    NavBarComponent,
    DatetransPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    RegisterModule,
    NewsFeedModule,
    ProfileModule,
    SettingModule,
    AdminModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
