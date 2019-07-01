import React, { Component } from 'react'

// export default class A extends Component {
//   render() {
//     return (
//       <div className='parent-container'>
//         <header className='tips'>
//           导航
//         </header>
//         <div>
//             这里是内容
//         </div>
//       </div>
//     )
//   }
// }

function A(WrappedComponent){
  return class extends React.Component {
    render() {
      return (
        <div className='parent-container'>
          <header className='tips'>
            导航
          </header>
          <div>
            <WrappedComponent/>
          </div>
        </div>
      )
    }
  }
}

export default A;