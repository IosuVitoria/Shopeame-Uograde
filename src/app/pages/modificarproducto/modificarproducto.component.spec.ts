import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarproductoComponent } from './modificarproducto.component';

describe('ModificarproductoComponent', () => {
  let component: ModificarproductoComponent;
  let fixture: ComponentFixture<ModificarproductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarproductoComponent]
    });
    fixture = TestBed.createComponent(ModificarproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
