import React, { useState } from "react";
import { requestApiMultiPart, requestApiMultiPartAuth } from "../../services/api";

export default function UploadAndDisplayImage() {
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | null>(null);
  const name = "teste de nome com foto"

//   async function sendImage(selectedImage: string) {
    async function sendImage(profilePicture: Blob | MediaSource | null) {
    try {
      const response = await requestApiMultiPartAuth.put("/users/62ec5259f03ecacf7e82263e", {
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
      <h1>Upload and Display Image usign React Hook's</h1>
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
    <button className="registerButton" type="submit">Enviar</button>
    </form>
  );
};