import { Component } from '@angular/core';
import { PixabayService } from 'src/app/providers/pixabay.service';

@Component({
  selector: 'app-more-images',
  templateUrl: './more-images.component.html',
  styleUrls: ['./more-images.component.css']
})
export class MoreImagesComponent {

  constructor( public pixaService:PixabayService ) { }

  cargarMore(){ this.pixaService.moreImages(); }

}
