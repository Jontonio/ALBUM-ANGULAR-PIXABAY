import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing .module';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { HttpClientModule } from '@angular/common/http';
import { VectoresComponent } from './pages/vector/vectores.component';
import { ImagenComponent } from './pages/imagen/imagen.component';
// Import NgMasonryGridModule
import { NgxMasonryModule } from 'ngx-masonry';
import { SlideComponent } from './components/slide/slide.component';
import { MoreImagesComponent } from './components/more-images/more-images.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { ViewImageComponent } from './components/view-image/view-image.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    ImagenesComponent,
    VectoresComponent,
    ImagenComponent,
    SlideComponent,
    MoreImagesComponent,
    ViewDataComponent,
    ViewImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
