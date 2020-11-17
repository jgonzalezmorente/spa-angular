import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  private static SRC_DC = 'assets/img/dc-logo.jpg';
  private static SRC_MARVEL = 'assets/img/marvel-logo.png';

  private heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params.id);
      console.log(params.id);
    });
  }

  getNombre(): string {
    return this.heroe.nombre;
  }

  getAparicion(): string {
    return this.heroe.aparicion.split('-').reverse().join('-');
  }

  getImg(): string {
    return this.heroe.img;
  }

  getBio(): string {
    return this.heroe.bio;
  }

  getCasa(): string {
    return this.heroe.casa;
  }

  getLogo(): string {
    if (this.heroe.casa === 'DC') {
      return HeroeComponent.SRC_DC;
    }
    else if (this.heroe.casa === 'Marvel') {
      return HeroeComponent.SRC_MARVEL;
    }
    else {
      return '';
    }
  }
}
