import React, { Component } from "react";
import './App.css';
import {photos} from "./tempList";
import PhotoList from "./Components/PhotoList";
import PhotoDetails from "./Components/PhotoDetails";

class App extends Component
{
  state={
    photos: photos,
    url:"https://www.food2fork.com/api/search?key=d47765493d37f8d5d92af85202acef9c"
  };
// a methode to get photos

// async getphotos()
// {
//   try 
//   {
//     const data = await fetch(this.state.url);
//     const jsonData = await data.json();
//     this.setState(
//       {
//       photos:jsonData.photos
//       })
//   } 
//   catch (error) 
//   {
//     console.log(error);
//   }
// }

//lc
// componentDidMount()
// {
//   this.getphotos()
// }

  render ()
  {
    // console.log(this.state.photos);
    return (
   <React.Fragment>
     <PhotoList photos={this.state.photos}/>
     <PhotoDetails/>
   </React.Fragment>
    );
  }
}

export default App;