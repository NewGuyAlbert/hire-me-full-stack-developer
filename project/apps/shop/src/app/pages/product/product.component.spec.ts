import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductAddComponent } from '../../components/product-add/product-add.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent, 
        NavbarComponent,
        ProductListComponent,
        ProductAddComponent 
      ],
      imports: [ 
        FormsModule, 
        ReactiveFormsModule,
        HttpClientTestingModule,
        NzModalModule,
        NzTableModule,
        NzButtonModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
