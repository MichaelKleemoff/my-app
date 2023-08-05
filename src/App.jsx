import Header from './Header';
import Footer from './Footer';

import './App.css';

const photoOfTheDay = 'https://loremflickr.com/320/240';
const currentDate = new Date();

function App() {
	return (
		<div className='App'>
			<Header />
			<h2>React is cool</h2>
			<img src={photoOfTheDay} alt={currentDate} />
			<Footer />
		</div>
	);
}

export default App;
