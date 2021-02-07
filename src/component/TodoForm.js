import React,{Component} from 'react';
import {connect} from 'react-redux'
import { addTask } from '../store/action' 
import './TodoForm.css';

class AddTask extends Component {
    state = { taskName: '' }
    
    handleChange = (e) =>{
        this.setState({taskName : e.target.value})
    }

    handleAddTask = () =>{
        const regexCheck= /^[^!-\\/:-@\\[-`{-~]+$/;
        if(this.state.taskName.length > 0 && regexCheck.test(this.state.taskName)){
        this.props.addTask(this.state.taskName)
        this.setState({taskName:""})}
    }

    render() { 
        
        return ( 
            <div className="todo-form">
                <div className="form-group">
                    <h1 className="card-title">ADD TODO</h1><br />
                    <input type="text" className="from-control"  value={this.state.taskName} placeholder="Enter Task" onChange={this.handleChange}/><br /><br />
                    <button className="btn btn-primary" onClick={this.handleAddTask}>Add</button>
                </div>
            </div>
         );
    }
}
 
const mapDispatchToProps = (dispatch) =>{
return {
    addTask : (taskName)=>dispatch(addTask(taskName))
}
}

export default connect(null, mapDispatchToProps)(AddTask);