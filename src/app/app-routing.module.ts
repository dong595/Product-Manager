import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { DashbroadComponent } from './Components/dashbroad/dashbroad.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaselayoutComponent } from './layouts/baselayout/baselayout.component';
import { ProductEditComponent } from './Components/product-edit/product-edit.component';
import { LoginComponent } from './page/login/login.component';

import { RegisterComponent } from './page/register/register.component';
const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashbroadComponent },
      { path: 'product/add', component: ProductAddComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id/edit', component: ProductEditComponent },
    ],
  },
  {
    path: '',
    component: BaselayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
      { path: 'user/login', component: LoginComponent },
      { path: 'user/register', component: RegisterComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
