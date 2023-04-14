import Header from "~components/Header"
import Modal from "~components/Modal"
import Suscription from "~components/Suscription"

import "./styles.css"

const IndexPopup = () => {
  return (
    <div className="w-96 h-96 max-h-96 overflow-y-auto">
      <div className="w-5/6 flex flex-col gap-5 items-center m-auto">
        <Header />
        <label htmlFor="modal" className="btn btn-sm btn-primary rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white">
            <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
          </svg>
        </label>
        <ul className="flex flex-col items-center gap-5 w-full">
          <Suscription />
        </ul>
      </div>
      <Modal />
    </div>
  )
}

export default IndexPopup
