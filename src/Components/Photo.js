import React, { Component } from 'react'

export default class Photo extends Component {
    render() {
        //console.log(this.props.Photo)
        const {
            image_Url,
            title,
            source_url,
            Photographer,
            photo_id
        } = this.props.photo;

        return (
            <React.Fragment>
            <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                <div className="card">
                    <img src={image_Url} 
                    className="img-card-top" 
                    style={{height:"14rem"}}
                    alt=""/>
                </div>
                <div className="card-body text-capitalize">
                    <h6>{title}</h6>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
