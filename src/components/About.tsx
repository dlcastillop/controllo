import { useEffect } from "react"

const About = () => {
  const detectBrowser = () => {
    let ua = navigator.userAgent
    let tem
    let M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || []
    if (/trident/i.test(M[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(ua) || []
      return "IE " + (tem[1] || "")
    }
    if (M[1] === "Chrome") {
      tem = ua.match(/\b(OPR|Edg)\/(\d+)/)
      if (tem != null) return tem.slice(1).join(" ").replace("OPR", "Opera")
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"]
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1])
    return M.join(" ")
  }

  useEffect(() => {
    const userBrowser = detectBrowser() as string
    const $a = document.querySelector("#rate-extension")

    if (userBrowser.includes("Chrome") || userBrowser.includes("Opera")) {
      $a.setAttribute(
        "href",
        "https://chrome.google.com/webstore/detail/controllo/bodddijlpmhpjplaajoigmejoglnjhif"
      )
    } else if (userBrowser.includes("Firefox")) {
      $a.setAttribute(
        "href",
        "https://addons.mozilla.org/es/firefox/addon/controllo/"
      )
    } else if (userBrowser.includes("Edg")) {
      $a.setAttribute(
        "href",
        "https://microsoftedge.microsoft.com/addons/detail/hepodmbgelammobllblgaindjhahghgj"
      )
    } else {
      $a.setAttribute(
        "href",
        "https://chrome.google.com/webstore/detail/controllo/bodddijlpmhpjplaajoigmejoglnjhif"
      )
    }
  })

  return (
    <>
      <input
        type="checkbox"
        id="about-modal"
        className="modal-toggle visible"
      />
      <div className="modal rounded">
        <div className="modal-box bg-neutral text-neutral-content">
          <label
            htmlFor="about-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg mb-5">About</h3>
          <div className="text-base flex flex-col gap-3">
            <p>
              Controllo is free and open source browser extension to track all
              your subscriptions in one place.
            </p>
            <p>
              ⭐{" "}
              <a target="_blank" className="link" href="#" id="rate-extension">
                Rate the extension
              </a>
            </p>
            <p>
              📖{" "}
              <a
                target="_blank"
                className="link"
                href="https://controllo.dlcastillop.com/learn">
                Learn how to use Controllo
              </a>
            </p>
            <p>
              ❤️ Made with love by{" "}
              <a
                target="_blank"
                className="link"
                href="https://twitter.com/dlcastillop">
                Daniel Castillo
              </a>
            </p>
            <p>
              🧩{" "}
              <a
                target="_blank"
                className="link"
                href="https://icons8.com/icon/s4MzQ849Sdas/inspection">
                Inspection
              </a>{" "}
              icon by{" "}
              <a target="_blank" className="link" href="https://icons8.com">
                Icons8
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
