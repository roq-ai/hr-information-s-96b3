const mapping: Record<string, string> = {
  employees: 'employee',
  organizations: 'organization',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
