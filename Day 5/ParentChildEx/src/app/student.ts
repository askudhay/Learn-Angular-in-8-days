export class Student {
    studId: number;
    studName: String;
    studDestinction: Boolean;
    studGrade: String;

    constructor(sId, sName, sDistnct, sGrade) {
        this.studId = sId;
        this.studName = sName;
        this.studDestinction = sDistnct;
        this.studGrade = sGrade;
    }
}
