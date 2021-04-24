import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/data.service';
import { PixabayService } from '../../providers/pixabay.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor( public pixaService:PixabayService, public dataService:DataService) { 
    this.pixaService.getVideos();
  }

  ngOnInit(): void {
  }

}
