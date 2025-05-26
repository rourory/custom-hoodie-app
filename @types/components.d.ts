/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface IComponentClassNameAsProp {
  className?: string;
}

declare interface IListItemLink extends IComponentClassNameAsProp {
  href: string;
  title: string;
  icon?: string;
}


declare interface INavigationComponent extends IComponentClassNameAsProp {
  services: Array<any>;
}
