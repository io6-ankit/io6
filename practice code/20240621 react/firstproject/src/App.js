import logo from "./logo.svg";
import "./App.css";

// Header component import
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import VideoComponent from "./component/videoComponent";
import SubHeader from "./component/subHeader";
function App() {
  return (
    <div className="App">
      {/* Header component call */}
      <Header />
      <div className="mainClass">
        <Sidebar />
        <div>
          <SubHeader /> <VideoComponent />
        </div>
      </div>
      //{" "}
    </div>
  );
}

export default App;
