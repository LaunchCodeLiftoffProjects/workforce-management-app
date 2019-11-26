import React from 'react';
import ReactDOM from 'react-dom';
import './form.css';
import { ModalManager } from '@material-ui/core';

export default class DynamicForm extends React.Component {
    state = {

    }
    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    onChange = (e, key) => {
        this.setState({
            [key]: this[key].value
        })
    }


    render () {
        let title = this.props.title || "Dynamic Form";

        return (
            <div className={this.props.className}>
                <h3>{title}</h3>
                <form className='dynamic-form' onSubmit={(e)=>{this.onSubmit(e)}}>
                <div className="form-group">
                    <label className="form-label">
                        Name:
                    </label>
                    <input type="text"/>
                </div>
                    <div className='form-group'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}