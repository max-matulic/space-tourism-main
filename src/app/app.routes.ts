import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CrewComponent } from './pages/crew/crew.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { HomeComponent } from './pages/home/home.component';
import { TechnologyComponent } from './pages/technology/technology.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'crew', component: CrewComponent },
      { path: 'destination', component: DestinationComponent },
      { path: 'technology', component: TechnologyComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
