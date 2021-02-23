import React, { Component } from 'react'
import styles from '../styles/SidePanel.module.scss';
import Form from '../containers/Form';

interface MyProps {
    show: boolean
}
  
interface MyState {

}

class SidePanel extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    render() {
        let drawerClasses = styles.sideDrawer
        if(this.props.show) {
            drawerClasses = styles.sideDrawerOpen
        }

        return(
            <div className={drawerClasses}>
                <Form/>
            </div>
        );
    }
}


export default SidePanel;

