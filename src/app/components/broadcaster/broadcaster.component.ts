import { Component, OnInit } from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";

var firebase = require('firebase/app');

require('firebase/database');

var date = new Date();

@Component({
  selector: 'app-broadcaster',
  templateUrl: './broadcaster.component.html',
  styleUrls: ['./broadcaster.component.css']
})
export class BroadcasterComponent implements OnInit {private database = firebase.database();
	private userAyu = firebase.database().ref('users/ayu');
	@ViewChild('userInput') userInput:any;

	constructor() {
	}

	ngOnInit() {
	}

	private inputListener(keyCode){
		let userMessage : string = this.userInput.nativeElement.value;
		if (keyCode == 13 && userMessage.length >= 2){
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();
			let displayTime = hours + ":" + minutes + ":" + seconds;
			let msgObj = {
				msg: userMessage,
				time: displayTime
			};
			this.addMessageToStream(msgObj);
			this.userInput.nativeElement.value = "";
		}
	}

	private addMessageToStream(msg: any) {
		this.userAyu.push(msg)
			.then(function () {
				console.log('Synchronization succeeded');
			})
			.catch(function (error) {
				console.log('Synchronization failed');
			});
	}

}


