import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleRise, onToggleIncrease}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return <EmployeesListItem 
                onDelete={() => onDelete(id)}
                key={id} 
                onToggleRise={() => onToggleRise(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                {...itemProps} />
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;