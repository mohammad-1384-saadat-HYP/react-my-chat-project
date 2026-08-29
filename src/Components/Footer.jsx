import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        }
    }

    changeState = e => {
        this.setState({
            input: e.target.value,
        })
    }

    submitFun = (e) => {
        e.preventDefault();
        this.props.addTextFun(this.state.input);
        this.setState({
            input: "",
        })
    }

    render() {
        return (
            <div className="panel-footer">
                <form onSubmit={this.submitFun}>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.input} onChange={this.changeState}
                               placeholder="Say something"/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit">Send</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}

export default Footer;