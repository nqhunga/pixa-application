import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  queryData: string;
  triggerSubmit: boolean;
  searchForm: FormGroup;
  status: boolean;
  zero: number;
  checkboxValue: boolean;
  public currentDisplay: string;
  @Output() searchEvent =  new EventEmitter();
  @Output() changeRender = new EventEmitter();
  @Output() passSubmit = new EventEmitter();
  @HostListener("document:scroll",['$event'])
  public scrollMe(event) {
    const moveTop = window.scrollY;
    if (moveTop > this.zero) {
      this.status = true;
    } else {
      this.status = false;
    }
    this.zero = window.scrollY;
  }
  constructor(private formBuilder: FormBuilder) { 
    this.status = false;
    this.zero = 0;
    this.checkboxValue = true;
    this.triggerSubmit = false;
    this.queryData = null;
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.searchForm = this.formBuilder.group({
      query: ''
    });
  }
  onChange = (value) => {
    this.queryData = value;
  } 
  onChangeCB = () => {
    this.changeRender.emit(this.checkboxValue);
  }
  onSubmit = () => {
    this.triggerSubmit = true;
    this.passSubmit.emit(this.triggerSubmit);
    this.searchEvent.emit(this.queryData);
    this.queryData = '';
  }
}
