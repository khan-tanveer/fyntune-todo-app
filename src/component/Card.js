import React, { Component } from "react";
import { MdEdit, MdUpdate, MdDelete, MdDone } from 'react-icons/md';


class Card extends Component {
  state = {
    newTaskName: '',
    isEditable: false
  };

  updateTask=(e,id)=>{
    this.setState({newTaskName : e.target.value})
  }

  handleEdit=()=>{
    this.setState({isEditable: !this.state.isEditable})
  }

  submitEdit=(id)=>{
    console.log(this.state)
    this.props.editTask(id,this.state.newTaskName);
    this.setState({  newTaskName: '',
    isEditable: false})
  }

  render() {
   
    const {
      id,
      taskName,
      date,
      deleteTask,
      isComplete,
      taskComplete,
    } = this.props;
    return (

        
        
        

<div className="todo-list">
    <div className="todo-cards">
        <div class="card" id={id} style="width: 18rem;" style={{ backgroundColor: isComplete ? "#ffffff" : "#00ff48" }}>
            <div class="card-body" >
                <h5 class="card-title">Card title</h5>
                {!this.state.isEditable ? (
                    <h5 style={{ textDecoration: !isComplete ? "line-through" : "none" }}>
                        {taskName}
                    </h5>
                    ) : (
                    <input onChange={this.updateTask} value={this.state.taskName}  type="text" />
                    )}
                <h3 className="card-subtitle mb-2">Added on {date} </h3>
                <button type="button" class="btn btn-primary  ml- text-center" >
                    {!this.state.isEditable ?
                        <MdEdit onClick={this.handleEdit} />
                        :
                        <MdUpdate onClick={() => { this.submitEdit(id) }} />
                        }
                </button>
                <button   onClick={() => { deleteTask(id) }} type="button" class="btn btn-primary  ml- text-center">
                    <MdDelete />
                </button>
                <button onClick={() => { taskComplete(id) }} type="button" class="btn btn-primary  ml- text-center">
                    <MdDone  />
                </button>
                
            </div>
        </div>
    </div>
</div>
        
        
        
        
        
    
    )
  }
}
        
        
        
        
        
        
        
        
        

export default Card;





