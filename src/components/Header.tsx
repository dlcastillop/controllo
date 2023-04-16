import logoImg from "data-base64:~assets/icon.png"

const Header = () => {
  return (
    <header className="w-full text-primary-content">
      <div className="bg-base-100 mt-3 mb-2 flex gap-2 items-center">
        <img src={logoImg} alt="Logo of Controlllo" className="w-7 h-7" />
        <a
          className="text-xl font-bold"
          href="https://github.com/dlcastillop/controllo"
          target="_blank">
          Controllo
        </a>
      </div>
      <hr className="h-px border-0 bg-primary-content" />
    </header>
  )
}

export default Header
