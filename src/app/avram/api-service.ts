import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { ApiData } from "./api-data";

@Injectable()
export class ApiService {

    private _url: string = "https://jsonplaceholder.typicode.com/posts"

    constructor(private http: HttpClient){   
    }
    
    getData(): Observable<ApiData[]>{
        return this.http.get<ApiData[]>(this._url);
    }
}
