import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IPost } from '../model/ipost';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {

  // on a modifier dans tslint.json pour qu'il accepte declaration de la variable url avec son type string : chercher infer dans tslint.json
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    // return this._http.get(this.url).map( (resp: Response) => resp.json()); // will
    return this._http.get<IPost[]>(this.url); // No need of json conversion
  }
}
