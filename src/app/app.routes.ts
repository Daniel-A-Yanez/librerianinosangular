import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ListalibrosComponent } from './componentes/listalibros/listalibros.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'libros', component: ListalibrosComponent }
];