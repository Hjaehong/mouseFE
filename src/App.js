// src/App.js

import Header from './components/Header';
import HomePage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;