import { Component, Inject, OnInit } from '@angular/core';
import { Video } from '../../models/video.models';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.css']
})
export class ViewVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataVideo: Video) { }

  ngOnInit(): void {
  }

}
