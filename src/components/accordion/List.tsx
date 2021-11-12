import { Children, cloneElement } from "react";
import { ListProps } from "../../interfaces/accordian";

const List = (props: ListProps) => {

  const handleTabClick = (e: Event) => {
    alert("tab clicked");
  }

  return (
    <div className='accordian__tabsList'>
      {
        Children.map(props.children, (tab, index) => {
          props.tabIndexes.push(index);
          return cloneElement(tab, { onclick: handleTabClick, tabIndex: index }, tab.props.children)
        })
      }
    </div>
  )
}

export default List
