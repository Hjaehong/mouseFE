// src/App.js

import Header from './component/Header';
import HomePage from './component/MainPage';
import Footer from './component/Footer';

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