import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/common/navbar/navbar";
import DashboardBody from "./components/pages/dashboard/dashboard-body";
import Modal from "./components/ui/modal/modal";

function App() {
  return (
    <main className="bg-[#2E308D] z-20 max-h-screen mx-auto">
      <NavBar />
      <Outlet />
      {/* <Modal /> */}
    </main>
  );
}

export default App;
