import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageForm: FormGroup;
  lastMessage: string;
  messageList: string[];

  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      message: new FormControl()
    });
    this.messageList = new Array<string>();
  }

  postMessage() {
    this.lastMessage = this.messageForm.value.message;
    this.messageList.push(this.lastMessage);
  }
}
