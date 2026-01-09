import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


var backendUrl = "https://team-23.dokku.cse.lehigh.edu/ideas";

// Interface for the expected response structure
interface ApiResponse {
    status: string;
    message: string;
    data: any; // Change 'any' to the expected type of your response data
}

@Component({
    templateUrl: './newIdea.component.html',
    styleUrls: ['./newIdea.component.css']
})

// export class NewIdeaComponent{

//     constructor(private http: HttpClient) { }

//     //Posing a new idea to backend, dummy while backend is set up
//     postIdea(text:String){
//         if(text.length !== 0){
//             this.http.post<any>(backendUrl, 
//                 {
//                     "mLikes": 0, 
//                     "mMessage": text
//                 }).subscribe(resp => {
//                 console.log(resp);
//             })
//         }
//     }

// }
export class NewIdeaComponent {
    linkInput: string = ''; // Variable to hold the inserted link
    selectedFile!: File; // Initialize selectedFile as undefined initially

    constructor(private http: HttpClient) { }

    onFileSelected(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        if (inputElement.files && inputElement.files.length) {
            this.selectedFile = inputElement.files[0]; // Assign the selected file
        }
    }

    postIdea(text: string, link: string, file: File) {
        if (text.length !== 0) {
            const formData = new FormData();
            formData.append('mLikes', '0');
            formData.append('mMessage', text);
            formData.append('link', link); // Add the link to the form data
            if (file) {
                formData.append('fileData', file, file.name); // Add the file to the form data
            }

            this.http.post<ApiResponse>(backendUrl, formData).subscribe((resp: ApiResponse) => {
                console.log(resp);
            });
        }
    }
}