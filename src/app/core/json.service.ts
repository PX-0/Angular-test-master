import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MockId } from 'src/models/mockID';
import { MockType } from 'src/models/mockType';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http:HttpClient) { }

  getId(){
    return this.http.get<MockId>('../../assets/mock-id.json');
  }

  getType(){
    return this.http.get<MockType>('../../assets/mock-type.json');
  }

  getJson(id:number,type:string){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/${type}`)
  }

}
