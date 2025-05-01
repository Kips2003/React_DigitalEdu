import './css/App.css';
import './css/reset.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NavBar from './components/NavBar';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

function App() {
  return (
    <div className='App'>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/details/:itemId' element={<Details />}></Route>
          <Route path='*' element={NotFound}></Route>
        </Routes>
    </div>
  );
}

export default App;
