import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Imagen } from 'src/app/models/imagen.models';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public dataImage: Imagen) { }


}
