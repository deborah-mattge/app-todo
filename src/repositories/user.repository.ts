import { Injectable } from "@angular/core";
import { users } from "src/data/users";

@Injectable()
export class userRepository{
    constructor(){

    }
    getUsers(){
        return users;
    }

}