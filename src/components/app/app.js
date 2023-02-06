import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: true, id: 1},
                {name: 'Alex W.', salary: 3000, increase: false, id: 2},
                {name: 'Carl T.', salary: 5000, increase: true, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (employee) => {
        this.setState(({data}) => ({data: [...data, employee]}));
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList 
                    onDelete={this.deleteItem}
                    data={data}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
};

export default App;