import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { ChangePasswordComponent} from './components/change-password/change-password.component';
import { SiteComponent } from './components/tabsettings/site/site.component';
import { UserComponent } from './components/tabsettings/user/user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DataGroupsComponent } from './components/Data_Analytics/data-groups/data-groups.component';
import { PasswordRecoveryComponent } from './components/settings/password-recovery/password-recovery.component';
import { DeviceListComponent } from './device-list/device-list.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'groups', canActivate: [AuthGuard], component: DevicegroupsComponent },
  {path:'changepassword',canActivate: [AuthGuard], component:ChangePasswordComponent},
  {path:'registration',canActivate:[AuthGuard],component: RegistrationComponent},
  {
    path: 'home', canActivate: [AuthGuard], component: HomeComponent, children: [
      { path: 'site', component: SiteComponent, outlet: 'settings' }, 
      { path: 'users', component: UserComponent, outlet: 'settings' }, 
      {path:'dataGroups',component:DataGroupsComponent,outlet:'settings'},
      {path:'deviceList',component:DeviceListComponent,outlet:'settings'},
      {path:'passwordrecovery', component:PasswordRecoveryComponent, outlet:'settings'},
      { path: '', component: DashboardComponent, outlet: 'settings' },
    ]},
    { path: 'dashboard', redirectTo: '/home', pathMatch: 'full' }

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
