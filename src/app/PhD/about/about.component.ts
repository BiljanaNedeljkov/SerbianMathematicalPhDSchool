import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'phd-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
//   template: `
//   <a [href]="mailText">Mail me the links</a> <br>
// `
})
export class AboutComponent implements OnInit {
  // name = 'test';
  // links : any[]= ["link1.com", "link2.com", "link3.com"];

  // mailText:string = "";

  constructor() { }

  ngOnInit() {
  }
  
  // mailMe(){
  //   this.mailText = "mailto:biljanapezos@yahoo.com+?subject=files&body="+this.links.join(" ,"); // add the links to body
  //   window.location.href = this.mailText;
  // }
}
