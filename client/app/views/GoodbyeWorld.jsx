import React from 'react';
import { connect } from 'react-redux';
import { delete_age, delete_name } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class GoodbyeWorld extends React.Component {
    constructor(props) {
        super();

        this.state = {}
    }

    submit() {
        this.props.delete_name(this.state.name);
        this.props.delete_age(this.state.age);
    }

    render() {
        return (
        	<DefaultPage>
        		{
        			this.props.user.name
        			? <div>
        				<p>Tschüß, {this.props.user.name} ({this.props.user.age})</p>
        				<Link to="/" onClick={this.submit.bind(this)}>Ich bin weg!</Link>
        			</div>
        			: <div>
        				<p>Tschau!</p>
        			</div>
        		}
        	</DefaultPage>
        );
    }

};

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, { delete_age, delete_name })(GoodbyeWorld);