import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SearchPartComponent } from './components/search-part/search-part.component';
import { ProgPartComponent } from './components/prog-part/prog-part.component';
import { CityPartComponent } from './components/city-part/city-part.component';
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    ProgramsComponent,
    SearchPartComponent,
    ProgPartComponent,
    CityPartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
