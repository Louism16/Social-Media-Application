// import { Component,OnInit, ViewChild, ElementRef } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// var backendUrl = "https://team-23.dokku.cse.lehigh.edu/login";

// @Component({
//     templateUrl: './login.component.html',
//     styleUrls: ['./login.component.css']
// })

// export class LoginComponent implements OnInit{
//     title = 'loginGoogle';
    
//   auth2: any;
    
//   @ViewChild('loginRef', {static: true }) loginElement!: ElementRef;
     
//   constructor() { }
    
//   ngOnInit() {
     
//     this.googleAuthSDK();
//   }
    
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   callLoginButton() {
     
//     this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
//       (googleAuthUser:any) => {
     
//         let profile = googleAuthUser.getBasicProfile();
//         console.log('Token || ' + googleAuthUser.getAuthResponse().id_token);
//         console.log('ID: ' + profile.getId());
//         console.log('Name: ' + profile.getName());
//         console.log('Image URL: ' + profile.getImageUrl());
//         console.log('Email: ' + profile.getEmail());
            
//        /* Write Your Code Here */
    
//       }, (error:any) => {
//         alert(JSON.stringify(error, undefined, 2));
//       });
 
//   }
  
//   /**
//    * Write code on Method
//    *
//    * @return response()
//    */
//   googleAuthSDK() {
     
//     (<any>window)['googleSDKLoaded'] = () => {
//       (<any>window)['gapi'].load('auth2', () => {
//         this.auth2 = (<any>window)['gapi'].auth2.init({
//           client_id: '144872185244-05iosvhj65tmipi4cqdc6st515gkvhc7.apps.googleusercontent.com',
//           client_secret: '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',
//           cookiepolicy: 'single_host_origin',
//           scope: 'profile email'
//         });
//         this.callLoginButton();
//       });
//     }
     
//     (function(d, s, id){
//       var js, fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {return;}
//       js = d.createElement('script'); 
//       js.id = id;
//       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//       fjs?.parentNode?.insertBefore(js, fjs);
//     }(document, 'script', 'google-jssdk'));
   
//   }
// }
// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Perform any necessary authentication logic here (for demo, skipping it)
    // Redirect to home page after clicking the login button
    this.router.navigate(['/home']);
  }
}