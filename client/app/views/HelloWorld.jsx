import React from 'react';
import { connect } from 'react-redux';
import { } from 'STORE/actions.js';
import { Link } from 'react-router-dom';
import UserInput from 'COMP/UserInput.jsx';
import DefaultPage from 'COMP/DefaultPage.jsx';

export class HelloWorld extends React.Component {
    constructor(props) {
        super();

        this.state = {

        }
    }

    render() {
        return (
        	<DefaultPage>
        		{
        			this.props.user.name && this.props.user.age
        			? <div>
        				<p>Hallo, {this.props.user.name} ({this.props.user.age})</p>
        				<Link to="/bye">Tschüss! <span className="fa fa-angle-double-right"></span></Link>
        			</div>
        			: <div>
        				<p>Oh, dich kenn ich noch nicht...</p>
        				<UserInput />
        			</div>
        		}
        	</DefaultPage>
        );
    }
};

const mapStateToProps = (state, ownProps) => ({
    user: state.user
});

export default connect(mapStateToProps, {})(HelloWorld);