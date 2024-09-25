import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', loadChildren: () => import('./components/items/items.module').then(m => m.ItemsModule) },
  { path: 'task', loadChildren: () => import('./task/task.module').then(m => m.TaskModule) },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
