import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';

/* import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component'; */
import { MainPageComponent } from './dbz/pages/main-page.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent
/*     HeroComponent,
    ListComponent */
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }