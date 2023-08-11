import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Imagen } from '../models/imagen.models';
import { Video } from '../models/video.models';
import { ViewImageComponent } from '../components/view-image/view-image.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  viewButton: boolean = true;

  constructor( public dialog: MatDialog, private snackBar: MatSnackBar ) {
    this.scrollInitial();
  }

  openViewImage(dataImage:Imagen) {
    this.dialog.open( ViewImageComponent , { data: dataImage, panelClass: 'custom-dialog-container' });
  }

  message(mens:string){
    this.snackBar.open(mens,'', {
      duration:4000
    });
  }

  scrollInitial(){
    window.scrollTo(0,0);
  }


}
