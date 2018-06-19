import { Component, OnInit, Input,Pipe, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { PixaDataService } from '../pixa-data.service';
import { IClip, IResult } from '../pixa-data.service';

@Component({
  selector: 'app-clip-list',
  templateUrl: './clip-list.component.html',
  styleUrls: ['./clip-list.component.css']
})
export class ClipListComponent implements OnInit, OnChanges {
  renderEach: boolean;
  showEach: IClip;
  public searchLocal: string;
  private letSubmit: boolean;
  private results: IResult;
  private clips: IClip[];
  @Input() searchValueString: string;
  @Input() triggerSubmit: boolean;
  @Output() Clip = new EventEmitter();
  @Output() renderItem = new EventEmitter();

  constructor(private data: PixaDataService, private sanitizer: DomSanitizer) { 
    this.renderEach = false;
    this.showEach = null;
  }

  ngOnInit() {
    this.getClip();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.searchValueString) {
      this.searchLocal = this.searchValueString; 
    }
    if (this.triggerSubmit) {
      this.searchClip(this.searchLocal);
    }
  }

  renderClipItem = (clip: IClip) => {
    this.showEach = clip;
    this.renderEach = true;
    this.Clip.emit(this.showEach);
    this.renderItem.emit(this.renderEach);
  }

  public getClip() {
      return this.data.getClip().subscribe((data: any) => {
        this.results = data;
        this.clips = data.hits;
      });
  }

  public searchClip(q: string) {
    return this.data.searchClip(q).subscribe((data: any) => {
      this.results = data;
      this.clips = data.hits;
    });
}

  trustedData = (item: IClip) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(item.videos.small.url);
  }

}
