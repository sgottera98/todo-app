import React from 'react'
import IconButton from '../template/iconButton'
import '../template/custom.css'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <div className="btnsTodoList">
                        <IconButton style='success' icon='check' hide={todo.done}
                            onClick={() => props.handleMarkAsDone(todo)}/>
                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={() => props.handleMarkAsPending(todo)}/>
                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}  />
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
}