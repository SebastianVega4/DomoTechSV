import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductListingComponent } from './products/product-listing/product-listing';
import { ProductDetailComponent } from './products/product-detail/product-detail';
import { WhatIsDomoticsComponent } from './info/what-is-domotics/what-is-domotics';
import { AboutComponent } from './info/about/about';
import { AchievementsComponent } from './info/achievements/achievements';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos/:nicho', component: ProductListingComponent },
  { path: 'producto/:id', component: ProductDetailComponent },
  { path: 'que-es-domotica', component: WhatIsDomoticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logros', component: AchievementsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
