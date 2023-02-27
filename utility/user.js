import { faker } from '@faker-js/faker';

export class User {
    constructor() {
        this._firstName = faker.name.firstName();
        this._lastName = faker.name.lastName();
        this._userName = faker.internet.userName();
        this._password = faker.internet.password();
    }

    get getFirstName() {
        return this._firstName;
    }

    set setFirstName(value) {
        this._firstName = value;
    }

    get getLastName() {
        return this._lastName;
    }

    set setLastName(value) {
        this._lastName = value;
    }

    get getUserName() {
        return this._userName;
    }

    set setUserName(value) {
        this._userName = value;
    }

    get getPassword() {
        return this._password;
    }

    set setPassword(value) {
        this._password = value;
    }
}