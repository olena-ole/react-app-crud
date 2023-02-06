import { Component } from 'react';

import nextId from "react-id-generator";

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onAddEmployee = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return;
        const newEmployee = {
            name: this.state.name, 
            salary: this.state.salary, 
            increase: false, 
            id: nextId()
        };
        this.props.onAdd(newEmployee);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add New Employee</h3>
                <form
                    onSubmit={(e) => this.onAddEmployee(e)}
                    className="add-form d-flex">
                    <input type="text"
                        required
                        className="form-control new-post-label"
                        placeholder="Employee's Name"
                        name="name" 
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        required
                        className="form-control new-post-label"
                        placeholder="Salary, USD" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        );
    }
};

export default EmployeesAddForm;