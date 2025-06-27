import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

nombre: string = '';
apellido: string = '';

  enviarFormulario() {
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}`);
  }
}