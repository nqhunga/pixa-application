import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IClip } from '../pixa-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-clip-item',
  templateUrl: './clip-item.component.html',
  styleUrls: ['./clip-item.component.css']
})
export class ClipItemComponent implements OnInit {
  @Input() thisClip: IClip;
  @Output() changeState = new EventEmitter();
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  changeMain = () => {
    this.changeState.emit();
  }

  trustedData = (item: IClip) => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(item.videos.medium.url);
  }

}
