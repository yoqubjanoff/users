import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './view/Home/inde';
import Add from './view/Add';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path='/add' element={<Add/>} />
        </Route>
      </Routes>
      <ToastContainer className="custom-toast-container" />
    </BrowserRouter>
  );
}

export default App;