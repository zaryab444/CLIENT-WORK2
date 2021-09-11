import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatForm: FormGroup;

  Sends:any = [];

  userSubmitted: boolean;

  constructor( private fb:FormBuilder, private chatservice:ChatService , private alertifyService :AlertifyService,  private router: Router,private ngZone: NgZone,) { }

  ngOnInit(): void {
    this.sendChat();
    this.chatservice.GetChats().subscribe(res => {
      console.log(res)
      this. Sends=res;
    });
  }


  sendChat(){
    this.chatForm =  this.fb.group(
      {
        sender: new FormControl("")
      });
  }


  get sender(){
    return this.chatForm.get('sender') as FormControl;
  }


  onSubmit(): any {
    this.chatservice.AddWeekly(this.chatForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/chat'))
        this.chatForm.reset();
        this.userSubmitted = false;
        // this.alertifyService.success('Successfully Submit');
      }, (err) => {
        console.log(err);
    });
  }


}
