import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Url = 'https://api.datos.gob.mx/v1/precio.gasolina.publico';
  posts : Observable<Post[]> = null;
  constructor(private http: HttpClient){
    this.posts = this.http.get<Post[]>(this.Url).map(res => res['results']);
    
  }


}
