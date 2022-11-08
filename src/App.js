
import './App.css';
import Tasklist from "./components/tasklist/tasklistAPI";
import Header from "./components/header/header";
import Leftcolumn from "./components/leftcolumn/leftcolumnAPI";
import {Route, Routes} from "react-router-dom";
import PageAuth from "./components/pageauth/pageauth";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<><Leftcolumn /><Tasklist /></>}/>
        <Route path='/admin' element={<div>admin</div>}/>
        <Route path='/reports' element={<PageAuth />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
