// Content.js

import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="box">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Monthly Recap Report</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <p className="text-center">
                                                <strong>This is text</strong>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}