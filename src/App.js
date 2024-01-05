import logo from './logo.svg';
import './App.css';
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import MainRoutes from './Components/Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      {/* <Register/> */}
      <MainRoutes/>
    </div>
  );
}

export default App;
