export class Algebra {
    course: string;
    semester: string;
    compulsory: string;
    instructor: string;
    cpw: number;
    ects: number;
    
    constructor(obj?: any) {
        this.course = obj && obj.course || null;
        this.semester = obj && obj.semester || null;
        this.compulsory = obj && obj.compulsory || null;
        this.instructor = obj && obj.instructor || null;
        this.cpw = obj && obj.cpw || null;
        this.ects = obj && obj.ects || null;
    }
}