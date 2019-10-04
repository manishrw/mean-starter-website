import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfileComponent} from "./profile/profile.component";
import {TravelComponent} from "./travel/travel.component";
import {BlogComponent} from "./blog/blog.component";

const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'profile', redirectTo: '/', pathMatch: 'full'},
  {path: 'travel', component: TravelComponent},
  {path: 'blog', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
