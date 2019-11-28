import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FilterPipe} from './filter.pipe';
import { CharacterComponent } from './character/character.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    CharacterComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
