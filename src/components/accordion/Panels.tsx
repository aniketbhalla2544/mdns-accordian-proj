import { Children } from "react";

const Panels = (props: any) => {
  return (
    <div className='accordion__panel-wrapper'>
      {
         Children.map(props.children, (child, index) => {
          return (index === props.currentTabIndex) ?  child : null
        })
      }
    </div>
  )
}

export default Panels
