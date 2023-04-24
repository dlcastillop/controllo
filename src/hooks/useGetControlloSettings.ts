import { useState } from "react"

import { Storage } from "@plasmohq/storage"

const useGetControlloSettings = () => {
  const storage = new Storage()
  const [controlloSettings, setControlloSettings] = useState({
    showPaymentDate: false
  })

  async function getControlloData() {
    let aux = {
      showPaymentDate: true
    }
    aux = await storage.get("controlloSettings")

    if (aux !== undefined) {
      setControlloSettings(aux)
    }
  }

  getControlloData()

  return controlloSettings
}

export default useGetControlloSettings
