const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  SERVICES: '/hospedaje',
  HAIRSTYLE: '/peluquería',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  HOME2: '/inicio',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  VET: '/veterinaria',
  ADV: '/anuncio',
  ORDERDETAIL: '/detalleorden',
  RESERVATION:'/reservación',
  ADDSERVICE: '/añadirservicio',
  LISTSERVICES:'/listaservicios'
};

const privateRoutes = {
  LOGOUT: '/logout',
  SERVICE_ID: '/servicio/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
