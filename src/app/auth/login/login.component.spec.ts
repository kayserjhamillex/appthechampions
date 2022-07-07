import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('Componente instanciado', () => {
  //   expect(component).toBeDefined();
  //   expect(component).toBeInstanceOf(LoginComponent);
  //   expect(component.parametro).toBe({
  //     usuario: '',
  //     contra: ''
  //   });
  //   expect(component.admin).toBe({
  //     id: 0,
  //     Fullname: '',
  //     Correo: '',
  //     Contrasena: ''
  //   });
  // });

});
