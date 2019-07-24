
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { AlgebraService } from './../services/algebra.service';
import { FormControl } from '@angular/forms';




interface Algebra {
  course: string;
  semester: string;
  compulsory: string;
  instructor: string;
  cpw: number;
  ects: number;
};

const Algebra: Algebra[] = [
  {"course": "Mathematical logic", "semester": "First", "compulsory": "Compulsory", "instructor": "Silvia Ghilezan, Yoran Petrić", "cpw": 4, "ects": 15},
  {"course": "General algebra", "semester": "Second", "compulsory": "Compulsory", "instructor": "Miroslav Ćirić , Andreja Tepavčević", "cpw": 4, "ects": 15},
  {"course": "Study work 1", "semester": "First", "compulsory": "Compulsory", "instructor": "Anyone from the List of Algebra and mathematical logic instructors", "cpw": 12, "ects": 5},
  {"course": "Study work 2", "semester": "Second", "compulsory": "Compulsory", "instructor": "Anyone from the List of Algebra and mathematical logic instructors", "cpw": 12, "ects": 5},
  {"course": "Optional course 1 or Optional course 2*", "semester": "First or Second", "compulsory": "Universal algebra", "instructor": "Petar Marković", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2*", "semester": "First or Second", "compulsory": "Non-classical logics	", "instructor": "Zoran Ognjanović", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2*", "semester": "First or Second", "compulsory": "Semigroup theory", "instructor": "Siniša Crvnković", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2*", "semester": "First or Second", "compulsory": "Model theory", "instructor": "Predrag Tanović", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2*", "semester": "First or Second", "compulsory": "Set theory", "instructor": "Stevo Todorčević", "cpw": 4, "ects": 10},
  ];

function search(text: string): Algebra[] {
  return Algebra.filter(member => {
    const term = text.toLowerCase();
    return member.course.toLowerCase().includes(term)
      || member.semester.toLowerCase().includes(term)
      || member.compulsory.toLowerCase().includes(term)
      || member.instructor.toLowerCase().includes(term)
      ;
  });
}
@Component({
  selector: 'phd-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./algebra.component.scss']
})
export class AlgebraComponent implements OnInit {

  members$: Observable<Algebra[]>;
  private memberList: Algebra[] = [];

  filter = new FormControl('');


  constructor(private AlgebraService: AlgebraService) {
    this.members$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }
  ngOnInit() {
    this.memberList = this.AlgebraService.getAll();
  }

}
