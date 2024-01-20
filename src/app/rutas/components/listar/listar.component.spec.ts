import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRutasComponent } from './listar.component';

describe('ListarRutasComponent', () => {
  let component: ListarRutasComponent;
  let fixture: ComponentFixture<ListarRutasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarRutasComponent]
    });
    fixture = TestBed.createComponent(ListarRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
