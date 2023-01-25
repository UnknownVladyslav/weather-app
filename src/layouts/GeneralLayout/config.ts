import NotFoundPage from 'pages/General/NotFound';
import MainPage from 'pages/Main/MainPage';

export const generalRoutes = [
  {
    id: 0,
    exact: false,
    path: '/',
    component: MainPage,
  },
  {
    id: 1,
    exact: false,
    path: undefined,
    component: NotFoundPage,
  },
];
