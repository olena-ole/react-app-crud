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
                {name: 'John C.', salary: 800, increase: true, id: 1, rise: false},
                {name: 'Alex W.', salary: 3000, increase: false, id: 2, rise: true},
                {name: 'Carl T.', salary: 5000, increase: true, id: 3, rise: false}
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    return item.id === id ? {...item, increase: !item.increase} : item
                })
            }    
        });
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    return item.id === id ? {...item, rise: !item.rise} : item
                })
            }    
        });
    }

    render() {
        const { data } = this.state;
        const employeesTotal = data.length;
        const employeesIncrease = data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo 
                    employeesTotal={employeesTotal}
                    employeesIncrease={employeesIncrease}/>

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList 
                    onDelete={this.deleteItem}
                    data={data}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
};

export default App;