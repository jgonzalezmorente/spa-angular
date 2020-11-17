import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.termino) {
        this.termino = params.termino;
        this.heroes = this.heroesService.buscarHeroes(this.termino);
      } else {
        this.heroes = this.heroesService.getHeroes();
      }
    });
  }

  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx]);
  }
}
