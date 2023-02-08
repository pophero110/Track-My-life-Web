import './global.css';
import { useState } from 'react';
import TrackerList from './components/trackerList';
function App() {
	const [formVisible, setFormVisible] = useState(false);

	return (
		<div className='App'>
			<head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'></link>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin=''></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
					rel='stylesheet'></link>
			</head>
			<div
				style={{
					padding: '2rem',
				}}>
				<TrackerList
					formVisible={formVisible}
					setFormVisible={setFormVisible}></TrackerList>
			</div>
		</div>
	);
}

export default App;
