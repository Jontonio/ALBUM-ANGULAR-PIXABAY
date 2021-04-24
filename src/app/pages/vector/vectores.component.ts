import { Component, OnInit } from '@angular/core';
import { PixabayService } from '../../providers/pixabay.service';

@Component({
  selector: 'app-vectores',
  templateUrl: './vectores.component.html',
  styleUrls: ['./vectores.component.css']
})
export class VectoresComponent implements OnInit {

  constructor( private pixaservice:PixabayService) {
    this.pixaservice.parametros.setImageType('vector');
    this.pixaservice.getImages();
  }

  ngOnInit(): void {
  }

}
