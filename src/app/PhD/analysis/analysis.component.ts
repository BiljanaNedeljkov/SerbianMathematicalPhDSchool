import { AnalysisService } from './../services/analysis.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';


interface Analysis {
  course: string;
  semester: string;
  compulsory: string;
  instructor: string;
  cpw: number;
  ects: number;
};

const Analysis: Analysis[] = [
  { "course": "Measure and integration", "semester": "First", "compulsory": "Compulsory", "instructor": "Stevan Pilipović", "cpw": 4, "ects": 10 },
  { "course": "Functional analysis", "semester": "First", "compulsory": "Compulsory", "instructor": "Dragan Đorđević", "cpw": 4, "ects": 15 },
  { "course": "Study work 1", "semester": "First", "compulsory": "Compulsory", "instructor": "Anyone from the List of Analysis instructors	", "cpw": 12, "ects": 5},
  { "course": "Partial differential equations", "semester": "Second", "compulsory": "Compulsory", "instructor": "Marko Nedeljkov", "cpw": 4, "ects": 15 },
  { "course": "Optional course 1*", "semester": "Second", "compulsory": "Complex analysis", "instructor": "Miodrag Mateljević", "cpw": 4, "ects": 10 },
  { "course": "Optional course 1*", "semester": "Second", "compulsory": "Approximation theory", "instructor": "Gradimir Milovanović", "cpw": 4, "ects": 10 },
  { "course": "Optional course 1*", "semester": "Second", "compulsory": "Differential geometry", "instructor": "Mića Stanković", "cpw": 4, "ects": 10 },
  { "course": "Optional course 1*", "semester": "Second", "compulsory": "Stochastic analysis", "instructor": "Danijela Rajter Ćirić", "cpw": 4, "ects": 10 },
  { "course": "Optional course 1*", "semester": "Second", "compulsory": "Dynamical systems", "instructor": "Jelena Manojlović", "cpw": 4, "ects": 10 },
  { "course": "Study work 2", "semester": "Second", "compulsory": "Compulsory", "instructor": "	Anyone from the List of Analysis instructors", "cpw": 12, "ects": 5 },
];

function search(text: string): Analysis[] {
  return Analysis.filter(member => {
    const term = text.toLowerCase();
    return member.course.toLowerCase().includes(term)
      || member.semester.toLowerCase().includes(term)
      || member.compulsory.toLowerCase().includes(term)
      || member.instructor.toLowerCase().includes(term)
      ;
  });
}

@Component({
  selector: 'phd-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  members$: Observable<Analysis[]>;
  private memberList: Analysis[] = [];

  filter = new FormControl('');


  constructor(private AnalysisService: AnalysisService) {
    this.members$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text))
    );
  }
  ngOnInit() {
    this.memberList = this.AnalysisService.getAll();
  }



}
