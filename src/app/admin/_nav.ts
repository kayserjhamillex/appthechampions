import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/admin/home',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Pilares'
  },
  {
    name: 'Empresa',
    url: '/admin/wasa',
    icon: 'icon-drop',
    children: [
      {
        name: 'Ver Empresa',
        url: '/admin/empresa/view',
        icon: 'icon-puzzle'
      },
      {
        name: 'Update Empresa',
        url: '/admin/empresa/update',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Admin',
    url: '/admin/wasa',
    icon: 'icon-drop',
    children: [
      {
        name: 'Lista Admins',
        url: '/admin/admin/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Admin',
        url: '/admin/admin/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Cliente',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Clientes',
        url: '/admin/cliente/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Cliente',
        url: '/admin/cliente/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Field',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Field',
        url: '/admin/field/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Field',
        url: '/admin/field/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Blog',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Blogs',
        url: '/admin/blog/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Blog',
        url: '/admin/blog/create',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Testimonio',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Testimonios',
        url: '/admin/testimonio/list',
        icon: 'icon-puzzle'
      },
      {
        name: 'Crear Testimonios',
        url: '/admin/testimonio/create',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Comentarios',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista de Blogs',
        url: '/admin/comentarios/listblog',
        icon: 'icon-puzzle'
      }
    ]
  },
  // {
  //   name: 'Horario',
  //   url: '/admin/wasa',
  //   icon: 'icon-pencil',
  //   children: [
  //     {
  //       name: 'Lista Horarios',
  //       url: '/admin/horario/list',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Crear Horario',
  //       url: '/admin/horario/create',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  {
    divider: true
  },
  {
    title: true,
    name: 'Complemento'
  },
  {
    name: 'Chat',
    url: '/admin/wasa',
    icon: 'icon-pencil',
    children: [
      {
        name: 'Lista Chat',
        url: '/admin/chat/list',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Procesos'
  },
  {
    name: 'Confirmar Pago',
    url: '/admin/procesos/proceso9/subproceso1',
    icon: 'icon-puzzle'
  },
  {
    name: 'Reserva',
    url: '/admin/wasa',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Nueva Reserva',
        url: '/admin/procesos/proceso1/subproceso1',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Postergar',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Realizar Postergacion',
        url: '/admin/procesos/proceso2/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Atenciones',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Nueva Atencion',
        url: '/admin/procesos/proceso3/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Atender Reserva',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Realizar Atencion',
        url: '/admin/procesos/proceso4/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Atender Cliente',
    url: '/admin/wasa',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Realizar Atencion',
        url: '/admin/procesos/proceso5/subproceso1',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Institucional'
  },
  {
    name: 'Reservar',
    url: '/admin/wasa',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Nueva Reserva',
        url: '/admin/procesos/proceso6/subproceso1',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Postergar',
    url: '/admin/wasa',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Realizar Postergacion',
        url: '/admin/procesos/proceso7/subproceso1',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Atender',
    url: '/admin/wasa',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Realizar Atencion',
        url: '/admin/procesos/proceso8/subproceso1',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  },
  // {
  //   title: true,
  //   name: 'Local'
  // },
  // {
  //   name: 'Local',
  //   url: '/admin/wasa',
  //   icon: 'icon-pencil',
  //   children: [
  //     {
  //       name: 'Reserva Local',
  //       url: '/admin/local/reservacion',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Confirmar',
  //       url: '/admin/local/confirmacion',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Postergacion',
  //       url: '/admin/local/postergacion',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Atencion',
  //       url: '/admin/local/atencion',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Cancelacion',
  //       url: '/admin/local/cancelacion',
  //       icon: 'icon-puzzle'
  //     },
  //   ]
  // },
  // {
  //   divider: true
  // },
  {
    title: true,
    name: 'Reportes',
  },
  {
    name: 'Reportes',
    url: '/admin/wasa',
    icon: 'icon-star',
    children: [
      {
        name: 'Lista de Reportes',
        url: '/admin/reportes/list',
        icon: 'icon-star'
      }
    ]
  }
];
