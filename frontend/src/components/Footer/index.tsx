const Footer = () => { //função lambda (anônima)
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/marcosfbo" target="_blank" rel="noreferrer">Marcos Fernando</a></p>
                <p className="text-light"><small><strong>Utiliando Spring React</strong><br />
      Evento de TESTE promovido por MF-Tech: <a href="https://instagram.com/marcosfbo" target="_blank" rel="noreferrer">@marcosfbo</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;