import { Storage } from "@plasmohq/storage"

const useSetControlloSettings = (updatedControlloSettings) => {
  const storage = new Storage()

  async function setControlloData() {
    await storage.set("controlloSettings", updatedControlloSettings)
  }

  setControlloData()
}

export default useSetControlloSettings
