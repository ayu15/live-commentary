import {Component, OnInit} from '@angular/core';
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
		let mydata = snapshot.val();
		this.msgs.push(snapshot.val().msg);
		this.timings.push(snapshot.val().time);
	}

}
