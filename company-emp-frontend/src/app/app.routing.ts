import { RouterModule, Routes } from '@angular/router';

import { RegComponent } from './reg/reg.component';
import { ViewComponent } from './view/view.component';
import { EmplistComponent } from './emplist/emplist.component';
import { AddempComponent } from './addemp/addemp.component';
import { LogComponent } from './log/log.component';



const arr: Routes = [
  { path: 'reg', component: RegComponent },

  { path: '', component: LogComponent },

  {
    path: 'view',
    component: ViewComponent,
    children: [
      { path: '', component: EmplistComponent },
      { path: 'addemp', component: AddempComponent },

    ],
  },
];
export const arrRouting = RouterModule.forRoot(arr);
