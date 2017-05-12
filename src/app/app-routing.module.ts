import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// if you don't want to lazy load the features module,
// simply put the loadFeaturesModule as value of loadChildren
// import { FeaturesModule } from './features/features.module';

// export function loadFeaturesModule() {
//   return FeaturesModule;
// }

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/features/features.module#FeaturesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
