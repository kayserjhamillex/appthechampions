import { AdminService } from './admin.service';
import { TestBed } from '@angular/core/testing';

describe('Servicios de usuario administrativo', () => {
  // let httpClientSpy: {
  //   get: jasmine.Spy
  // };
  let service: AdminService;

  beforeEach(() => {
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // adminservice = new AdminService(httpClientSpy as any);
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminService);
  });
  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  // testeando servicio get all
  // it('Lista de usuarios vacio al princio', () => {
  //   expect(adminservice.losadmins.length).toBe(0);
  // });

  // it('Creando 2 datos dentro de la lista', () => {
  //   const expectadmins = [
  //     { id: 1,
  //       Fullname: 'Admin Web',
  //       Correo: 'web@gmail.com',
  //       Contrasena: 'thechampions'
  //     },
  //     { id: 2,
  //       Fullname: 'Chat Web',
  //       Correo: 'chat@gmail.com',
  //       Contrasena: '123'
  //     }
  //   ];
  //   httpClientSpy.get.and.returnValue(of(expectadmins));
  //   adminservice.getAdmins();
  //   expect(adminservice.losadmins.length).toBe(2);
  // });
});
