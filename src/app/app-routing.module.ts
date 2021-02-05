import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducatorsComponent } from './educators/educators.component';
import { HomeComponent } from './home/home.component';
import { ParentsComponent } from './parents/parents.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuario', component: UserComponent },
  { path: 'padres', component: ParentsComponent },
  { path: 'educadores', component: EducatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
