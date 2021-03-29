import React from 'react'
<<<<<<< HEAD
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import IconButton from '../template/iconButton'
import '../template/custom.css'
import {markedAsDone, markedAsPending, remove} from './todoActions'

const TodoList = props => {
=======
import IconButton from '../template/iconButton'
import '../template/custom.css'

export default props => {
>>>>>>> 5c46c9faf485a8648943b4c46c1e03a8098c55a6

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <div className="btnsTodoList">
                        <IconButton style='success' icon='check' hide={todo.done}
<<<<<<< HEAD
                            onClick={() => props.markedAsDone(todo)}/>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={() => props.markedAsPending(todo)}/>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => props.remove(todo)}  />
=======
                            onClick={() => props.handleMarkAsDone(todo)}/>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={() => props.handleMarkAsPending(todo)}/>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}  />
>>>>>>> 5c46c9faf485a8648943b4c46c1e03a8098c55a6
                    </div>
                </td>
            </tr>
        ))
    } 

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
<<<<<<< HEAD
}

const mapStateToProps = (state) => ({
    list: state.todo.list
})

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({markedAsDone, markedAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)
=======
}
>>>>>>> 5c46c9faf485a8648943b4c46c1e03a8098c55a6
