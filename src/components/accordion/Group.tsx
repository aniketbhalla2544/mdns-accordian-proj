import { Children, cloneElement, useState } from "react";
import { GroupProps } from "../../interfaces/accordian";

const Group = (props: GroupProps) => {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleCurrentTabIndex = (currentTabIndex: number): void => {
    setCurrentTabIndex(currentTabIndex);
  }

  return (
    <div className='accordian__wrapper container'>
      {`current Tab: ${currentTabIndex + 1}`}
      {
          Children.map(props.children, (child: any, index: number) => {
            return (index === 0)
              // tab indexes data passed to tab.list child only
              ? cloneElement(child, { currentTabIndex: currentTabIndex, handleCurrentTabIndex: handleCurrentTabIndex }, child.props.children)
              : cloneElement(child, { currentTabIndex: currentTabIndex }, child.props.children)
          })
      }
    </div>
  )
}

export default Group;
