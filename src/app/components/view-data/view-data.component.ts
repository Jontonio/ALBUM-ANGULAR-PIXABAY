import { Component, Inject,  } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Imagen } from '../../models/imagen.models';
import { Video } from '../../models/video.models';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.css']
})
export class ViewDataComponent  {
  vista: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public dataImage: Imagen,
    @Inject(MAT_DIALOG_DATA) public dataVideo: Video) {

      if(this.dataImage){
        this.vista = 'imagen';
      } 

      if(this.dataVideo){
        this.vista = 'video'
      }

    }

}
