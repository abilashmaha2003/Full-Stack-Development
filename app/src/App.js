// import React from 'react'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Layout from './Layout'
// import Home from './Home'
// import Contact from './Contact'
// import About from './About'
// export default function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//         <Route index element={<Home/>}/>
//         <Route path="about" element={<About/>}/>
//         <Route path="contact" element={<Contact/>}/>
        
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }
import React from 'react'
import Counter from './Hooks/UseState/Counter'
import Effect from './Hooks/Effect'
//import Reducer from './Hooks/Reducer'
import Callback from './Hooks/Callback'
export default function App() {
  return (
    <div>
      <Counter/>
      <Effect/>
      <Callback/>
    </div>
  )
}
