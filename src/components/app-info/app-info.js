import './app-info.css';

const AppInfo = ({ employeesTotal, employeesIncrease }) => {
    return (
        <div className="app-info">
            <h1>PMC Company Employees Data</h1>
            <h2>Employees Total: {employeesTotal}</h2>
            <h2>Receive Bonuses: {employeesIncrease}</h2>
        </div>
    );
};

export default AppInfo;