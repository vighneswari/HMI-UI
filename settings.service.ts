import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http:HttpClient) { }
  getIndustryList(){
    return this.http.get('/Profiles/GetIndustryList');
  }
  getCountryList() {
    return this.http.get('/Profiles/GetCountries');
  }
  updateSiteProfile(payload) {
    return this.http.post('/PlantInfo/CreateSite',payload,{responseType:'text'});
  }
  getRoleList() {
    return this.http.get('/Profiles/GetRole');
  }
  getPlantDetails() {
    return this.http.get('/PlantInfo/GetSiteInfo');
  }
  sendInvitation(userId,userRole,referenceUserID) {
    return this.http.post('/Profiles/NewInvitation',{userId,userRole,referenceUserID},{responseType:'text'})
    .pipe(map(res => {
      return res;
    }))
  }
  showUserList(){
    return this.http.get('/Profiles/GetUserList');
  }
  showDeviceList(){
    return this.http.get('/DeviceData/devices');
    }
    deleteDevice(id){
      return this.http.delete('/DeleteDevice?id='+id);
    }
  deleteUser(id) {
    return this.http.delete('/Profiles/DeleteUser?userId='+id,{responseType:'text'});
  }
  passwordRecovery(userId,userRole,referenceUserID) {
    return this.http.put('/Profiles/RecoveryPassword',{userId,userRole,referenceUserID},{responseType:'text'})
    .pipe(map(res => {
      return res;
    }))
  }
  checkUserId(userID) {
  return this.http.post('/Profiles/CheckUserIDExists?userID=' +userID,{});
}
getSpecificeUserDetails(userId){
  return this.http.get('/Profiles/GetSpecificUser?UserId='+userId,{responseType:'text'});
}
updateUserProfile(payload){
  return this.http.post('/Profiles/SaveUserInformation',payload,{responseType:'text'});
}
updateDevice(){
  return this.http.post('/DeviceData/update',{responseType:'text'});
  }
getLanguages(){
  return this.http.get('/Profiles/GetLanguage');
}
changeRole(payload){
  return this.http.put('/Profiles/ChangeUserRole',payload,{responseType:'text'});
}
checkUserIDForRegistration(userID){
  return this.http.post('/Profiles/CheckRegisterUserID?userID='+userID,{})
}
}

