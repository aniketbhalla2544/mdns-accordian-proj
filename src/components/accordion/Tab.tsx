import Group from "./Group";
import List from "./List";
import Panels from "./Panels";
import Panel from "./Panel";
import { ITab, TabProps } from "../../interfaces/accordian";


const Tab: ITab = (props: TabProps) => {
  return (
    <div onClick={props.onclick} className='accordian__tab'>
      {props.children}
    </div>
  )
}

Tab.Group = Group;
Tab.List = List;
Tab.Panel = Panel;
Tab.Panels = Panels;

export default Tab;
