import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { IMessageState } from '../store/message.interface';
import { Observable } from 'rxjs';
import { Add } from '../store/message.action';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageForm: FormGroup;
  lastMessage: string;
  messageList: string[];

  lastMessage$: Observable<string>;
  messageList$: Observable<string[]>;

  constructor(private store: Store<IMessageState>) {
    this.lastMessage$ = store.pipe(select(s => s.lastMessage));
    this.messageList$ = store.pipe(select(s => s.messageList));
   }

  ngOnInit() {
    this.messageForm = new FormGroup({
      message: new FormControl()
    });
  }

  postMessage() {
    this.store.dispatch(new Add(this.messageForm.value.message));
  }
}
