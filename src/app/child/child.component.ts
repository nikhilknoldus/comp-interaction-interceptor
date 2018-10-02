import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private _githubService:GithubService) { }

  @Input() userLoggedIn:boolean;

  childName:string = "my name is child";
  message:string;

  isLoading:boolean;

  @Output() greetEvent  = new EventEmitter;
  nametoemit: string = "Child component variable nametoemit";

  childVar = "child var value";

  responseData1;
  responseData2;


  ngOnInit() {
  }

  childGreeting(){
    alert("Hey I'm child component method");
  }

callParentMethod(){
  this.greetEvent.emit(this.nametoemit);
}

childComponentFunction(){
  alert(this.childName);
}

  getData1(){

    this._githubService.getUserData().subscribe(
      data => {
        console.log("Successfully Completed");
        this.responseData1 = data;
      },
      error => {
        console.log("____________ERROR________________");
      },
      () => console.log('done loading foods')
    );
  }

  getData2(){
      this._githubService.getUserData2().subscribe(
        success => {
          console.log("Successfully Completed");
          console.log(success);
        }
      );
  }

}
