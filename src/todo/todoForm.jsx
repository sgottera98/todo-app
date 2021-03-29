<<<<<<< HEAD
import React , {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import {add, changeDescription, search, clear} from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler = (e) => {
        const {add, clear, search, description} = this.props
        if (e.key === "Enter") {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === "Escape") {
            clear()
        }
    }

    render() {
        const {add, search, description} = this.props
        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" 
                        placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onKeyUp={this.keyHandler} 
                        onChange={ this.props.changeDescription }/>  
                </Grid>
    
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={() => add(description)}/>
                    <IconButton style='info' icon='search'
                        onClick={search}/>
                    <IconButton style='default' icon='close'
                        onClick={this.props.clear}/>
                </Grid>
            </div>
        )    
    } 
}

const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => 
    bindActionCreators({add, changeDescription, search, clear}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm)
=======
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === "Escape") {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols='12 9 10'>
                <input id="description" className="form-control" 
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onKeyUp={keyHandler} 
                    onChange={ props.handleChange }/>  
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}/>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}/>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}/>
            </Grid>
        </div>
    )
}
>>>>>>> 5c46c9faf485a8648943b4c46c1e03a8098c55a6
