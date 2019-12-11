export const adminLteConf = {
  skin: "green",
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: "green",
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    // { label: "MAIN NAVIGATION", separator: true },
    {
      label: "Home",
      route: "/",
      iconClasses: "fa home"
      // pullRights: [{ text: "New", classes: "label pull-right bg-green" }]
    },
    {
      label: "Admin",
      route: "/admin",
      iconClasses: "fa home"
      // pullRights: [{ text: "New", classes: "label pull-right bg-green" }]
    },
    { label: "Add Device", route: "device", iconClasses: "fa fa-tasks" },
    { label: "Add Locations", route: "location", iconClasses: "fa fa-tasks" }
  ]
};
