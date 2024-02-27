import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {path:'', component:TitleComponent, pathMatch:'full'},
  //portifolio - rota pai
  //portifolio/1 - rota filha
  //portifolio/1/abc - rota filha
  {path:'portifolio', component: CardComponent, children: [
    {path:':id', component: CardComponent},
    {path:':id/:token', component: CardComponent},
  ]},
  {path:'**', redirectTo:''} //rota coringa que foi direcionada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
