/**
 * Created by user on 2018/3/21.
 */
import React, {PureComponent} from "react";
import {connect} from "react-redux";

@connect()
export default class extends PureComponent {
    componentDidMount() {
    }
    render() {
        const {children} = this.props
        return children
    }
}