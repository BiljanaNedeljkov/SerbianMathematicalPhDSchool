import { HttpClient } from '@angular/common/http';
import { Algebra } from './../model/algebra.model';
import { Injectable } from '@angular/core';


const ALGEBRA = [
  {"course": "Mathematical logic", "semester": "First", "compulsory": "Compulsory", "instructor": "Silvia Ghilezan, Zoran Petrić", "cpw": 4, "ects": 15},
  {"course": "General algebra", "semester": "Second", "compulsory": "Compulsory", "instructor": "Miroslav Ćirić , Andreja Tepavčević", "cpw": 4, "ects": 15},
  {"course": "Study work 1", "semester": "First", "compulsory": "Compulsory", "instructor": "Anyone from the List of Algebra and mathematical logic instructors", "cpw": 12, "ects": 5},
  {"course": "Study work 2", "semester": "Second", "compulsory": "Compulsory", "instructor": "Anyone from the List of Algebra and mathematical logic instructors", "cpw": 12, "ects": 5},
  {"course": "Optional course 1 or Optional course 2", "semester": "First or Second", "compulsory": "Universal algebra", "instructor": "Petar Marković", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2", "semester": "First or Second", "compulsory": "Non-classical logics	", "instructor": "Zoran Ognjanović", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2", "semester": "First or Second", "compulsory": "Semigroup theory", "instructor": "Siniša Crvnković", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2", "semester": "First or Second", "compulsory": "Model theory", "instructor": "Predrag Tanović", "cpw": 4, "ects": 10},
  {"course": "Optional course 1 or Optional course 2", "semester": "First or Second", "compulsory": "Set theory", "instructor": "Stevo Todorčević", "cpw": 4, "ects": 10},
  ];
@Injectable({
  providedIn: 'root'
})
export class AlgebraService {

  private algebraList :Algebra[] = [];
	private lastId = this.algebraList.length;

  constructor(private http: HttpClient) { 
    for(let memberObj of ALGEBRA){
      this.algebraList.push(new Algebra(memberObj));
  }
}
    getAll() :Algebra[]{
      return this.algebraList;
    }
   
}
