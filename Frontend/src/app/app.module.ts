//Outline all imports, both from angular and application

import { NgModule } from '@angular/core'; //Core
import { BrowserModule } from '@angular/platform-browser'; //Core
import { HttpClientModule } from '@angular/common/http'; //for requesting
import { appRoutingModule } from './app.routing'; //for changing pages
import { FormsModule } from '@angular/forms';

//in app imports
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NewIdeaComponent } from './newIdea';
import { LoginComponent } from './login';
import { ProfileComponent } from './profile';

@NgModule({
  //App sections
  declarations: [
    AppComponent,
    HomeComponent,
    NewIdeaComponent,
    LoginComponent,
    ProfileComponent
  ],
  //what is imported
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    appRoutingModule
  ],
  providers: [],
  //base
  bootstrap: [AppComponent]
})
export class AppModule { }
