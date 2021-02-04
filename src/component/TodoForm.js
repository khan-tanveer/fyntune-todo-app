import React,{useState} from 'react'
import './TodoForm.css';
import DatePicker from "react-datepicker";
import { MdCancel, MdDone } from "react-icons/md";
import {FaEdit} from 'react-icons/fa'

function TodoForm() {

    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <div className="header">
            <div className="container">
                <div className="todo-form">
                    <form>
                        <div className="form-group">
                        <h3 className="card-title">Enter Todo Task</h3>
                            <input type="text" className="form-control" placeholder="Enter Task" />
                            <br />
                            <DatePicker className="form-control"
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                isClearable
                                showYearDropdown
                                scrollableMonthYearDropdown
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>


            <div className="buttons">
                <div className="show-buttons">
                    <button type="button" className="btn btn-outline-primary">All</button>
                    <button type="button" className="btn btn-outline-warning">Active</button>
                    <button type="button" className="btn btn-outline-success">Completed</button>
                </div>
            </div>
            <br />

            <h1 style={{ textAlign: 'center' }}>Todo Lists</h1>
            

            <div className="todo-lists">
                <div className="todo-cards">
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    <div className="card" style={{width: '18rem'}}>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <button type="button" className="btn btn-outline-primary"><FaEdit /></button>
                            <button type="button" className="btn btn-outline-danger"><MdCancel /></button>
                    <       button type="button" className="btn btn-outline-success"><MdDone /></button>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default TodoForm;
