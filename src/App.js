
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/Sign In/Sign-In'
import Loarder from './components/Loarder/Loarder'
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Loarder/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        

      </Routes>
    </div>
  );
}

export default App;
