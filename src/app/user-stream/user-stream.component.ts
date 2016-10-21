import { Component, OnInit } from '@angular/core';
var firebase = require('firebase/app');

@Component({
  selector: 'app-user-stream',
  templateUrl: './user-stream.component.html',
  styleUrls: ['./user-stream.component.css']
})
export class UserStreamComponent implements OnInit {
	private  userAyu = firebase.database().ref('users/ayu');

  constructor() { }

  ngOnInit() {
  }

  public readStream(){
	  this.userAyu.on('child_added', function(data) {
	  	console.log("data", data);
		  //addCommentElement(postElement, data.key, data.val().text, data.val().author);
	  });

  }

}
