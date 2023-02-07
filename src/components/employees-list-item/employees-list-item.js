import './employees-list-item.css';

const EmployeesListItem = (props) => {
    const { name, salary, increase, rise, onDelete, onToggleIncrease, onToggleRise } = props;

    const classes = `list-group-item d-flex justify-content-between 
                    ${rise && 'like'} 
                    ${increase && 'increase'}`;
    
    function handleEnterPress(e) {
        if (e.keyCode == 13) {
            onToggleRise();
        }
    }

    return (
        <li className={classes}>
            <span 
                tabIndex={0}
                className="list-group-item-label"
                onClick={onToggleRise}
                onKeyDown={handleEnterPress}>
                    {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );  
};

export default EmployeesListItem;