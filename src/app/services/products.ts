import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  nombre:string;
  descripcion: string;
  precio: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root',
})


export class Products {
  
  private products: Product[]=[
    {
      id: 1,
      nombre: 'Limpieza General',
      descripcion: 'Limpieza profesional de vidrios exteriores, marcos y rieles.',
      precio: '$45.000=',
      imagen: '/img/Limpieza.jpg',
    },
    {
      id: 2,
      nombre: 'Limpieza Profunda',
      descripcion: 'Barrido, lavado y desinfección de terrazas o balcones.',
      precio: '$50.000=',
      imagen: '/img/Profunda.jpg',
    },
    { 
      id: 3,
      nombre: 'Limpieza de Mudanza',
      descripcion: 'Pulido, abrillantado y restauración de pisos según tipo de material.',
      precio: '$120.000=',
      imagen: '/img/Muda.jpg',
    },
    { 
      id: 4,
      nombre: 'Otros Servicios',
      descripcion: 'Limpieza con vapor para desinfección profunda, Tratamiento de pisos (encerado, cristalizado, diamantado).',
      precio: '$150.000=',
      imagen: '/img/Otros.jpg',
    },
      ]
  constructor() {}
  getProducts():Product []{
    return this.products
  }
}
