import { Injectable } from '@angular/core';
import {Libro} from '../libro/libro';
import {LibroM} from '../libro/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl: string='';
  private libros: LibroM[]=
    [
      {
        "id": 1,
        "nombre": "From Blood and Ash",
        "autor": "Jennifer L. Armentrou",
        "votos": 70896,
        "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588843906l/52861201._SY475_.jpg",
        "url": "https://www.goodreads.com/book/show/52861201-from-blood-and-ash?from_choice=true",
        "categoria": "Romance",
        "anio": 2020,
        "precio": 43
      }, {
      "id": 2,
      "nombre": "Beach Read",
      "autor": "Emily Henr",
      "votos": 60124,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589881197l/52867387._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/52867387-beach-read?from_choice=true",
      "categoria": "Romance",
      "anio": 2020,
      "precio": 465
    }, {
      "id": 3,
      "nombre": "In Five Years",
      "autor": "Rebecca Serl",
      "votos": 37342,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586399012l/50093704._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/50093704-in-five-years?from_choice=true",
      "categoria": "Romance",
      "anio": 2020,
      "precio": 433
    }, {
      "id": 4,
      "nombre": "Regretting You",
      "autor": "Colleen Hoove",
      "votos": 35856,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559332442l/44582454._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/44582454-regretting-you?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 456
    }, {
      "id": 5,
      "nombre": "Boyfriend Material",
      "autor": "Alexis  Hal",
      "votos": 33502,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575987260l/50225678.jpg",
      "url": "https://www.goodreads.com/book/show/50225678-boyfriend-material?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 133
    }, {
      "id": 6,
      "nombre": "Take a Hint, Dani Brown",
      "autor": "Talia Hibber",
      "votos": 26958,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1592943641l/52090948._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/52090948-take-a-hint-dani-brown?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 221
    }, {
      "id": 7,
      "nombre": "One to Watch",
      "autor": "Kate Stayman-Londo",
      "votos": 24301,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584401917l/53103895.jpg",
      "url": "https://www.goodreads.com/book/show/53103895-one-to-watch?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 234
    }, {
      "id": 8,
      "nombre": "The Happy Ever After Playlist",
      "autor": "Abby Jimene",
      "votos": 18244,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583200162l/52539131._SX318_SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/52539131-the-happy-ever-after-playlist?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 763
    }, {
      "id": 9,
      "nombre": "The Switch",
      "autor": "Beth O'Lear",
      "votos": 17210,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1585639107l/48842183.jpg",
      "url": "https://www.goodreads.com/book/show/48842183-the-switch?from_choice=true",
      "categoria": "Ficción",
      "anio": 2022,
      "precio": 123
    }, {
      "id": 10,
      "nombre": "You Had Me at Hola",
      "autor": "Alexis Dari",
      "votos": 14666,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586533869l/52585101.jpg",
      "url": "https://www.goodreads.com/book/show/52585101-you-had-me-at-hola?from_choice=true",
      "categoria": "Horror",
      "anio": 2024,
      "precio": 732
    }, {
      "id": 11,
      "nombre": "The Two Lives of Lydia Bird",
      "autor": "Josie Silve",
      "votos": 7069,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583446296l/46225061._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/46225061-the-two-lives-of-lydia-bird?from_choice=true",
      "categoria": "Horror",
      "anio": 2024,
      "precio": 890
    }, {
      "id": 12,
      "nombre": "Party of Two",
      "autor": "Jasmine Guillor",
      "votos": 6211,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580140214l/49099926._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/49099926-party-of-two?from_choice=true",
      "categoria": "Horror",
      "anio": 2024,
      "precio": 223
    }, {
      "id": 13,
      "nombre": "A Rogue of One's Own",
      "autor": "Evie Dunmor",
      "votos": 6005,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578931679l/49202118.jpg",
      "url": "https://www.goodreads.com/book/show/49202118-a-rogue-of-one-s-own?from_choice=true",
      "categoria": "Horror",
      "anio": 2024,
      "precio": 56
    }, {
      "id": 14,
      "nombre": "In a Holidaze",
      "autor": "Christina Laure",
      "votos": 5713,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1601590329l/50892287._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/50892287-in-a-holidaze?from_choice=true",
      "categoria": "Drama",
      "anio": 2024,
      "precio": 23
    }, {
      "id": 15,
      "nombre": "Emerald Blaze",
      "autor": "Ilona Andrew",
      "votos": 4913,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1597017672l/50496840.jpg",
      "url": "https://www.goodreads.com/book/show/50496840-emerald-blaze?from_choice=true",
      "categoria": "Drama",
      "anio": 2024,
      "precio": 65
    }, {
      "id": 16,
      "nombre": "Something to Talk About",
      "autor": "Meryl Wilsne",
      "votos": 4631,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589963301l/52915426._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/52915426-something-to-talk-about?from_choice=true",
      "categoria": "Contemporáneo",
      "anio": 2023,
      "precio": 34
    }, {
      "id": 17,
      "nombre": "Sweet Temptation",
      "autor": "Cora Reill",
      "votos": 3643,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1583736804l/52226559._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/52226559-sweet-temptation?from_choice=true",
      "categoria": "Contemporáneo",
      "anio": 2023,
      "precio": 34
    }, {
      "id": 18,
      "nombre": "Hands Down",
      "autor": "Mariana Zapat",
      "votos": 2892,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594433634l/54467737._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/54467737-hands-down?from_choice=true",
      "categoria": "Contemporáneo",
      "anio": 2023,
      "precio": 78
    }, {
      "id": 19,
      "nombre": "You Deserve Each Other",
      "autor": "Sarah Hogl",
      "votos": 2139,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578144091l/49758584._SY475_.jpg",
      "url": "https://www.goodreads.com/book/show/49758584-you-deserve-each-other?from_choice=true",
      "categoria": "Contemporáneo",
      "anio": 2023,
      "precio": 23
    }, {
      "id": 20,
      "nombre": "Spoiler Alert",
      "autor": "Olivia Dad",
      "votos": 1884,
      "imagen": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584239588l/50496918.jpg",
      "url": "https://www.goodreads.com/book/show/50496918-spoiler-alert?from_choice=true",
      "categoria": "Contemporáneo",
      "anio": 2023,
      "precio": 79
    }
    ];
  obtenerLibros(){
    return this.libros;
  }
  obtenerLibroId(id:number):LibroM{
    return <LibroM>this.libros.find(item => item.id === id);
  }
  eliminarLibroId(id:number):number{
    this.libros.filter(item => item.id !== id);
    return id;
  }
}
