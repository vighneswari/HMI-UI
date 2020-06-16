import { RealTimeCurrentsComponent } from '../real-time-currents/real-time-currents.component';
import { RealTimePowerComponent } from '../real-time-power/real-time-power.component';
import { RealTimeVoltageComponent } from '../real-time-voltage/real-time-voltage.component';
import { EnergyCostComponent } from '../energy-cost/energy-cost.component';
import { PowerFactorComponent } from '../power-factor/power-factor.component';
import { GroupPeakMonitoringComponent } from '../group-peak-monitoring/group-peak-monitoring.component';
import { PowerDemandComponent } from '../power-demand/power-demand.component';
import { PowerGenerationComponent } from '../power-generation/power-generation.component';
import { ConnectivityOverviewComponent } from '../connectivity-overview/connectivity-overview.component';
import { DeviceCurrentTrendsComponent } from '../device-current-trends/device-current-trends.component';
import { DeviceVoltageTrendsComponent } from '../device-voltage-trends/device-voltage-trends.component';
import { DevicePowerDataComponent } from '../device-power-data/device-power-data.component';
import { EnergyMonitoringComponent} from '../energy-monitoring/energy-monitoring.component';
import{ GroupRealTimeCurentComponent} from '../group-real-time-curent/group-real-time-curent.component';
import {GroupRealTimePowerComponent} from '../group-real-time-power/group-real-time-power.component';
import {EnergyDataComponent} from '../energy-data/energy-data.component';
import {GroupRealTimeVoltageComponent} from '../group-real-time-voltage/group-real-time-voltage.component';
import {PowerQualityComponent} from '../power-quality/power-quality.component';
export const dashboardCards = {
    RealTimeCurrents: RealTimeCurrentsComponent,
    RealTimePower: RealTimePowerComponent,
    RealTimeVoltage: RealTimeVoltageComponent,
    EnergyCost: EnergyCostComponent,
    PowerFactor: PowerFactorComponent,
    GroupPeakMonitoring: GroupPeakMonitoringComponent,
    DeviceCurrentTrends: DeviceCurrentTrendsComponent,
    DeviceVoltageTrends: DeviceVoltageTrendsComponent,
    PowerGeneration: PowerGenerationComponent,
    PowerDemand: PowerDemandComponent,
    ConnectivityOverview: ConnectivityOverviewComponent,
    DevicePowerData: DevicePowerDataComponent,
    EnergyMonitoring: EnergyMonitoringComponent,
    GroupRealTimeCurrent:GroupRealTimeCurentComponent,
    GroupRealTimePower:GroupRealTimePowerComponent,
    GroupRealTimeVoltage:GroupRealTimeVoltageComponent,
    EnergyData:EnergyDataComponent,
    PowerQuality:PowerQualityComponent
};
