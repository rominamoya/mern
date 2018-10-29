import FormContainer from './Contacts/FormContainer';
import ListContainer from './Contacts/ListContainer';

const routes = [
  {
    path: '/',
    component: ListContainer,
  },
  {
    path: '/contacts/new',
    component: FormContainer,
  },
  {
    path: '/contacts/edit/:id',
    component: FormContainer,
  },
];

export default routes;
