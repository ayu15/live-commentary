import {Component, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";
var firebase = require('firebase/app');

@Component({
	selector: 'app-user-stream',
	templateUrl: './user-stream.component.html',
	styleUrls: ['./user-stream.component.css']
})
export class UserStreamComponent implements OnInit {
	private userAyu = firebase.database().ref('users/ayu');
	private timings = [];
	private msgs = [];

	constructor() {
		this.userAyu.on('child_added', this.readStream);
	}

	ngOnInit() {
	}

	public readStream = (snapshot) => {
		//console.log("data", snapshot.val());
		let mydata = snapshot.val();
		//console.log("data", mydata);
		//let msgs = snapshot.val().msg;
		//let timings = snapshot.val().time;

		this.msgs.push(snapshot.val().msg);
		this.timings.push(snapshot.val().time);

		//addCommentElement(postElement, data.key, data.val().text, data.val().author);
	}

}
