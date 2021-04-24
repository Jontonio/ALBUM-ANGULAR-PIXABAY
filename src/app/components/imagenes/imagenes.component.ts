import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/providers/pixabay.service';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  constructor( 
    public pixaService:PixabayService,
    public dataService:DataService) { }

  ngOnInit(): void { }

  moreImage(){
    this.pixaService.moreImages();
  }


  
}
