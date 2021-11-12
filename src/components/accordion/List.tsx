import { Children, cloneElement } from "react";
// import { ListProps } from "../../interfaces/accordian";

const List = (props: any) => {
  return (
    <div className='accordian__tabsList'>
      {
        Children.map(props.children, (tab, index) => {
          return (index === props?.currentTabIndex)
            ? cloneElement(tab, { activeTab: '__active-tab', tabIndex: index, handleCurrentTabIndex: props?.handleCurrentTabIndex }, tab.props.children)
            : cloneElement(tab, { tabIndex: index, handleCurrentTabIndex: props?.handleCurrentTabIndex }, tab.props.children)
        })
      } 
    </div>
  )
}

export default List;
