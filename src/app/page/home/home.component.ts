import { Component } from '@angular/core';
import { ListalibrosComponent } from "../../componentes/listalibros/listalibros.component";
import { LibrosService } from '../../servicios/libros.service';
import { ContactoComponent } from '../../componentes/contacto/contacto.component';

@Component({
  selector: 'app-home',
  imports: [ListalibrosComponent, ContactoComponent], 
  providers: [LibrosService],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
