import { useState, useEffect } from "react";
import Suscription from "./components/Suscription";
import Modal from "./components/Modal";

const App = () => {
  const [allSuscription, setAllSuscriptions] = useState(
    JSON.parse(localStorage.getItem("controlloData"))
  );
  const [bgColors, setBgColors] = useState([]);
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

  useEffect(() => {
    const newDate = new Date();
    const today =
      newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      newDate.getDate();
    let diffInDays;
    let aux = [];

    for (let i = 0; i < allSuscription.length; i++) {
      diffInDays =
        (new Date(allSuscription[i].date) - new Date(today)) /
        (1000 * 60 * 60 * 24);

      if (diffInDays < 7) {
        aux.push("bg-red-500");
      } else if (diffInDays < 30) {
        aux.push("bg-yellow-500");
      } else {
        aux.push("bg-green-500");
      }
    }

    setBgColors(aux);
  }, [allSuscription]);

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
    <div className="flex flex-col gap-5 items-center bg-gray-800 w-96 h-[37rem] overflow-auto">
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
            frecuency: "month",
            date: "",
            id: "",
          });
          setModalTexts({
            heading: "Add suscription service",
            button: "Add",
          });
        }}
      />

      <h1 className="mt-5 text-xl font-medium text-white">🎮 Controllo</h1>
      <button
        type="button"
        className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700"
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
                  bgColor={bgColors[index]}
                />
              );
            })
          : undefined}
      </ul>

      <footer className="mb-5">
        <span className="text-white text-sm">
          by{" "}
          <a
            href="https://dlcastillop.com/"
            className="text-blue-600 underline hover:no-underline"
            target="_blank"
          >
            Daniel Castillo
          </a>
        </span>
      </footer>
    </div>
  );
};

export default App;
