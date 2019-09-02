import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faGithub, faLinkedin, faSkype, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ProfileComponent} from './profile/profile.component';
import {WorktimelineComponent} from './profile/worktimeline/worktimeline.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WorktimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faTwitter, faSkype, faBriefcase);
  }
}
