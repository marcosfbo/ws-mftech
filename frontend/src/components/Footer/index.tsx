const Footer = () => { //função lambda (anônima)
    return (
        <footer className="footer mt-auto py-3 bg-dark">
            <div className="container">
                <p className="text-light">App desenvolvido por <a href="https://github.com/marcosfbo" target="_blank" rel="noreferrer">Marcos Fernando</a></p>
                <p className="text-light"><small><strong>Semana Spring React</strong><br />
      Evento promovido pela escola DevSuperior: <a href="https://instagram.com/marcosfbo.ig" target="_blank" rel="noreferrer">@marcosfbo.ig</a></small></p>
            </div>
        </footer>
    );
}

export default Footer;