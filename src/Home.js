import React, {Component} from 'react';

class Home extends Component {
    constructor(props)
    {
        super(props);
        console.log("constructor loaded");
        this.state = {
            homeState : "This Data is on home state",
            lastName : "Singhal"
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    componentWillMount()
    {
        console.log("componentWillMount called");
    }

    componentDidMount()
    {
        console.log("componentDidMount called");
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate called");
        return false;
    } 

    componentWillReceiveProps(nextProps)
    {
         console.log("componentWillReceiveProps called");
    }

    componentWillUpdate(nextProps, nextState)
    {
         console.log("componentWillUpdate called");
    }

    render()
    {
        console.log("render called")
        return(
            <div>
                <input type="text" ref="lastName"/>
                <br/>
                

                <input type="text" ref="firstName"/>
                <br/>
                

                <button onClick={this.handleFormSubmit}>
                    Submit
                </button>
            </div>

        );
    }

    componentDidUpdate()
    {
         console.log("componentDidUpdate called");
    }
    
    componentWillUnMount()
    {
        console.log("componentWillUnMount called");
    }


    


    handleFormSubmit()
    {
        console.log("First Name", this.refs.firstName.value);
        console.log("Last Name", this.refs.lastName.value);
        this.setState({
            firstName : this.refs.firstName.value,
            lastName : this.refs.lastName.value
        })
    }

    handleClick()
    {
        this.setState(
            {
                homeState : "I am changed"
            }
        )
    }
}

export default Home;

Home.propTypes = {
  firstName: React.PropTypes.string.isRequired
};