import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Select2OptionData } from 'ng-select2';


@Injectable()
export class DeviceService {
 


  constructor(private http: HttpClient) {

  }

  getRealData() {
    return this.http.get('/voltagedata/voltages/p2p');
  }

  getNeutralData() {
    return this.http.get('/voltagedata/voltages/p2n');
  }

  searchPopulate() {
    return this.http.get('/devicedata/devices');
  }

  p2pSearch(deviceId) {
    return this.http.get('/voltagedata/voltages/p2p/' + deviceId)
  }

  p2nSearch(deviceId) {
    return this.http.get('/voltagedata/voltages/p2n/' + deviceId);
  }

  deviceStatus() {
    return this.http.get('/devicedata/status')
  }

  devicePower() {
    return this.http.get('/powerdata/powers');
  }

  deviceCurrents() {
    return this.http.get('/currentdata/currents');
  }

  powerSearch(deviceId) {
    return this.http.get('/powerdata/powers/' + deviceId);
  }

  currentSearch(deviceId) {
    return this.http.get('/currentdata/currents/' + deviceId)
  }

  updateDeviceNames(id, name) {
    return this.http.post('/devicedata/update', { id, name })
  }

  getEnergyData(period) {
    return this.http.get('/energydata/' + period,)
  }
  getEnrgyDataDevices(timePeriod,groupId) {
    return this.http.get('/energydata/' + timePeriod + '/' + groupId)
  }

  getPowerData(period, deviceId) {
    return this.http.get('/powerdata/' + period + '/' + deviceId, { responseType: 'text' })
  }

  getGroupPeakPowerData(period, deviceId):Observable<any> {
    return this.http.get('/powerdata/groupPeakPower/' + period + '/' + deviceId, { responseType: 'text' })
    .pipe(map((res) => {
      return res;
    }));
  }

  getCurrentData(period, deviceId) {
    return this.http.get('/currentdata/' + period + '/' + deviceId, { responseType: 'text' })
  }

  getVoltageData(period, deviceId) {
    return this.http.get('/voltagedata/p2p/' + period + '/' + deviceId, { responseType: 'text' })
  }

  getPowerFactorValue(period, deviceId) {
    return this.http.get('/powerdata/powerfactor/' + period + '/' + deviceId, { responseType: 'text' })
  }

  getPowerDemand() {
    return this.http.get('/powerdata/powerDemand');
  }

  getPowerGeneration() {
    return this.http.get('/powerdata/powerGeneration');
  }
  getEnergyCost(period) {
    return this.http.get('/energydata/energycost/' + period);
  }

  getEnergyMonitoringData(timeperiod, groupId) {
    return this.http.get('/energydata/monitor/' + timeperiod + '/' + groupId, { responseType: 'text' })
  }
  getEnergyMonitoringDataForCompare(timeperiod,groupId,compareGroupId) {
    return this.http.get('/EnergyData/comparegroupenergy/' + timeperiod + '/' + groupId + '/' + compareGroupId,{ responseType: 'text' }) 
  }
  getEnergyDataWithPreviousPeriod(timePeriod,groupId) {
    return this.http.get('/EnergyData/compareperiod/' + timePeriod + '/' + groupId)
  }
  getGroups() {
    return this.http.get('/GroupData/groupItems/groups');
  }
  getGroupCurrent(groupId) {
    return this.http.get('/currentdata/groupcurrents/' + groupId)
  }
  getGroupRealTimePower() {
    return this.http.get('/powerdata/grouppowers')
  }
  getPowerForSelectedGroup(groupId) {
    return this.http.get('/powerdata/grouppowers/' + groupId)
  }
  getGroupVoltages(voltageType, groupId) {
    return this.http.get('/voltagedata/groupvoltages/' + voltageType + '/' + groupId)
  }
  getEnrgyCostDevices(timePeriod: any, groupId: any) {
    return this.http.get('/energydata/energycost/' + timePeriod + '/' + groupId)
  }
  realTimeCurrentSearch(deviceId){
    return this.http.get('/currentdata/currents/' + deviceId)
  }
  realTimePowerSearch(deviceId: any) {
    return this.http.get('/powerdata/powers/' + deviceId);
  }
  realTimeVoltageSearch(deviceId:any) {
    return this.http.get('/voltagedata/voltages/p2p/' + deviceId);
  }
  powerQualityData(deviceId:any,parameter:any) {
   return this.http.get('/PowerQualityData/' + deviceId + '/' + parameter);
   //return this.http.get('/PowerQualityData/13/THD');
  }
}