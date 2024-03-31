import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class RequestsService {
    constructor(private http: HttpClient) { }

    // Users
    getUsers(page: number) { return this.http.get(`${environment.apiUrl}users?page=${page}`); } 
    getUser(id: number) { return this.http.get(`${environment.apiUrl}users/${id}`) }
}