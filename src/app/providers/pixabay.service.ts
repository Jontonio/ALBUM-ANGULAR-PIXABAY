import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen.models';
import { Data } from '../models/data.models';
import { Params } from '../models/params.models';
import { Video } from '../models/video.models';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  URL        :string = `https://pixabay.com/api/`;
  key        :string = '18495173-29b6f4b8f08b75bad50a8f930'
  imagenes   :Imagen[]=[];
  imagenesAux:Imagen[]=[];
  video      :Video []=[];

  data       :Data;
  cargando   : boolean = false;
  parametros :Params;

  constructor( private http:HttpClient, private snackbar:DataService ) {
    // inicializar la clase parametros (busqueda,key,tipo_imagen,número_de_imagenes,paginas)
    this.parametros = new Params('',this.key,'imagen','24','1');
  }

  getImages(){

    this.cargando = true;
    this.imagenes = [];

    this.http.get<Data>( this.URL,{ params: this.parametros.params } ).subscribe(
      (res)=>{
        this.imagenes = [];
        this.imagenes = res.hits;
        this.cargando = false;
        if(this.imagenes.length==0){
          this.snackbar.message('Lo sentimos, no pudimos encontrar ninguna coincidencia')
        }
      },(err)=>{
        this.cargando = false;
        this.snackbar.message(`ERROR: ${err.name}`);
        console.log(err)
      })
  }

  moreImages(){

    this.cargando = true;
    this.parametros.page_plus();

    this.http.get<Data>( this.URL,{ params: this.parametros.params }).subscribe({
      next: (res) =>{
        this.imagenesAux = res.hits;
        this.imagenes.push(...this.imagenesAux)
        setTimeout(() => this.cargando = false, 500);
        if(this.imagenes.length==0){
          this.snackbar.message('Lo sentimos, no pudimos encontrar ninguna coincidencia')
        }
      },
      error:(err)=>{
        this.cargando = false;
        this.snackbar.message(`ERROR: ${err.name}`);
        console.log(err)
      }
    })
  }

}
