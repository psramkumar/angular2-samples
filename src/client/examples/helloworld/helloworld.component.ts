import {Component} from "angular2/core";
@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: "hello-world",
  // Location of the template for this component
  templateUrl: "client/examples/helloworld/helloworld.html"
})
export class HelloWorldComponent {
  // Declaring the variable for binding with initial value
  yourName: string = "";
}