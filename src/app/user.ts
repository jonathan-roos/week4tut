export class User {
   
    username:string;
    email:string;
    pwd:string;
    valid:boolean;
    age: number;
    birthdate:string;
    constructor(username:string='',email:string='',pwd:string='',valid=false,birthdate:string="", age = 0){
       
        this.username = username;
        this.email = email;
        this.pwd=pwd;
        this.valid = valid;
        this.birthdate = birthdate;
        this.age = age;
    }
}
