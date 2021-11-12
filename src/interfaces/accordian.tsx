import { ReactElement } from "react"


export type GroupProps =  {
  children: React.ReactNode;
}

export type ListProps =  {
  children: ReactElement[],
  tabIndexes: number[],
  setTabIndexes: (_tabIndexes: number[]) => void
}

export type PanelProps =  {
  children: React.ReactNode;
}

export type PanelsProps =  {
  children: React.ReactNode;
}

export type TabProps =  {
  children: React.ReactNode;
  onclick?: any
}

export interface ITab {
  (props: TabProps): JSX.Element,
  Group: (props: GroupProps) => JSX.Element;
  List: (props: ListProps) => JSX.Element;
  Panel: (props: PanelProps) => JSX.Element;
  Panels: (props: PanelsProps) => JSX.Element;
}

