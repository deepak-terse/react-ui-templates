import React, { Component } from 'react'
import Button from './form-input/Button';

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
                <Button
                        placeholder = "Open Side Panel"
                        type = "button"
                        onClick = {this.props.toggle}
                />
            </div>
        )
    }
}

export default Datagrid