export interface SidebarEntities {
  id: number;
  name: string;
  icon: string;
  path: string | null;
  link: string | null;
}

export interface SidebarCreateEntities {
  name: string;
  icon: string;
  path: string | null;
  link: string | null;
}
