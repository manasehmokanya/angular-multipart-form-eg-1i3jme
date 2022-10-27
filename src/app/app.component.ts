import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  image: File;
  resData: any;
  selectedFile = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onSubmit() {
    const payload = new FormData();
    payload.append('name', this.name);
    payload.append('image', this.selectedFile, this.selectedFile.name);

    this.http
      .post(`https://srinu.org/Api.php?apicall=upload_sub_cat`,
        payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).subscribe((data: any) => {
        this.resData = data;
        console.log(this.resData);
      });
  }
}
