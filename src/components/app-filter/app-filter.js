import './app-filter.css';

const AppFilter = (props) => {
    const {onResetFilters, onFilterRise, onFilterSalary, isAllFilter, isRiseFilter, isSalaryFilter} = props;
    return (
        <div className="btn-group">
            <button 
            className={`btn ${isAllFilter ? 'btn-light' : 'btn-outline-light'}`}
            type="button"
            onClick={onResetFilters}>
                All Employees
            </button>
            <button 
            className={`btn ${isRiseFilter ? 'btn-light' : 'btn-outline-light'}`}
            type="button"
            onClick={onFilterRise}>
                Getting Promotion
            </button>
            <button 
            className={`btn ${isSalaryFilter ? 'btn-light' : 'btn-outline-light'}`}
            type="button"
            onClick={onFilterSalary}>
                Salary Over $1000
            </button>
        </div>
    );
};

export default AppFilter;