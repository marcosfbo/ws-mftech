const DataTable = () => { //função lambda (anônima)
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Técnico</th>
                        <th>Total de chamados</th>
                        <th>Chamados fechados</th>
                        <th>Valor R$</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Bruce Wayne</td>
                        <td>22</td>
                        <td>22</td>
                        <td>300717.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;