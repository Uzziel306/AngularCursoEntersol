import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ServicioService } from './servicios/servicio.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  posts : Post[] = [];
  constructor(private http: HttpClient, private service:ServicioService){
    this.service.PeticionGet().subscribe((res) =>{
      this.posts = res;
    })
    
  }


}
