import {Component} from '@angular/core';
import { JsonService } from './core/json.service';
import { Observable,forkJoin, lastValueFrom, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vodafone-test';
  obv3$:Observable<any>;

  constructor(private jsonService:JsonService){

    this.obv3$ = forkJoin({id:this.jsonService.getId(),type:this.jsonService.getType()})
    .pipe(switchMap((res=>this.jsonService.getJson(res.id['value'],res.type['value']))))
  }
}
