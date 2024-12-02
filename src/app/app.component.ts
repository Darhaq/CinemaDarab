import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudComponent } from "./components/crud/crud.component";

//Decorater to define the component
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CinemaDarab';
  //variables
  //int x = 10; //C#
  navn : number = 10; //TypeScript
  tal = 12; //TypeScript ?? NEJ det er JavaScript
  navn2 : string = "DDD"
  navne : string[] = ["Palle", "Lone", "Lars"];
  arr2 : string[]=[]; //This is very important!!
  sandt : boolean=false;

  //functions - methods
  // Invoke / call - i HTML eller i en anden metode
  helloWorld():void{} //signature / prototype
  helloWorld2():void{
    console.log("blablabla");
}

ngOnInit():void{
  //console.log( this.helloWorld2);
  this.helloWorld2();
}
}