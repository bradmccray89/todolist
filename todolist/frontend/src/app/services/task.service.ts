import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tasks';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    constructor(private http: HttpClient) { }

    create(data) {
        return this.http.post(baseUrl, data);
    }

    getAll() {
        return this.http.get(baseUrl);
    }
}
