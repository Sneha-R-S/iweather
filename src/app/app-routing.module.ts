import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'country-list',
    loadChildren: () => import('./country-list/country-list.module').then( m => m.CountryListPageModule)
  },
  {
    path: 'newyork',
    loadChildren: () => import('./newyork/newyork.module').then( m => m.NewyorkPageModule)
  },
  
  {
    path: 'losangeles',
    loadChildren: () => import('./losangeles/losangeles.module').then( m => m.LosangelesPageModule)
  },
  {
    path: 'houston',
    loadChildren: () => import('./houston/houston.module').then( m => m.HoustonPageModule)
  },
  {
    path: 'denver',
    loadChildren: () => import('./denver/denver.module').then( m => m.DenverPageModule)
  },
  {
    path: 'miami',
    loadChildren: () => import('./miami/miami.module').then( m => m.MiamiPageModule)
  },
  {
    path: 'atlanta',
    loadChildren: () => import('./atlanta/atlanta.module').then( m => m.AtlantaPageModule)
  },
  {
    path: 'colombus',
    loadChildren: () => import('./colombus/colombus.module').then( m => m.ColombusPageModule)
  },
  {
    path: 'rayleigh',
    loadChildren: () => import('./rayleigh/rayleigh.module').then( m => m.RayleighPageModule)
  },
  
  {
    path: 'louisville',
    loadChildren: () => import('./louisville/louisville.module').then( m => m.LouisvillePageModule)
  },
  {
    path: 'portland',
    loadChildren: () => import('./portland/portland.module').then( m => m.PortlandPageModule)
  },
  {
    path: 'tucson',
    loadChildren: () => import('./tucson/tucson.module').then( m => m.TucsonPageModule)
  },
  {
    path: 'boston',
    loadChildren: () => import('./boston/boston.module').then( m => m.BostonPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
