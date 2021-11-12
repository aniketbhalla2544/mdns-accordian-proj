import { Children, cloneElement, useEffect, useState } from "react";
import { GroupProps } from "../../interfaces/accordian";

const Group = (props: GroupProps) => {

  const [tabIndexes, setTabIndexes]: [number[], any] = useState([]);

  const handleTabIndexesChange = (_tabIndexes: number[]) => {
    setTabIndexes(_tabIndexes);
  }

  useEffect(() => {
    Children.forEach(props.children, (child: any, index) => {
      if (index === 0) {
        cloneElement(child, { tabIndexes: tabIndexes, setTabIndexes: handleTabIndexesChange }, child.props.children)
      }      
    });
  }, [props.children]);

  return (
    <div className='accordian__wrapper container'>
      {props.children}
    </div>
  )
}

export default Group;
