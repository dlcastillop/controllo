import { useEffect, useState } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [allSuscription, setAllSuscriptions] = useState(
    JSON.parse(localStorage.getItem("controlloData"))
  );
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

  const del = (id) => {
    let aux = JSON.parse(localStorage.getItem("controlloData"));
    let newData = [];

    for (let i = 0; i < aux.length; i++) {
      if (i !== parseInt(id[1])) {
        newData.push(aux[i]);
      }
    }

    localStorage.setItem("controlloData", JSON.stringify(newData));
    setAllSuscriptions(JSON.parse(localStorage.getItem("controlloData")));
  };

  return (
    <div className="flex flex-col gap-5 items-center bg-gray-800 w-full h-full">
      <Modal
        currentData={data}
        modalTexts={modalTexts}
        showModal={showModal}
        hideModal={() => {
          setAllSuscriptions(JSON.parse(localStorage.getItem("controlloData")));
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
        {allSuscription !== null
          ? allSuscription.map((el, index) => {
              return (
                <Suscription
                  service={el.service}
                  ammount={el.ammount}
                  frecuency={el.frecuency}
                  date={el.date}
                  edit={(value) => edit(value)}
                  del={(id) => del(id)}
                  id={"s" + index}
                  key={index}
                />
              );
            })
          : undefined}
      </ul>
    </div>
  );
};

export default App;
