import './app-filter.css';

const AppFilter = ({onResetFilters, onFilterRise, onFilterSalary}) => {
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button"
            onClick={onResetFilters}>
                All Employees
            </button>
            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={onFilterRise}>
                Getting Promotion
            </button>
            <button 
            className="btn btn-outline-light"
            type="button"
            onClick={onFilterSalary}>
                Salary Over $1000
            </button>
        </div>
    );
};

export default AppFilter;