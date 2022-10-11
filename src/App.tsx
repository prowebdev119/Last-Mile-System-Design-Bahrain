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

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="services" element={<Support />} />
				<Route path="clients" element={<OurClients />} />
				<Route path="contact-us" element={<ContactUs />} />
				<Route path="solutions" element={<Solutions />} />

				<Route path="radio-and-telecommunication" element={<Radio />} />
				<Route path="switching-and-data-center" element={<DataCenter />} />
				<Route path="network-infrastructure-cabling" element={<Network />} />
				<Route path="centralized-and-ip-tv" element={<Centralized />} />
				<Route path="security-and-surveillance" element={<Security />} />
				<Route path="audio-visual-and-sound-systems" element={<Audio />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
