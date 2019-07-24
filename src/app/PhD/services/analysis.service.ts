

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analysis } from '../model/analysis.model';


const ANALYSIS = [
  {"course": "Measure and integration", "semester": "First", "compulsory": "Compulsory", "instructor": "Stevan Pilipović", "cpw": 4, "ects": 10},
  {"course": "Functional analysis", "semester": "First", "compulsory": "Compulsory", "instructor": "Dragan Đorđević", "cpw": 4, "ects": 10},
  {"course": "Study work 1", "semester": "First", "compulsory": "Compulsory", "instructor": "Anyone from the List of Analysis instructors	", "cpw": 4, "ects": 10},
  {"course": "Partial differential equations", "semester": "Second", "compulsory": "Compulsory", "instructor": "Marko Nedeljkov", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 (student has to take and pass one of these five optional courses)", "semester": "Second", "compulsory": "Complex analysis", "instructor": "Miodrag Mateljević", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 (student has to take and pass one of these five optional courses)", "semester": "Second", "compulsory": "Approximation theory", "instructor": "Gradimir Milovanović", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 (student has to take and pass one of these five optional courses)", "semester": "Second", "compulsory": "Differential geometry", "instructor": "Mića Stanković", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 (student has to take and pass one of these five optional courses)", "semester": "Second", "compulsory": "Stochastic analysis", "instructor": "Danijela Rajter Ćirić", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 (student has to take and pass one of these five optional courses)", "semester": "Second", "compulsory": "Dynamical systems", "instructor": "Jelena Manojlović", "cpw": 4, "ects": 10},
  {"course": "Study work 2", "semester": "Second", "compulsory": "Compulsory", "instructor": "	Anyone from the List of Analysis instructors", "cpw": 4, "ects": 10}, 
];

@Injectable({
  providedIn: 'root'
})
export class AnalysisService {

  private analysisList :Analysis[] = [];
	private lastId = this.analysisList.length;

  constructor(private http: HttpClient) { 
    for(let memberObj of ANALYSIS){
      this.analysisList.push(new Analysis(memberObj));
  }
}
    getAll() :Analysis[]{
      return this.analysisList;
    }
   

}
