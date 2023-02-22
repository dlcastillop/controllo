import { useState } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-5 items-center bg-gray-700 w-full h-full">
      <Modal showModal={showModal} hideModal={() => setShowModal(false)} />

      <button
        type="button"
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 mt-5"
        onClick={() => setShowModal(true)}
      >
        New suscription
      </button>

      <ul role="list" className="divide-y divide-gray-700 w-80">
        <Suscription id={"s"} />
        <Suscription id={"a"} />
      </ul>
    </div>
  );
};

export default App;
