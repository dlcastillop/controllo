import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

const useGetControlloData = (status) => {
  const storage = new Storage()
  const [controlloData, setControlloData] = useState([])

  useEffect(() => {
    async function getControlloData() {
      setControlloData(await storage.get("controlloData"))
    }

    getControlloData()
  }, [status])

  return controlloData
}

export default useGetControlloData
