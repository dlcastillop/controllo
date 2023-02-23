import { useState } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-5 items-center bg-gray-800 w-full h-full">
      <Modal showModal={showModal} hideModal={() => setShowModal(false)} />

      <button
        type="button"
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 mt-5"
        onClick={() => setShowModal(true)}
      >
        New suscription
      </button>

      <ul role="list" className="w-full flex flex-col items-center gap-5">
        {JSON.parse(localStorage.getItem("controlloData")).map((el, index) => {
          return (
            <Suscription
              service={el.service}
              ammount={el.ammount}
              frecuency={el.frecuency}
              date={el.date}
              id={"s" + index}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
