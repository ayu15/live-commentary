import { Component } from '@angular/core';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
// Initialize Firebase
var config = {
	apiKey: "AIzaSyDBXxnZA-NFW0SEEDJkGxqOpRxbghYY52U",
	authDomain: "live-commentary-6b8ac.firebaseapp.com",
	databaseURL: "https://live-commentary-6b8ac.firebaseio.com",
	storageBucket: "live-commentary-6b8ac.appspot.com",
	messagingSenderId: "991137572007"
};
var app = firebase.initializeApp(config);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
}
