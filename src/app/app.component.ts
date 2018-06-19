import { Component, OnInit } from '@angular/core';
import { Iimage, IClip } from './pixa-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public triggerSubmit: boolean;
  public render: boolean;
  public loading: boolean;
  public querySearch: string;
  public imageShowed: Iimage;
  public clipShowed: IClip;
  public isRenderEach: boolean;
  public renderState(checkBox: boolean): void {
    this.render = checkBox;
  }
  public renderMain() {
    this.render = true;
    this.isRenderEach = false;
    this.imageShowed = null;
    this.clipShowed = null;

  }
  constructor() {
    this.render = true;
    this.loading = true;
    console.log(this.render);
  }

  ngOnInit() {
    this.loadingScreen();
  }

  loadingScreen = () => {
    setTimeout(() => this.loading = false, 2000);
  }
  
}
