import Header from "~components/Header"
import Suscription from "~components/Suscription"

import "./styles.css"

const IndexPopup = () => {
  return (
    <div className="w-96 h-96">
      <div className="w-5/6 m-auto">
        <Header />
        <ul className="flex flex-col items-center gap-5">
          <Suscription />
          <Suscription />
        </ul>
      </div>
    </div>
  )
}

export default IndexPopup
