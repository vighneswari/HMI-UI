import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../device-list/device-list.component';
import { SettingsService } from "../services/settings.service";
@Component({
  selector: 'app-devicedialogbox',
  templateUrl: './devicedialogbox.component.html',
  styleUrls: ['./devicedialogbox.component.scss']
})
export class DevicedialogboxComponent implements OnInit {
  animal: string;settingService: any;
;
  name: string;
  deviceTypeName:string;
  Updatedtaarray=[];
  type:string;
  
    constructor(
    public dialogRef: MatDialogRef<DevicedialogboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private settingsService: SettingsService) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {    
//     this.updateDevice();

    }
//     updateDevice() {
//       this.settingService.updateDevice().subscribe((resp: any[]) => {
//         this.Updatedtaarray=resp;)}
//       }

                                                   }
