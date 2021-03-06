import { Component, ChangeDetectorRef, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { CustomersService } from './customers/customers.service';
import { UserSettingsService } from './core/user-settings.service';
import { Theme } from './shared/enums';
import { UserSettings } from './shared/interfaces';
import { Observable, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
    //  "shared-styles/App.scss"
    ]

})
export class AppComponent implements OnInit {
  customersLength$: Observable<number> = new Observable<number>();
  userSettings$: Observable<UserSettings> = new Observable<UserSettings>();
  authState!: AuthState;
  user: CognitoUserInterface | undefined;

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, 
    private customersService: CustomersService,
    private userSettingsService: UserSettingsService,
    private ref: ChangeDetectorRef) { }
  
  ngOnInit() {

    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
 
    this.userSettings$ = merge(
      this.userSettingsService.getUserSettings(),     // Get initial data
      this.userSettingsService.userSettingsChanged()  // Handle any changes
        .pipe(
          // tap(userSettings => console.log('userSettingsChanged: ', userSettings)),
          map(userSettings => this.updateTheme(userSettings as UserSettings))
        )
    );

    this.customersLength$ = this.customersService.stateChanged
        .pipe(
          map(state => {
            if (state && state.customers) {
              return state.customers.length;
            }
            return 0;
          })
        );
        this.ref.detectChanges();


    })
  }

  updateTheme(userSettings: UserSettings) {      
      this.document.documentElement.className = (userSettings && userSettings.theme === Theme.Dark) ? 'dark-theme' : 'light-theme';
      return userSettings;
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}