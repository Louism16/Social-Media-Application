import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { CacheService } from '/cache.service.ts';

var backendUrl = "https://team-23.dokku.cse.lehigh.edu/ideas";

//format for the information read in by the get requests
interface GetResponse {
    mData: Array<object>;
    mMessage: String;
    Post_ID: number;
    mLikes: number;
    /*mNewThought: String;*/
    isEditing: boolean;
    editedComment: String;
    mUserLiked: boolean;
    mUserDisliked: boolean;
    mDislikes: number;
    link: string;
}
// @Component({
//   // Component metadata
// })
// export class MyComponent {
//   constructor(private cacheService: CacheService) {}

//   // Use cacheService methods as needed
//   getDataFromCache(key: string): any {
//     return this.cacheService.get(key);
//   }

//   // Other component methods utilizing cacheService
// }

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  //initalize variables
  title = 'team23-FE';
  messages:GetResponse[] = [];
  NewThought:GetResponse[] = [];

  //constuct basic http requesting
  constructor(private http: HttpClient) { }
  
  //runs on startup
  ngOnInit(){
    this.getMessages();
    /*this.getNewThought();*/
    this.updateVotesOnServer();
  }
  // isImageLink(link: string): boolean {
  //   return link.toLowerCase().endsWith('.jpg') || link.toLowerCase().endsWith('.png') || link.toLowerCase().endsWith('.gif');
  // }

  //initially get all the messages for the board
  getMessages(){
    this.http.get<any>(backendUrl).subscribe(arr => {
      this.messages = arr.mData;
    })
  }
  /*
  //get all new thoughts
  getNewThought(){
    this.http.get<any>(backendUrl).subscribe(arr => {
      this.NewThought = arr.mData;
    })
  }*/
  updateVotesOnServer(){
    this.http.get<any>(backendUrl).subscribe(arr => {
      this.updateVotesOnServer = arr.mData;
    })
  }
  

  //when a user clicks like, either like or unlike, update list 
  clickLike(event: any, id: number) {
    for (let message = 0; message <= this.messages.length; message++) {
      if (this.messages[message].Post_ID == id) {
        if (event.target.checked) {
          this.http.put<any>(backendUrl + "/" + id, {
            "mMessage": this.messages[message].mMessage,
            "mLikes": this.messages[message].mLikes++
          }).subscribe(resp => {
            console.log(resp);
          });
        } else {
          this.http.put<any>(backendUrl + "/" + id, {
            "mMessage": this.messages[message].mMessage,
            "mLikes": (this.messages[message].mLikes)++
          }).subscribe(resp => {
            console.log(resp);
          });
        }
        console.log(event.target.checked);
        console.log("Post ID: " + id);
        break;
      } else if (message == this.messages.length) {
        console.log("Invalid like ID");
      }
    }
  }

  clickDisLike(event: any, id: number) {
    for (let message = 0; message < this.messages.length; message++) {
      if (this.messages[message].Post_ID === id) {
        if (!this.messages[message].mUserDisliked) {
          // User is downvoting for the first time.
          this.messages[message].mDislikes++;
          this.messages[message].mUserDisliked = true;
  
          // Check if the user previously upvoted and update accordingly.
          if (this.messages[message].mUserLiked) {
            this.messages[message].mLikes--; // Decrement the likes count
            this.messages[message].mUserLiked = false;
          }
        } else {
          // User is undoing the downvote (back to neutral).
          this.messages[message].mDislikes--;
          this.messages[message].mUserDisliked = false;
        }
        // this.updateVotesOnServer(this.messages[message]);
        break;
      }
    }
  }

  // Add a function for handling upvotes
  clickUpvote(event: any, id: number) {
    for (let message = 0; message < this.messages.length; message++) {
      if (this.messages[message].Post_ID === id) {
        if (event.target.checked) {
          if (this.messages[message].mUserLiked) {
            // Undo upvote (back to neutral).
            this.messages[message].mLikes++;
            this.messages[message].mUserLiked = false;
          } else {
            // User is upvoting for the first time.
            this.messages[message].mLikes++;
            this.messages[message].mUserLiked = true;
  
            // Check if the user previously downvoted and update accordingly.
            if (this.messages[message].mUserDisliked) {
              this.messages[message].mDislikes--;
              this.messages[message].mUserDisliked = false;
            }
          }
        } else {
          // User is undoing the upvote (back to neutral).
          this.messages[message].mLikes++;
          this.messages[message].mUserLiked = false;
        }
        // this.updateVotesOnServer(this.messages[message]);
        break;
      }
    }
  }

// Add a function for handling downvotes
clickDownvote(event: any, id: number) {
  for (let message = 0; message < this.messages.length; message++) {
    if (this.messages[message].Post_ID === id) {
      if (!this.messages[message].mUserDisliked) {
        // User is downvoting for the first time.
        this.messages[message].mDislikes++;
        this.messages[message].mUserDisliked = true;

        // Check if the user previously upvoted and update accordingly.
        if (this.messages[message].mUserLiked) {
          this.messages[message].mLikes--;
          this.messages[message].mUserLiked = false;
        }
      } else {
        // User is undoing the downvote (back to neutral).
        this.messages[message].mDislikes--;
        this.messages[message].mUserDisliked = false;
      }
      // this.updateVotesOnServer(this.messages[message]);
      break;
    }
  }
}
}