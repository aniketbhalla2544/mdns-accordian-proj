import Group from "./Group";
import List from "./List";
import Panels from "./Panels";
import Panel from "./Panel";
import { ITab } from "../../interfaces/accordian";

const Tab: ITab = (props: any) => {
  return (
    <div onClick={() => { props.handleCurrentTabIndex(props.tabIndex) }} className={(props.activeTab) ? `${props.activeTab} accordian__tab` : "accordian__tab"}>
      {props.children}
    </div>
  )
}

Tab.Group = Group;
Tab.List = List;
Tab.Panel = Panel;
Tab.Panels = Panels;

export default Tab;
