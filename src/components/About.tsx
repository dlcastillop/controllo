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
          <p className="text-base mb-3">
            Icon:{" "}
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
          <p className="text-base">
            Author:{" "}
            <a
              target="_blank"
              className="link"
              href="https://twitter.com/dlcastillop">
              Daniel Castillo
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default About
