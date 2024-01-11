import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AboutComponent } from './dashboard/about/about.component';
import { ContactComponent } from './dashboard/contact/contact.component';  

const routes: Routes = [

  // {
  //     path: '', component: DashboardComponent, pathMatch: 'full',
  //     children: 
  //     [
  //       { path:"home", component: HomeComponent, pathMatch: 'full' },
  //       { path:"about", component: AboutComponent, pathMatch: 'full' },
  //       { path:"contact", component: ContactComponent, pathMatch: 'full' },
  //     ]   
  // },
  {path: 'home', component: HomeComponent, pathMatch: 'full',},
  {path: 'about', component: AboutComponent, pathMatch: 'full',},
  {path: 'contact', component: ContactComponent, pathMatch: 'full',},
  // {
  //   path: 'home', component: MainComponent, pathMatch: 'full',
  //   children: 
  //   [
  //     { path:"", component: HomeComponent, pathMatch: 'full' },
  //   ]   
  // },
  // {
  //   path: 'about', component: MainComponent, pathMatch: 'full',
  //   children: 
  //   [
  //     { path:"", component: AboutComponent, pathMatch: 'full' },
  //   ]
  // },
  // {
  //   path: 'contact', component: MainComponent, pathMatch: 'full',
  //   children: 
  //   [
  //     { path:"", component: ContactComponent, pathMatch: 'full' },
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


