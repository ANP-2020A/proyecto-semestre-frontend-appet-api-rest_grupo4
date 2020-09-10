/**
 * Created by chalosalvador on 17/01/2019.
 */

const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  SERVICES: '/hospedaje',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  HOME2: '/inicio',
  ABOUT: '/acerca-de',
  ANTD: '/antd'
};

const privateRoutes = {
  LOGOUT: '/logout',
  PRIVATE: '/peluquería',
  SERVICE_ID: '/servicio/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
