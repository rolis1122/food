import "./App.css";
import Meals from "./components/Meals";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { showModal } = useGlobalContext();
  return (
    <main>
      <Search />
      <Meals />
      {showModal && <Modal />}
    </main>
  );
}

export default App;
