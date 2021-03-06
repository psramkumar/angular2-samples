import {Injectable} from "@angular/core";
import {Inject} from "@angular/core";
import {Task} from "./task";
import {Http, HTTP_PROVIDERS, Headers} from "@angular/http";

@Injectable()
export class TaskService {
    tasks: string[] = [];

    http: Http;
    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    getTasks(): any {
        return this.http.get("/tasks/list");

    }

    addTask(task: any): any {
        console.log("post task :::", task);
        // return this.http.post("/tasks/save", task);


        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("/tasks/save", JSON.stringify(task), { headers: headers });
        // .map(res => res.json())
        // .subscribe((res:Person) => this.postResponse = res);
        // }

    }
}