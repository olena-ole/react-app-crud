import './app-filter.css';

const AppFilter = (props) => {
    const {onResetFilters, onFilterRise, onFilterSalary, isRiseFilter, isSalaryFilter} = props;
    return (
        <div className="btn-group">
            <button 
            className="btn btn-light"
            type="button"
            onClick={onResetFilters}>
                All Employees
            </button>
            <button 
            className={`btn ${isRiseFilter ? 'btn-outline-light' : 'btn-outline-dark'}`}
            type="button"
            onClick={onFilterRise}>
                Getting Promotion
            </button>
            <button 
            className={`btn ${isSalaryFilter ? 'btn-outline-light' : 'btn-outline-dark'}`}
            type="button"
            onClick={onFilterSalary}>
                Salary Over $1000
            </button>
        </div>
    );
};

export default AppFilter;