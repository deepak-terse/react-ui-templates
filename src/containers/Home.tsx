import React, { Component } from 'react';
import SidePanel from '../components/SidePanel';
import Datagrid from '../components/Datagrid';
import Backdrop from '../components/Backdrop';

interface MyProps {
    
}
  
interface MyState {
    drawerOpen: boolean
}

class Home extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState({
          drawerOpen: !this.state.drawerOpen
        })
    }

    backdropClickHandler = () => {
        this.setState({
          drawerOpen: false
        })
    }

    render() {
        let backdrop;
        if(this.state.drawerOpen){
            backdrop = <Backdrop close={this.backdropClickHandler}/>;
        }

        return (
            <div>
                <SidePanel show={this.state.drawerOpen}/>
                {backdrop}   
                <Datagrid toggle={this.drawerToggleClickHandler}/>   
            </div>
        )
    }
}

export default Home