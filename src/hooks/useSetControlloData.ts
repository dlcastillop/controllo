import { Storage } from "@plasmohq/storage"

const useSetControlloData = (updatedControlloData) => {
  const storage = new Storage()

  async function setControlloData() {
    await storage.set("controlloData", updatedControlloData)
  }

  setControlloData()
}

export default useSetControlloData
