import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteExercicioComponent } from './componente-exercicio.component';

describe('ComponenteExercicioComponent', () => {
  let component: ComponenteExercicioComponent;
  let fixture: ComponentFixture<ComponenteExercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteExercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteExercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
