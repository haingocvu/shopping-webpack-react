import React, { Component } from 'react';

class DemoComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2>Fading Modal Hello good <i className="fa fa-bell" aria-hidden="true" /> </h2>
                    <p>Add the "fade" className to the modal container if you want the modal to fade in on open and fade out on close.</p>

                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal
                    </button>

                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div className="modal-body">
                                    Modal body..
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default DemoComponent;