import './App.css';
import Menu from './Menu'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewStudent from './components/ViewStudent';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <div>
    <Router>
    <Menu/>
    <Routes>
      <Route path="/" element={<ViewStudent/>} />
      <Route path="/add-student" element={<AddStudent/>} />
      <Route path="/edit-student/:id" element={<EditStudent/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
