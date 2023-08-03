import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public  heroNames: string[] =["Hoja", "Lluvia", "Arena"];
  public deleteHeros?: string;

  removeLastSheet():void{   
    this.deleteHeros = this.heroNames.pop();
    console.log("Eliminado ",this.deleteHeros)
  }
}
