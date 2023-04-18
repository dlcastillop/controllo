import { useState } from "react"

import About from "~components/About"
import Header from "~components/Header"
import Modal from "~components/Modal"
import Suscription from "~components/Suscription"
import useGetControlloData from "~hooks/useGetControlloData"
import useSetControlloData from "~hooks/useSetControlloData"

import "./styles.css"

const IndexPopup = () => {
  const [modal, setModal] = useState({
    title: "",
    action: "",
    id: -1,
    random: Math.random()
  })
  const [update, setUpdate] = useState(false)
  const controlloData = useGetControlloData(update)

  const del = (id: Number) => {
    let aux = []

    for (let i = 0; i < controlloData.length; i++) {
      if (i !== id) {
        aux.push(controlloData[i])
      }
    }

    useSetControlloData(aux)
    setUpdate(!update)
  }

  return (
    <div className="w-96 h-96 max-h-96 overflow-y-auto">
      <div className="w-5/6 flex flex-col gap-5 items-center m-auto">
        <Header />
        <label
          htmlFor="modal"
          className="btn btn-sm btn-primary rounded"
          onClick={() =>
            setModal({
              title: "New service",
              action: "Add",
              id: -1,
              random: Math.random()
            })
          }>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </label>
        <ul className="flex flex-col items-center gap-5 w-full">
          {typeof controlloData === "undefined"
            ? undefined
            : controlloData.map((el: Object, i: Number) => {
                return (
                  <Suscription
                    data={el}
                    id={i}
                    del={(id: Number) => del(id)}
                    edit={(id: number) =>
                      setModal({
                        title: "Edit service",
                        action: "Save",
                        id,
                        random: Math.random()
                      })
                    }
                    key={i.toString()}
                  />
                )
              })}
        </ul>
      </div>
      <Modal
        title={modal.title}
        action={modal.action}
        id={modal.id}
        updateSuscription={() => setUpdate(!update)}
        random={modal.random}
      />
      <About />
    </div>
  )
}

export default IndexPopup
