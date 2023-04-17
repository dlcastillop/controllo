import logoImg from "data-base64:~assets/icon.png"

const Header = () => {
  return (
    <header className="w-full text-primary-content">
      <div className="bg-base-100 mt-3 mb-2 flex items-center justify-between">
        <a
          className="text-xl font-bold flex gap-1.5 items-center"
          href="https://github.com/dlcastillop/controllo"
          target="_blank">
          <img src={logoImg} alt="Logo of Controllo" className="w-7 h-7" />
          <span>Controllo</span>
        </a>
        <div className="hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-question-circle-fill"
            viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
          </svg>
        </div>
      </div>
      <hr className="h-px border-0 bg-primary-content" />
    </header>
  )
}

export default Header
