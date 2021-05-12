import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChance: Function;
}

const Pagination = ({ page, onPageChance }: Props) => {

    return (
        <div>
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page.first ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChance(page.number - 1)}>Anterior</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => onPageChance(page.number + 1)}>Próxima</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
//<div className="row d-flex justify-content-center">
export default Pagination;