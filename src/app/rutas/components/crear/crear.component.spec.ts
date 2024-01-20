import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearRutaComponent } from './crear.component';

describe('CrearRutaComponent', () => {
  let component: CrearRutaComponent;
  let fixture: ComponentFixture<CrearRutaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearRutaComponent]
    });
    fixture = TestBed.createComponent(CrearRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
