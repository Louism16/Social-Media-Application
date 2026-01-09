import { Routes, RouterModule } from '@angular/router';

import { NewIdeaComponent } from './newIdea/newIdea.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ProfileComponent } from './profile';

//pageIds
// const routes: Routes = [{
//     path: "", component: HomeComponent //Home page with all ideas
//     },{
//     path: "newIdea", component: NewIdeaComponent //User is writing a new idea
//     },{
//     path: "login", component: LoginComponent
//     },{
//     path: "profile", component: ProfileComponent
//     },
//     {
//         path: "**", component: HomeComponent //if not any of the other pages, just redirect to home
//     }];
const routes: Routes = [
    {
      path: '', redirectTo: 'login', pathMatch: 'full' // Redirect to login by default
    },
    {
      path: 'login', component: LoginComponent // Login page
    },
    {
        path: 'home', component: HomeComponent
      },
    {
      path: 'newIdea', component: NewIdeaComponent
    },
    {
      path: 'profile', component: ProfileComponent
    },
    {
      path: '**', redirectTo: 'login' // Redirect any unmatched routes to login
    }
  ];
  

export const appRoutingModule = RouterModule.forRoot(routes);