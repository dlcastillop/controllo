import { useEffect, useState } from "react"

import { Storage } from "@plasmohq/storage"

import { IControlloData } from "~helpers/interfaces"

const useGetControlloData = (status) => {
  const storage = new Storage()
  const [controlloData, setControlloData] = useState([])

  useEffect(() => {
    async function getControlloData() {
      const temp = (await storage.get("controlloData")) as [IControlloData]

      if (temp !== undefined) {
        for (let i = 0; i < temp.length; i++) {
          if (!temp[i].hasOwnProperty("serviceLink")) {
            temp[i].serviceLink = ""
          }
          if (!temp[i].hasOwnProperty("payDay")) {
            temp[i].payDay = temp[i].date[8] + temp[i].date[9]
          }
        }
        setControlloData(temp)
      }
    }

    getControlloData()
  }, [status])

  return controlloData
}

export default useGetControlloData
