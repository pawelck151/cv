import { IPerson } from './iperson';

export class Person implements IPerson{

  firstName;
  lastName;
  address;
  email;
  phone;
  birthDate;

  constructor(firstName:string, lastName:string, address:string, email:string, phone:string, birthDate:string ){
    firstName = this.firstName;
    lastName = this.lastName;
    address = this.address;
    email = this.email;
    phone = this.phone;
    birthDate = this.birthDate
  }
}
