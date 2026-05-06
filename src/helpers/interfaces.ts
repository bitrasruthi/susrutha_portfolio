export interface IRoutes {
  component: React.ComponentType<any>;
  layout: React.ComponentType<any>;
  path?: string;
}

export interface RegisterFormInterface {
  fullName: string;
  email: string;
  phone: string;
  currentStatus: number;
  yearsOfExp: number;
  courseId: number;
}
