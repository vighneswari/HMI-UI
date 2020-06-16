/* Core Imports */
import { Component, OnInit, Input, Renderer2 } from "@angular/core";
// import { BroadcastService, MsalService } from "@azure/msal-angular";
import { Router } from "@angular/router";
import { HostListener } from "@angular/core";

@Component({
  selector: "elcp-navigations",
  templateUrl: "./navigations.component.html",
  styleUrls: ["./navigations.component.scss"],
})
export class NavigationsComponent implements OnInit {
  /*Variables declared here */

  @Input() showMenu: boolean;
  public isAuthenticated = false;

  // Opening Menu indicator
  showSmallMenu: boolean;
  openingMenuLv1: string;
  openingMenuLv2: string;

  // Menu structure
  menu = [
    {
      name: "Dashboard",
      icon: "assets/ABB UI Icon Package/SVG/dashoard.svg",
      url: "dashboard",
    },
    
    {
      name: "Assets",
      icon: "/assets/ABB UI Icon Package/PNG/16x16/abb_server_16.png",
      subMenu: [
       { name: "Devices", url: "deviceList" },
       

      //   { name: "All assets", url: "/assetpage/allAssets" },
      //   { name: "Connectivity", url: "" },
      //   { name: "Site trees", url: "/assetpage/siteTrees" },
      //   { name: "Visuals", url: "" },
      //   { name: "Single line diagrams", url: "" },
      ],
      
    },
    {
      name: "Data Analysis",
      icon: "/assets/ABB UI Icon Package/PNG/16x16/abb_bar-chart_16.png",
      subMenu: [
        { name: 'Data groups', url: 'dataGroups' }]
    },
    {
      name: "Maintenance",
      icon: "/assets/ABB UI Icon Package/PNG/16x16/abb_wrench_16.png",
    },
    {
      name: "Events",
      icon: "/assets/ABB UI Icon Package/PNG/16x16/abb_broadcast_16.png",
    },
    {
      name: "Settings",
      icon:
        "/assets/ABB UI Icon Package/PNG/16x16/abb_advanced-settings_16.png",
      subMenu: [
        { name: "Site", url: "site" },
       // { name: "Documentation", url: "" },
        {
          name: "Users and groups",
          subMenu: [
            { name: "Users", url: "users" },
            // { name: "Groups" },
            // { name: "Activities log" },
            {name :"Password Recovery" , url : "passwordrecovery"}
          ],
        },
        // { name: "Energy", url: "" },
        // { name: "Service and environment", url: "" },
        // { name: "Notification", url: "" },
        // { name: "Advanced", url: "" },
      ],
    },
  ];

  /**
   *Creates an instance of NavigationsComponent.
   * @param {MsalService} authService
   * @param {Router} router
   * @param {Renderer2} ren
   * @memberof NavigationsComponent
   */
  constructor(
    // private authService: MsalService,
    private router: Router,
    private ren: Renderer2
  ) { }

  /**
   *
   *
   * @param {*} event
   * @memberof NavigationsComponent
   * @description Close all opening menu while window resize
   */
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.openingMenuLv1 = null;
    this.openingMenuLv2 = null;
    this.showSmallMenu = false;
  }

  /**
   *
   *
   * @memberof NavigationsComponent
   */
  ngOnInit() {
    //  this.isAuthenticated = this.adalSvc.userInfo.authenticated;
    // this.isAuthenticated = !!this.authService.getAccount();
  }

  /**
   *
   *
   * @memberof NavigationsComponent
   * @description In small screen toggle nav menu
   */
  toggleSmallMenu() {
    this.showSmallMenu = !this.showSmallMenu;
  }
  openSubMenu(openingMenuLv1: string, openingMenuLv2: string) {
    this.openingMenuLv1 = openingMenuLv1;
    this.openingMenuLv2 = openingMenuLv2;
  }
  /**
   *
   *
   * @memberof NavigationsComponent
   * @description To navigate to particular route.
   */
  navigationTo(navigationPath: string) {
    if (navigationPath !== null && navigationPath !== 'dashboard') {
      // Close all menu after navigate to particular route
      this.openingMenuLv1 = null;
      this.openingMenuLv2 = null;
      this.showSmallMenu = false;
      this.router.navigate(['/home', { outlets: { settings: [navigationPath] } }]);
    }
    else{
      this.openingMenuLv1 = null;
      this.openingMenuLv2 = null;
      this.showSmallMenu = false;
      this.router.navigate(['/dashboard']);
    }
  }
}
