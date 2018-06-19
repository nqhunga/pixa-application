import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iimage } from '../pixa-data.service';

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})
export class ImageItemComponent implements OnInit {
  @Input() thisImage: Iimage;
  @Output() changeState = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeMain = () => {
    this.changeState.emit();
  }

}
