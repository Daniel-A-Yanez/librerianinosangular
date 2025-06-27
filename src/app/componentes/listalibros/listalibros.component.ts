import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibrosService } from '../../servicios/libros.service';
import { FiltroLibrosPipe } from '../../pipes/filtrolibros.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listalibros',
  imports: [CommonModule, FiltroLibrosPipe, FormsModule],
  standalone: true,
  templateUrl: './listalibros.component.html',
  styleUrl: './listalibros.component.css'
})
export class ListalibrosComponent implements OnInit {

  libros: any[] = [];
  error: string = '';
  filtroCategoria: string = '';

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.librosService.obtenerLibros().subscribe({
      next: (data) => {
        this.libros = data;
        console.log('Libros cargados:', this.libros);
      },
      error: (err) => {
        this.error = 'Error al cargar los libros';
        console.error(err);
      }
    });
  }

}
