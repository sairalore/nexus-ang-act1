import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroCheckout } from './libro-checkout';

describe('LibroCheckout', () => {
  let component: LibroCheckout;
  let fixture: ComponentFixture<LibroCheckout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibroCheckout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroCheckout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
