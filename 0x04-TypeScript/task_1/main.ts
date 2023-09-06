interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any,
}

interface Directors  extends Teacher{
    numberOfReports: number,
}

function printTeacher(firstname: string, lastname: string) : string {
 return `${firstname[0]}. ${lastname}`;
}

interface IStudentclass {
 workOnHomework(): string;
 displayName(): string; 
}

class StudentClass implements IStudentclass {
    firstname: string;
    lastname: string;
    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstname;
    }
}
