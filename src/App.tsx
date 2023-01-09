import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import OurClients from './Pages/OurClients';
import Solutions from './Pages/Solutions';
import Audio from './Pages/Solutions/Audio';
import Centralized from './Pages/Solutions/Centralized';
import DataCenter from './Pages/Solutions/DataCenter';
import Network from './Pages/Solutions/Network';
import Radio from './Pages/Solutions/Radio';
import Security from './Pages/Solutions/Security';
import Support from './Pages/Support';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes>
				
			</Routes>
		</BrowserRouter>
	);
}

export default App;
