import { PosterDetailsComponent } from './dashboard/poster-details/poster-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'details',
        component: PosterDetailsComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
    ]
  },

];



// export const routes: Routes = [
//   {
//     path: '',
//     children: [
//       {
//         path: 'edit-current',
//         component: ProfileManagementEditCurrentComponent
//       },
//       {
//         path: 'edit',
//         component: ProfileManagementEditComponent
//       },
//       {
//         path: 'profiles',
//         component: ProfileManagementProfilesComponent
//       },
//       {
//         path: 'add',
//         component: ProfileManagementAddComponent
//       },
//       {
//         path: '',
//         component: ProfileManagementProfilesComponent
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
