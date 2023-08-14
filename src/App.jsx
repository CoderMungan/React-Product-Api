
import './App.css';
import ApiFetch from './Components/ApiFetch';
import Cards from './Components/Cards';


import DetailPage from './Components/DetailPage';



import { Routes , Route} from 'react-router-dom'


function App() {
  return (


    <>
      

      <Routes>


        <Route path='/' element={<ApiFetch></ApiFetch>}></Route>
        <Route path='/urunler/:id' element={<DetailPage></DetailPage>}></Route>
        <Route path='/urunler/:id' element={<Cards></Cards>}></Route>
      </Routes>


    </>
  );
}

export default App;
