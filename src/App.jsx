import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Dashboard from "./components/Dashboard"
import ProjectView from './components/ProjectView'
import Certifications from './components/Certifications'

const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path="/project/:id" element={<ProjectView/>}/>
    <Route path="/certifications" element={<Certifications/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
