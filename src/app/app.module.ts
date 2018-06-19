import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ImageListComponent } from './image-list/image-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';
import { ClipListComponent } from './clip-list/clip-list.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ClipItemComponent } from './clip-item/clip-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ImageListComponent,
    SearchFormComponent,
    ClipListComponent,
    ImageItemComponent,
    ClipItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
