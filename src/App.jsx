import { useEffect, useState } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    service: "",
    ammount: "",
    frecuency: "",
    date: "",
    id: "",
  });
  const [modalTexts, setModalTexts] = useState({
    heading: "New suscription service",
    button: "Add",
  });

  const edit = (value) => {
    setShowModal(true);
    setData({ ...value });
    setModalTexts({
      heading: "Edit suscription service",
      button: "Modify",
    });
  };

  return (
    <div className="flex flex-col gap-5 items-center bg-gray-800 w-full h-full">
      <Modal
        currentData={data}
        modalTexts={modalTexts}
        showModal={showModal}
        hideModal={() => {
          setShowModal(false);
          setData({
            service: "",
            ammount: "",
            frecuency: "",
            date: "",
            id: "",
          });
          setModalTexts({
            heading: "Add suscription service",
            button: "Add",
          });
        }}
      />

      <button
        type="button"
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 mt-5"
        onClick={() => setShowModal(true)}
      >
        New suscription
      </button>

      <ul className="w-full flex flex-col items-center gap-5">
        {JSON.parse(localStorage.getItem("controlloData")) !== null
          ? JSON.parse(localStorage.getItem("controlloData")).map(
              (el, index) => {
                return (
                  <Suscription
                    service={el.service}
                    ammount={el.ammount}
                    frecuency={el.frecuency}
                    date={el.date}
                    edit={(value) => edit(value)}
                    id={"s" + index}
                    key={index}
                  />
                );
              }
            )
          : undefined}
      </ul>
    </div>
  );
};

export default App;
