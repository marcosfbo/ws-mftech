import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => { //função lambda (anônima)
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-center text-primary py-3">Dashboard de SLA</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">(%) de Todos os chamados</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-center text-primary">Relação de todos os chamados</h2>
                </div>
                <DataTable />
            </div>

            <Footer />
        </>
    );
}

export default Dashboard;