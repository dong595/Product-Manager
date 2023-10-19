import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { SearchBoxPipe } from './search-box.pipe';
import { ChangeNumberToTextPipe } from './change-number-to-text.pipe';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './Components/banner/banner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './Components/product-add/product-add.component';
import { ProductEditComponent } from './Components/product-edit/product-edit.component';
import { DashbroadComponent } from './Components/dashbroad/dashbroad.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaselayoutComponent } from './layouts/baselayout/baselayout.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SearchBoxPipe,
    ChangeNumberToTextPipe,
    ProductDetailComponent,
    NotFoundComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    BannerComponent,
    ProductAddComponent,
    ProductEditComponent,
    DashbroadComponent,
    AdminLayoutComponent,
    BaselayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
