import {Component, OnInit} from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";
// import * as firebase from 'firebase';
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
// require("firebase/auth");
// require("firebase/database");

@Component({
    selector: 'app-user-dashboard',
    templateUrl: './user-dashboard.component.html',
    styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
    private database = firebase.database();
    private userAyu = firebase.database().ref('users/ayu');
    @ViewChild('userInput') userInput:any;

    constructor() {
    }

    ngOnInit() {
    }

    private inputListener(keyCode){
        console.log(keyCode);
        console.log(this.userInput.nativeElement.value);
	    let userMessage : string = this.userInput.nativeElement.value;
	    if (keyCode == 13){
		    this.addMessageToStream(userMessage);
	    }
    }

    private addMessageToStream(msg: string) {
        this.userAyu.set(msg)
            .then(function () {
                console.log('Synchronization succeeded');
            })
            .catch(function (error) {
                console.log('Synchronization failed');
            });
    }
}
