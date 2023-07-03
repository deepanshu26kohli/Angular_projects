import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HealthComponent } from './health/health.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {
  path : "",
  component : HomeComponent
},
{
  path : "health",
  component : HealthComponent
},
{
  path : "business",
  component : BusinessComponent
},
{
  path : "entertainment",
  component : EntertainmentComponent
},
{
  path : "science",
  component : ScienceComponent
},
{
  path : "sports",
  component : SportsComponent
},
{
  path : "technology",
  component : TechnologyComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
