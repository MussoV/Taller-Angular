import { Component } from '@angular/core';
import serie from "src/assets/json/datos.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json-angular';

  series: any = serie;
  promedio: number = mostrarPromedio(serie);
}

function mostrarPromedio(series:any):number{
  let index: number = 0;
  let sum: number = 0;
  for(let serie of series)
  {
      sum += serie.seasons;
      index++;
  }
  let prom: number = sum/index;
  return(prom);

}
