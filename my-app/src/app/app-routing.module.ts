import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { LikeComponent } from './like/like.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [ 
 { path: 'all',
  component: AllComponent,
  data: { title: 'All Emojis' }
},
{
  path: 'like',
  component: LikeComponent,
  data: { title: 'Like Emojis' }
},
{
  path: 'delete',
  component: DeleteComponent,
  data: { title: 'Delete Emojis' }
}
// { path: '',
//   redirectTo: '/all',
//   pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
