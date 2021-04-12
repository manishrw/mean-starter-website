import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {faGithub, faLinkedin, faSkype, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faBriefcase, faBusinessTime, faClock, faEnvelope, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {ProfileComponent, SafeHtmlPipe} from './profile/profile.component';
import {WorktimelineComponent} from './profile/worktimeline/worktimeline.component';
import {EducationtimelineComponent} from './profile/educationtimeline/educationtimeline.component';
import {SkillsComponent} from './profile/skills/skills.component';
import {TravelComponent} from './travel/travel.component';
import {BlogComponent} from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    WorktimelineComponent,
    EducationtimelineComponent,
    SkillsComponent,
    TravelComponent,
    BlogComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faLinkedin, faGithub, faTwitter, faSkype, faBriefcase, faBusinessTime, faClock, faGraduationCap, faEnvelope);
  }
}
