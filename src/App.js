
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';



function App() {
  return (
    <div className = "App">
      <Sidebar/>
      <Navbar/>
      <Dashboard/>
    </div>
  );
}

export default App;
