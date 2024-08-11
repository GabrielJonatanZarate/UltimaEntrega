const Footer = () => {
    return (
        <div className="container-fluid text-white bg-black py-3">
            <div className="row">
                <div className="col">
                    <p>© 2023 Southbay S.R.L. Todos los derechos reservados.</p>
                </div>
                <div className="col">
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Hot Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Terminos y condiciones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Politica de privacidad y cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer