/**
 * Created by flyjennyetn on 2017/12/25.
 */
import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import BreadcrumbCustom from 'components/BreadcrumbCustom/';
import img from 'assets/images/404.png';

@connect()

export default class extends PureComponent {

    state = {
    }

    componentWillMount(){
    }

    componentDidMount(){

    } 


    render(){

        return (
            <div className="gutter-example">
               404
            </div>
        )
    }
}

