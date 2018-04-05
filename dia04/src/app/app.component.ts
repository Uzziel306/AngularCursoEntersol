import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PoblacionMexicoService } from './services/poblacion-mexico.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  public pieChartLabels:string[] = ['Mujeres', 'Hombres'];
  public pieChartData:number[] = [0, 0];
  public pieChartType:string = 'pie';
  public lineChartLabels:Array<any> = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
  constructor(private poblacionService:PoblacionMexicoService){
    let pieChartData:number[] = [0, 0];
    this.lineChartLabels.forEach((año, index) => {
      this.poblacionService.getPoblaciondeMexicoPorAño(año).subscribe(res =>{
        pieChartData[0] += res[0]['females'];
        pieChartData[1] += res[0]['males'];
        this.pieChartData = pieChartData;
        console.log(this.pieChartData);
      });
      // this.lineChartData = lineChartDat
    })
  }

  
 

}
