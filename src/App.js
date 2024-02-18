import Navbar from './component/navbar/Navbar'
import Body from './component/body/Body';
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import './App.css';

function App() {
  return (

    <div className='App'>
      <Provider store={appStore}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </div>

  );
}



export default App;
