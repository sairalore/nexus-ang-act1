import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCart } from './libro-cart';

describe('LibroCart', () => {
  let component: LibroCart;
  let fixture: ComponentFixture<LibroCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
