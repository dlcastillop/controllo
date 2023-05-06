const About = () => {
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
              🤝{" "}
              <a
                target="_blank"
                className="link"
                href="https://controllo.dlcastillop.com/how-to-support-controllo">
                How to suport Controllo
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
