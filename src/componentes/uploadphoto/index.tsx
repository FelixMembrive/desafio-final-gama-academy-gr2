import React, { useState } from "react";
import { useSelector } from "react-redux";
import { requestApiMultiPart, requestApiMultiPartAuth } from "../../services/api";

export default function UploadAndDisplayImage() {
  const user = useSelector((state: any) => state.persistedReducer);
  const userId = user.id
  

  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | null>(null);
  const name = "teste de nome com foto"

//   async function sendImage(selectedImage: string) {
    async function sendImage(profilePicture: Blob | MediaSource | null) {
    try {
      const response = await requestApiMultiPartAuth.put("/users/"+userId, {
        profilePicture: selectedImage,
      });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      }
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    sendImage(selectedImage)
    }

  return (
    <form onSubmit={handleSubmit} className="uploadPhoto">
    <div>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event : any) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
    {selectedImage && <button className="registerButton" type="submit">Enviar</button>}
    </form>
  );
};