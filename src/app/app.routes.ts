import { Routes } from '@angular/router';
import { UsersList } from './pages/users-list/users-list';
import { UserDetail} from './pages/user-detail/user-detail';

export const routes: Routes = [
  { path: 'user-list',
     component: UsersList },

  { path: 'user-detail/:id',
     component: UserDetail },

   { path: 'user-detail',
     component: UserDetail },

];