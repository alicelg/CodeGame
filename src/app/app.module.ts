import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user.component';
import { FooterComponent } from './footer/footer.component';
import { ParentsComponent } from './parents/parents.component';
import { EducatorsComponent } from './educators/educators.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FooterComponent,
    ParentsComponent,
    EducatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
