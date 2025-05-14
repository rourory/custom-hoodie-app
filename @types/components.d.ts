declare interface IComponentClassNameAsProp {
  className?: string;
}

declare interface IListItemLink extends IComponentClassNameAsProp {
  href: string;
  title: string;
  icon?: string;
}

declare interface ICustomizer extends IComponentClassNameAsProp {
  position?: Vector3;
  fov?: number;
}
