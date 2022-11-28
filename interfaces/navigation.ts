export interface IHeader {
  logo: string;
  menu: IHeaderMenuItem[];
}

export interface IHeaderMenuItem {
  section: string;
  title: string;
  _key: string;
}
