import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProductListingComponent } from './products/product-listing/product-listing';
import { ProductDetailComponent } from './products/product-detail/product-detail';
import { WhatIsDomoticsComponent } from './info/what-is-domotics/what-is-domotics';
import { AboutComponent } from './info/about/about';
import { AchievementsComponent } from './info/achievements/achievements';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel';
import { LoginComponent } from './admin/login/login';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio - DomoTechSV' },
  { 
    path: 'productos/:nicho', 
    component: ProductListingComponent,
    title: 'Productos - DomoTechSV'
  },
  { 
    path: 'producto/:id', 
    component: ProductDetailComponent,
    title: 'Detalle de Producto - DomoTechSV'
  },
  { 
    path: 'que-es-domotica', 
    component: WhatIsDomoticsComponent,
    title: '¿Qué es la Domótica? - DomoTechSV'
  },
  { 
    path: 'about', 
    component: AboutComponent,
    title: 'Sobre Nosotros - DomoTechSV'
  },
  { 
    path: 'admin', 
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
    title: 'Panel de Administración - DomoTechSV'
  },
  { path: 'admin/login', component: LoginComponent, title: 'Iniciar Sesión' },
  { 
    path: 'logros', 
    component: AchievementsComponent,
    title: 'Logros - DomoTechSV'
  },
  { path: '**', redirectTo: '' }
];