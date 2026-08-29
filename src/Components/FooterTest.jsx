import React, {Component} from 'react';

class FooterTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
    }

    changeFun = e => {
        this.setState({
            value: e.target.value,
        })
    }

    submitFun = e => {
        e.preventDefault();
        this.props.addTextFun(this.state.value);
        this.setState({
            value: "",
        })
    }

    render() {
        return (
            <div className="panel-footer">
                <form onSubmit={this.submitFun}>
                    <div className="input-group">
                        <input type="text" className="form-control" value={this.state.value} onChange={this.changeFun}
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

export default FooterTest;