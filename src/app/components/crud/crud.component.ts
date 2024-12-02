import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
// ng g c components\crud
// ng serve -o  starter webserver op og åbner browser
// ctrl +c stopper webserver, skal stå inde i terminal
export class CrudComponent {
  //Array af navne
  names: string[] = ['Darab', 'Rasmus', 'Max'];

    // Opretter nyt navn
    create(name: string): void { // tilføjer et nyt navn (name) til listen names
      this.names.push(name); // Tilføjer name til slutningen af names
      console.log(`${name} added.`, this.names); // Udskriver en besked i konsollen med navnet, der er tilføjet, og den opdaterede liste
    }
  
    // slette det sidste navn
    delete(): void { // Fjerner det sidste element fra names
      if (this.names.length > 0) { // Kontrollerer, om listen ikke er tom, før der fjernes et navn
        const removed = this.names.pop(); // Fjerner og returnerer det sidste element i arrayet
        console.log(`${removed} removed.`, this.names);
      } else {
        console.log("No names to delete.");
      }
    }
  
    // få alle navne
    getAll(): string[] { // Returnerer hele listen names
      console.log("Getting all names:", this.names);
      return this.names;
    }
}
