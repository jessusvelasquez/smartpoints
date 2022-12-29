import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from "./components/home/home.component";
import { GetprizesComponent } from "./components/getprizes/getprizes.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'redimir-premios', component: GetprizesComponent},
  {path:'**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
