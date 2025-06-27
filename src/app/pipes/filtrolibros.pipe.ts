import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroLibros'
})
export class FiltroLibrosPipe implements PipeTransform {
  transform(libros: any[], texto: string): any[] {
    if (!libros || !texto) return libros;

    const textoLower = texto.toLowerCase();

    return libros.filter(libro =>
      libro.titulo.toLowerCase().includes(textoLower) ||
      libro.autor.toLowerCase().includes(textoLower) ||
      libro.categoria.toLowerCase().includes(textoLower)
    );
  }
}
