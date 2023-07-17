interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Admin', 'Owner', 'Employee', 'HR Manager'],
  tenantName: 'Organization',
  applicationName: 'HR Information System',
  addOns: ['notifications', 'file upload', 'chat', 'file'],
};
