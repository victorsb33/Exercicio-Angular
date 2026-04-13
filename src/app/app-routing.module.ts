import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';
import { Tarefa1Component } from './pages/tarefa1/tarefa1.component';
import { Tarefa2Component } from './pages/tarefa2/tarefa2.component';
import { Tarefa3Component } from './pages/tarefa3/tarefa3.component';
import { VexTableComponent } from './shared/components/vex-table/vex-table.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: 'tarefa1', component: Tarefa1Component},
      { path: 'tarefa2', component: Tarefa2Component},
      { path: 'tarefa3', component: Tarefa3Component},
      { path: 'vex-table', component: VexTableComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
