import { useState } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Modal showModal={showModal} hideModal={() => setShowModal(false)} />

      <button
        type="button"
        className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-900"
        onClick={() => setShowModal(true)}
      >
        Add new suscription
      </button>

      <ul role="list" className="divide-y divide-gray-700 w-80">
        <Suscription id={"s"} />
        <Suscription id={"a"} />
      </ul>
    </div>
  );
};

export default App;
