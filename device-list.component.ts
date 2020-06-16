import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';
import { ITableDeviceList } from '../shared/models/tableDropDown.model';
import { identifierModuleUrl } from '@angular/compiler';
import { SettingsService } from "../services/settings.service";
import {DevicedialogboxComponent} from '../Devicedialogbox/devicedialogbox.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Validators, FormControl } from '@angular/forms';

export interface DialogData {
  name: string;
  deviceTypeName :string;
  type:string;
}
@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  name: string;
  deviceTypeName:string;
  type:string;
  Alldevices: any[];
  AssetList: any[];
  Devicedtaarray=[];
  updatedarray: any[];
  route: any;
  editmode: boolean = false;
  editindex = null;
  dialogRef: any;
  index: any;
  modalRef: any;
  modalService: any;
  user: any;
  constructor(private deviceService: DeviceService,private settingsService: SettingsService,public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DevicedialogboxComponent, {
      width: '250px',
      height:'250px',
      data: {name: this.name,deviceTypeName:this.deviceTypeName,type:this.type}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deviceTypeName = result;
    });
  }
  ConstructTable(id: string, serialNumber:string, name: string,deviceTypeName:string,slaveId:string,type:string) {
    const tableData = <ITableDeviceList>{
      id: id,
      serialNumber:serialNumber ,
      deviceTypeName:deviceTypeName ,
      name: name,
      slaveId: slaveId,
      type:type ,
      
    };
    return (tableData);
  }
 
  ngOnInit() {
   
    this.showDeviceList();
    //this.updateDevice();
  }
  
  showDeviceList() {
    this.deviceService.searchPopulate().subscribe((data: any[]) => {
      this.Devicedtaarray=data;
       const assets = data;
      const AssetsListArray = [];
      assets.forEach(asset => {
      const eachAsset = this.ConstructTable(asset.id, asset.name, asset.serialNumber, asset.deviceTypeName,asset.slaveId,asset.type);
      AssetsListArray.push(eachAsset);
      });
       this.AssetList = AssetsListArray;
       console.log("device list is here viggu" + this.AssetList);

    });
    }
//   updateDevice()
//     {
//       this.settingsService.updateDevice().subscribe((Response: any[])=> {
//         this.Devicedtaarray=Response;
// });
// }

}