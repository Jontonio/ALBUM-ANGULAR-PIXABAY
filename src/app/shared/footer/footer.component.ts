import { Component } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio = new Date().getFullYear();

  constructor( public dataService: DataService) { }

}
