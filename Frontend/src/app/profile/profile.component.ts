// import { Component, OnInit } from '@angular/core';


// var backendUrl = "https://team-23.dokku.cse.lehigh.edu/profile";

// interface UserProfile {
//   firstName: string;
//   lastName: string;
//   email: string;
//   genderIdentity: string;
//   sexualOrientation: string;
//   //note: string;
// }

// @Component({
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css'],
// })
// export class ProfileComponent implements OnInit {
//   userProfile: UserProfile = {
//     firstName: 'Louis',
//     lastName: 'Marca',
//     email: 'lom225@lehigh.edu',
//     genderIdentity: '',
//     sexualOrientation: '',
//     //note: 'This is a note about the user.',
//   };

//   isEditing: boolean = false;

//   ngOnInit() {
//     // Fetch user profile data from your API if needed
//   }

//   editProfile() {
//     this.isEditing = true;
//   }

//   cancelEdit() {
//     this.isEditing = false;
//     // Reset the user profile to the original state or fetch it again from the API
//   }

//   updateProfile() {
//     // Send the updated profile data to your API
//     console.log('Updated Profile:', this.userProfile);
//     this.isEditing = false; // Exit edit mode
//   }
// }
import { Component, OnInit } from '@angular/core';

// Replace the API URL with your actual backend URL
const backendUrl = "https://team-23.dokku.cse.lehigh.edu/profile";

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  genderIdentity: string;
  sexualOrientation: string;
}

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile = {
    firstName: 'Louis',
    lastName: 'Marca',
    email: 'lom225@lehigh.edu',
    genderIdentity: 'Male',
    sexualOrientation: 'Heterosexual',
  };

  isEditing = false;

  ngOnInit() {
    // Fetch user profile data from your API if needed
  }

  editProfile() {
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
    // Reset the user profile to the original state or fetch it again from the API
  }

  updateProfile() {
    // Send the updated profile data to your API
    console.log('Updated Profile:', this.userProfile);
    this.isEditing = false; // Exit edit mode
  }
}