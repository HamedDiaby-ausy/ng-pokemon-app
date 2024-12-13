import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined

  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonId: string){
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon=> pokemon.id == +pokemonId)
    this.pokemonSelected = pokemon;

    if(pokemon){
      console.log(`Vous avez sélèctionnez le pokemon ${pokemon.name}`);
    } else {
      console.log(`Ce pokemon existe pas !`);
    }
  }
}
