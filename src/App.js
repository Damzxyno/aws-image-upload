import './App.css';
import React, {useState, useEffect, useCallback} from "react";
import axios from "axios";
import {useDropzone} from 'react-dropzone'


const UserProfile = () => {
  const [userProfiles, setUserProfiles ] = useState([]);

  const fetchProfiles = () =>{
    axios.post("http://localhost:8080/api").then(res =>{
      console.log(res);
      const data = res.data;
      setUserProfiles(data);
    });
  }

  useEffect(()=> fetchProfiles(), []);
  return userProfiles.map((userProfile, index) => {
    return (
        <div key = {index}>
          {userProfile.userProfileId ? <img src = "http://locahost:8080" /> : <h1></h1>}
          <h1>{userProfile.username}</h1>
          <h2>{userProfile.userProfileId}</h2>
          <Dropzone {...userProfile} />
        </div>
    )
  })
}


function Dropzone( {userProfileId }) {

  const [products, setProduct] = useState();

products.map(product => {
  
})
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    console.log(file)
    const formData = new FormData();
    formData.append("file", file)
    axios.post("http://localhost:8080/api/upload/" + userProfileId,
                formData,
                {
                  headers : {
                    "Content-Type" : "multipart/form-data",

                  }
                }).then(() =>{
                  console.log("Fle uploaded successfully!")
                }).catch(err =>{
                  console.log(err)
                }  
                )
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop your image here, or click to select image</p>
      }
    </div>
  )
}


export default function App() {
  return(
      <div className="App">
        <UserProfile />
      </div>
  )
}



// const data = [
//   {
//     id: 1,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/J7ZW2XK@2x-300x300.jpg",
//     title: "Coffe Table",
//     price: 910.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 2,
//     img: "  https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/XFSNSK@2x-300x300.jpg",
//     title: "Table wood",
//     price: 126.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 3,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Image-RBSJBF@2x-300x300.jpg",
//     title: "Deco Lamp",
//     price: 126.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 4,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Image-U5BW8PS@2x-300x300.jpg",
//     title: "End Table",
//     price: 180.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 5,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/3N8FQJ@2x-300x300.jpg",
//     title: "Lounge Sofa",
//     price: 435.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 6,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Image-WAX664T@2x-300x300.jpg",
//     title: "Modern Chair",
//     price: 115.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 7,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/J7ZW2XK@2x-300x300.jpg",
//     title: "Modern Table",
//     price: 89.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 8,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/3N8FQJ@2x-300x300.jpg",
//     title: "Scandinavia Dresser",
//     price: 115.0,
//     btn: "Add to cart",
//   },
//   {
//     id: 6,
//     img: "https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/Image-WAX664T@2x-300x300.jpg",
//     title: "Modern Chair",
//     price: 115.0,
//     btn: "Add to cart",
//   },
// ];