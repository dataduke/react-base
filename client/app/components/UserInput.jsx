import React from 'react';
import { connect } from 'react-redux';
import { set_age, set_name } from 'STORE/actions.js';
import { Link } from 'react-router-dom';

import { setter } from 'UTIL/inputSetter.js';
import './UserInput.less';

export class UserInput extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: props.user.name ? props.user.name : '',
            age: props.user.age ? props.user.age : ''
        }

        // this.set = setter(this);
    }

    submit() {
        this.props.set_name(this.state.name);
        this.props.set_age(this.state.age);
    }

    onChangeName(event) {
        this.setState({name:event.target.value})
    }

    onChangeAge(event) {
        this.setState({age:event.target.value})
    }

    render() {
        let id = parseInt(Date.now() * Math.random());

        return (
            <div className="userInput" >
                <p>Wie ist denn dein Name?</p>
                <div>
                    <p>
                        <label htmlFor={'userName_' + id} >Name:</label>
                        <input type="text" id={'userName_' + id} value={this.state.name} onChange={this.onChangeName.bind(this)} />
                    </p>
                </div>
                <div>
                    <p>
                        <label htmlFor={'userAge_' + id} >Alter:</label>
                        <input type="text" id={'userAge_' + id} value={this.state.age} onChange={this.onChangeAge.bind(this)} />
                    </p>
                </div>
                <button onClick={this.submit.bind(this)} >Abschicken</button>
            </div>
        );
    }

};



const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, { set_age, set_name })(UserInput);