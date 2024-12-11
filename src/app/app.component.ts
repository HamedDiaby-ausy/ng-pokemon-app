import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste des pokémons</h1>`
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.table(POKEMONS);
    this.selectPokemon(POKEMONS[0]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez sélèctionnez le pokemon ${pokemon.name}`);
  }
}
