import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-header">
                <Link to='/' className="navbar-brand">
                    <i className="fa fa-calendar-check-o"></i>
                    TodoApp
                </Link>
            </div>
            
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/todos" className="nav-link navbar-brand">
                        Tarefas
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link navbar-brand">
                        Sobre
                    </Link>
                </li>
            </ul>
            
        </div>
    </nav>
)