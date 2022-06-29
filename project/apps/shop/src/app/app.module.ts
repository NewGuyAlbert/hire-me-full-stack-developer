import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

//antd
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CrudService } from './services/crud/crud.service';
import { CrudProductService } from './services/crud-product/crud-product.service';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent, 
    CartComponent, 
    ProductComponent, 
    NotFoundComponent,
    NavbarComponent,
    ProductAddComponent,
    ProductListComponent,
    CartListComponent,
    ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzMenuModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzIconModule,
    NzDividerModule,
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
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    CrudService,
    CrudProductService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
