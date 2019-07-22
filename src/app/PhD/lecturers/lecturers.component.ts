import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phd-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.scss']
})
export class LecturersComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  show() {
    var x = document.getElementById("analysisText");
    var y = document.getElementById("algebraText");
    if (x.style.display === "block") {
      y.style.display = "none";
    } else {
      x.style.display = "block";
      y.style.display = "none";

    }
  }
  show2() {
    var x = document.getElementById("analysisText");
    var y = document.getElementById("algebraText");
    if (y.style.display === "none") {

      y.style.display = "block";
      x.style.display = "none";
    } else {
      y.style.display = "block";
      x.style.display = "none";
    }
  }


}
