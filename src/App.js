
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/Sign In/Sign-In'
import Loarder from './components/Loarder/Loarder'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Loarder/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>} />

      </Routes>
    </div>
  );
}

export default App;
