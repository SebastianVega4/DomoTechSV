import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListingComponent } from './products/product-listing/product-listing.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WhatIsDomoticsComponent } from './info/what-is-domotics/what-is-domotics.component';
import { AboutComponent } from './info/about/about.component';
import { AchievementsComponent } from './info/achievements/achievements.component';

const routes: Routes = [
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