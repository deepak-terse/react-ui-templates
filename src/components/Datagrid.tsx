import React, { Component } from 'react'

interface MyProps {
    toggle: any
}
  
interface MyState {

}

class Datagrid extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.props.toggle}>Open Side Panel</button>
            </div>
        )
    }
}

export default Datagrid