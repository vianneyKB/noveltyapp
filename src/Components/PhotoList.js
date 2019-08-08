import React, { Component } from "react";
import Photo from "./Photo";
import PhotoSearch from "./PhotoSearch";

export default class PhotoList extends Component 
{    
    render() {
        const { photos} = this.props;
        return (
            <React.Fragment>
                <PhotoSearch/>

                <div className="container my-5">
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className="text-slanted"> photo list </h1>
                        </div>
                    </div>
                    {/*End of title */}

                    <div className="row">
                        {
                            photos.map(photo=>{return(<Photo key={photo.Photo_id} photo={photo} /> )})
                        }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
