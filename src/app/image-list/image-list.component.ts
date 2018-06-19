import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PixaDataService } from '../pixa-data.service';

import { Iimage, IResult } from '../pixa-data.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit, OnChanges {
  renderEach: boolean;
  showEach: Iimage;
  public searchLocal: string;
  private letSubmit: boolean;
  private results: IResult;
  private images: Iimage[];
  @Input() searchValueString: string;
  @Input() triggerSubmit: boolean;
  @Output() imageID = new EventEmitter();
  @Output() renderItem = new EventEmitter();

  constructor(private data: PixaDataService) { 
    this.renderEach = false;
    this.showEach = null;
  }

  ngOnInit() {
    this.getImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.searchValueString) {
      this.searchLocal = this.searchValueString; 
    }
    if (this.triggerSubmit) {
      this.searchImage(this.searchLocal);
      this.searchLocal = null;
    }
  }

  renderImageItem = (image: Iimage) => {
    this.showEach = image;
    this.renderEach = true;
    this.imageID.emit(this.showEach);
    this.renderItem.emit(this.renderEach);
  }

  public getImage() {
      return this.data.getImage().subscribe((data: any) => {
        this.results = data;
        this.images = data.hits;
      });
  }

  public searchImage(q: string) {
    return this.data.searchImage(q).subscribe((data: any) => {
      this.results = data;
      this.images = data.hits;
      console.log(data);
    });
}
}
