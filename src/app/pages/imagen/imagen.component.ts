import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/providers/pixabay.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  constructor( private pixaservice:PixabayService) {
    this.pixaservice.parametros.setImageType('imagen');
    this.pixaservice.getImages();
  }

  ngOnInit(): void {
  }

}
