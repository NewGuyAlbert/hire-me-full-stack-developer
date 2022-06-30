import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { CrudProductService } from '../../services/crud-product/crud-product.service';

@Component({
  selector: 'project-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  isVisible = false;
  validateForm!: FormGroup

  @Output() public newProduct = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private service: CrudProductService) {}

  showModal(): void {
    this.isVisible = true;
  }

  submitForm(): void {
    this.service.create(this.validateForm.value).subscribe((product) => {
      this.newProduct.emit(product)
    })
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

}
