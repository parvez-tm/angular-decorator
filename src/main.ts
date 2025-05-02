import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { LogMethod } from './decorator/method.decorator';


function first():any {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target,"first(): called");
  };
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';

  // @first()
  @LogMethod
  diy(){
    
  }
}

bootstrapApplication(App);
