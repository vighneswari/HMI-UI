import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MaterialModule } from './material-module';
import { NgSelect2Module } from 'ng-select2';
import { HighchartsChartModule } from 'highcharts-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MAT_DATE_LOCALE } from '@angular/material';
/* Services*/
import { BackendService } from './services/backend.service';
import { DeviceService } from './services/device.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { GroupserviceService } from './services/groupservice.service';
import { DashboardOutletDirective } from './components/dashboard/dashboard-outlet.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
/* Components*/
import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderhomeComponent } from './components/headerhome/headerhome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
import { DynamicSearchDropdownComponent } from './components/dynamic-search-dropdown/dynamic-search-dropdown.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChartsComponent } from './components/charts/charts.component';
import { LoginComponent } from '../app/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './components/home/home.component';

/* Widgets*/
import { RealTimePowerComponent } from './components/real-time-power/real-time-power.component';
import { RealTimeCurrentsComponent } from './components/real-time-currents/real-time-currents.component';
import { RealTimeVoltageComponent } from './components/real-time-voltage/real-time-voltage.component';
import { ConnectivityOverviewComponent } from './components/connectivity-overview/connectivity-overview.component';
import { GroupPeakMonitoringComponent } from './components/group-peak-monitoring/group-peak-monitoring.component';
import { DeviceCurrentTrendsComponent } from './components/device-current-trends/device-current-trends.component';
import { DeviceVoltageTrendsComponent } from './components/device-voltage-trends/device-voltage-trends.component';
import { PowerFactorComponent } from './components/power-factor/power-factor.component';
import { PowerDemandComponent } from './components/power-demand/power-demand.component';
import { PowerGenerationComponent } from './components/power-generation/power-generation.component';
import { EnergyCostComponent } from './components/energy-cost/energy-cost.component';
import { EnergyMonitoringComponent } from './components/energy-monitoring/energy-monitoring.component';
import { DevicePowerDataComponent } from './components/device-power-data/device-power-data.component';
import { GroupRealTimeCurentComponent } from './components/group-real-time-curent/group-real-time-curent.component';
import { GroupRealTimePowerComponent } from './components/group-real-time-power/group-real-time-power.component';
import { GroupRealTimeVoltageComponent } from './components/group-real-time-voltage/group-real-time-voltage.component';
import { EnergyDataComponent } from './components/energy-data/energy-data.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DatePipe } from '@angular/common';
import { PowerQualityComponent } from './components/power-quality/power-quality.component';
import { SiteComponent } from './components/tabsettings/site/site.component';
import { UserComponent } from './components/tabsettings/user/user.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DataGroupsComponent } from './components/Data_Analytics/data-groups/data-groups.component';
import { PasswordRecoveryComponent } from './components/settings/password-recovery/password-recovery.component';
import { ListTableComponent } from './components/Data_Analytics/list-table/list-table.component';
import { DataGroupComponent } from './components/Data_Analytics/data-group/data-group.component';
import { DialogMenuComponent } from './components/Data_Analytics/dialog-menu/dialog-menu.component';
import { DeviceListComponent } from './device-list/device-list.component';
import {DevicedialogboxComponent} from './Devicedialogbox/devicedialogbox.component'



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TableComponent,
    TableHeaderComponent,
    NavigationsComponent,
    LoginComponent,
    FooterComponent,
    HeaderhomeComponent,
    DashboardComponent,
    TabsComponent,
    ChartsComponent,
    TabComponent,
    LoaderComponent,
    SettingsComponent,
    HomeComponent,
    DashboardOutletDirective,
    DynamicSearchDropdownComponent,
    RealTimePowerComponent,
    RealTimeCurrentsComponent,
    RealTimeVoltageComponent,
    ConnectivityOverviewComponent,
    GroupPeakMonitoringComponent,
    DeviceCurrentTrendsComponent,
    DeviceVoltageTrendsComponent,
    PowerFactorComponent, 
    PowerDemandComponent,
    PowerGenerationComponent,
    EnergyCostComponent,
    EnergyMonitoringComponent,
    DevicePowerDataComponent,
    GroupRealTimeCurentComponent,
    GroupRealTimePowerComponent,
    GroupRealTimeVoltageComponent,
    EnergyDataComponent,
    ChangePasswordComponent,
    PowerQualityComponent,
    SiteComponent,
    UserComponent,
    RegistrationComponent,
    DataGroupsComponent,
    PasswordRecoveryComponent,
    ListTableComponent,
    DataGroupComponent,
    DialogMenuComponent,
    DeviceListComponent,
    DevicedialogboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MaterialModule,
    NgSelect2Module,
    HighchartsChartModule,
    DragDropModule,
    FlexLayoutModule
  ],
  providers: [
    AppComponent,
    DeviceService,
    GroupserviceService,
    { provide: HTTP_INTERCEPTORS, useClass: BackendService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide:MAT_DATE_LOCALE, useValue: 'en-GB' }, DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [RealTimeCurrentsComponent, RealTimePowerComponent, RealTimeVoltageComponent, EnergyCostComponent, PowerFactorComponent, GroupPeakMonitoringComponent, DeviceCurrentTrendsComponent, DeviceVoltageTrendsComponent, PowerGenerationComponent, PowerDemandComponent, ConnectivityOverviewComponent, DevicePowerDataComponent, EnergyMonitoringComponent, GroupRealTimeCurentComponent,GroupRealTimePowerComponent,GroupRealTimeVoltageComponent,EnergyDataComponent,PowerQualityComponent,DialogMenuComponent,DeviceListComponent,DevicedialogboxComponent],
  exports: [
    DynamicSearchDropdownComponent, RealTimePowerComponent
  ]
})
export class AppModule { }
