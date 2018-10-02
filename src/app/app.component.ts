import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { GithubService } from './github.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ngApp';
  userName:string;
  private _customerName;
  isUserLoggedInFlag = true;
  isLoading:boolean;
  responseData1;
  @ViewChild("name") nameElementRef: ElementRef;

  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  constructor(private _githubService:GithubService, private httpClient: HttpClient){}

  ngOnInit(){
  
  }
  getData1(){
    this.isLoading=true;
    this.responseData1 = this._githubService.getUserData()
  }

  method2Call(): void {
    this.httpClient.get("https://api.github.com/users/random").subscribe(
      success => {
        console.log("Successfully Completed");
        console.log(success);
      }
    );
  }

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log("Available properties of the dom element",this.nameElementRef)

    this.childComponentRef.message="I'm message from parent component"

  }

  getName(value:string){
    return alert(value)
  }

  checkingChange(value){
    console.log("ngModelChange Event")
    if(value === 'nikhil'){
      alert("value match")
    }
  }

  get customerName(){
    return this._customerName;
  }

  set customerName(value){
    this._customerName = value;
    if(value === 'chris'){
      alert("chris")
    }
  }


  greet(emitName:string){

    //here you can handle the logic on the emitted value from child component
    alert('Hi --'+emitName)
  }

}

