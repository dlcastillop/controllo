import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import Header from "~components/Header"
import Modal from "~components/Modal"
import Suscription from "~components/Suscription"

import "./styles.css"

const IndexPopup = () => {
  const storage = new Storage()
  const [modal, setModal] = useState({ title: "", action: "" })
  const [controlloData, setControlloData] = useState([])

  useEffect(() => {
    async function getControlloData() {
      setControlloData(await storage.get("controlloData"))
    }

    getControlloData()
  })

  return (
    <div className="w-96 h-96 max-h-96 overflow-y-auto">
      <div className="w-5/6 flex flex-col gap-5 items-center m-auto">
        <Header />
        <label
          htmlFor="modal"
          className="btn btn-sm btn-primary rounded"
          onClick={() => {
            setModal({
              title: "New service",
              action: "Add"
            })
          }}>
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
                    setModal={(modal: any) => setModal({ ...modal })}
                    key={i.toString()}
                  />
                )
              })}
        </ul>
      </div>
      <Modal title={modal.title} action={modal.action} />
    </div>
  )
}

export default IndexPopup
