import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { VexTableComponent } from './shared/components/vex-table/vex-table.component';
import { Tarefa1Component } from './pages/tarefa1/tarefa1.component';
import { Tarefa2Component } from './pages/tarefa2/tarefa2.component';
import { Tarefa3Component } from './pages/tarefa3/tarefa3.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AppComponent, VexTableComponent, Tarefa1Component, Tarefa2Component, Tarefa3Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
