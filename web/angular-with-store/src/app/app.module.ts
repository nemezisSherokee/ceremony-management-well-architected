import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { UserSettingsComponent } from './user-settings/user-settings.component';

import { AmplifyUIAngularModule  } from '@aws-amplify/ui-angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SelectButtonModule,
        /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule

  ],
  declarations: [AppComponent, UserSettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
