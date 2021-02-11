import Navbar from "./components/Navbar";
import Landing from './components/Landing';
import Blog from './components/Blog';

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      
      {/* For now, we will manually swith between showing the Landing component and Blog component  */}
      {/* To see the Blog, comment out the Landing component and uncomment the Blog component. */}

      <Landing />
      {/* <Blog /> */}



      {/* Footer */}
    </div>
  );
}

export default App;
