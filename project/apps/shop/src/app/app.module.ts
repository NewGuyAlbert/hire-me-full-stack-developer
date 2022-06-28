import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './parts/navbar/navbar.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, 
    CartComponent, 
    ProductComponent, 
    NotFoundComponent,
    NavbarComponent,
    ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '',
        redirectTo: '/product',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
