import { Component } from '@angular/core';
import { ListalibrosComponent } from "../../componentes/listalibros/listalibros.component";
import { LibrosService } from '../../servicios/libros.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from '../../componentes/contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [ListalibrosComponent, HttpClientModule, ContactoComponent], 
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
