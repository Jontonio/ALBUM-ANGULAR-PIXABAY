import { Component, OnInit } from '@angular/core';
import { PixabayService } from 'src/app/providers/pixabay.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  option:string = 'Imágenes';

  constructor( public pixaService:PixabayService ) { }

  ngOnInit(): void { }

  buscar(data:string){

    if(data.length<1){
      return;
    }
    this.pixaService.parametros.setQ(data)
    this.pixaService.getImages();
    
  }

  optionSearch(data:string){
    this.option = data;
  }

}
