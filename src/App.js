import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage.jsx';
import LoginPage from './pages/loginpage/LoginPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/auth' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
