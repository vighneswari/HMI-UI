export interface ITableDropDownModel {
    // field
    id: number;
    text: string;
    additional: ITableAdditionalData;
  }

  export interface ITableDropDownModelGroup {
    // field
    id: number;
    text: string;
  }
  export interface ITableAdditionalData {
      // field
    image: string;
    subtitle: string;
    serialNumber:string
  }
//  export interface ITableAdditionalDataSample {
//       // field
//     image: string;
//     subtitle: string;
//     serialNumber:string
//   }

  export interface ITableRealTimePower {
    id:string;
    name:string;
    p:string;
    q:string;
    s:string;
    isDevice:boolean
  }
  export interface ITableRealTimeCurrents {
    id:string;
    name:string;
    iL1:string;
    iL2:string;
    iL3:string
  }
  export interface ITableRealTimeVoltage {
    id:string;
    name:string;
    u12:string;
    u23:string;
    u31:string
  }
  export interface ITableGroupRealTimeVoltage {
    id:string;
    name:string;
    u1:string;
    u2:string;
    u3:string
  }
  export interface ITableEnergyCost {
    id:string;
    name:string,
    energy:string,
    energyPrice:string,
    isDevice:boolean
  }
  export interface ITableEnergyData {
    id:string;
    name:string,
    pEnTot:string,
    qEnTot:string,
    sEnTot:string,
    isDevice:boolean
  }
  export interface ITablePowerQuality {
    id:string;
    name:string;
    l1THD:string,
    l2THD:string,
    l3THD:string;
  }
  export interface ITableDataGroups {
    id: string,
    name: string,
    description: string,
    isEnergyAudit: string,
    items: string,
    customGroupType:string
  }

  export interface ITableDialogMenu {
    id:number;
    name:string;
  }

  export interface ITableDeviceList {
    id: string,
    serialNumber:string ,
    name: string,
    deviceTypeName:string ,
    slaveId: string,
    type:string
  }