import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/providers/pixabay.service';

@Component({
  selector: 'app-more-images',
  templateUrl: './more-images.component.html',
  styleUrls: ['./more-images.component.css']
})
export class MoreImagesComponent implements OnInit {

  constructor( public pixaService:PixabayService ) { }

  ngOnInit(): void { }

  cargarMore(){ this.pixaService.moreImages(); }

}
