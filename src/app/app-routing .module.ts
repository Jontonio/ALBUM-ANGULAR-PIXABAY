import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagenComponent } from './pages/imagen/imagen.component';
import { VectoresComponent } from './pages/vector/vectores.component';
import { VideoComponent } from './pages/video/video.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';

const routes: Routes = [
  { path:"", component:ImagenComponent },
  { path:"imagen", component:ImagenComponent },
  { path:"vector", component:VectoresComponent },
  { path:"video", component:VideoComponent },
  { path:"**", pathMatch:'full', redirectTo:'' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
