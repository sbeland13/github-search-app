import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private userName:string;

    constructor(private _http:Http) {
        
    }
    // Get user profile info
    getUser() {
        return this._http.get('https://api.github.com/users/' + this.userName)
        .map(res => res.json());
    }
    // Get user repos
    getRepos(){
     return this._http.get('https://api.github.com/users/' + this.userName + '/repos')
        .map(res => res.json());
    }

    //Update User
    updateUser(username) {
        this.userName = username;
    }   
    }
}