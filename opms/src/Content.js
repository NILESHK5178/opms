// Content.js

import React, {Component} from 'react';

export default class Content extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="content-wrapper">
                <div className="col-md-12">
                    <h3 className="box-title"> Hello</h3>
                 </div>
            </div>
        )
    }
}