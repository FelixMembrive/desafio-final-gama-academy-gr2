import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { requestApiMultiPart, requestApiMultiPartAuth } from "../../services/api";
import logo_usuaria from "../../assets/icons/user.png";
import { setUser } from "../../Store/modules/user";
import { useDispatch } from "react-redux";

export default function UploadAndDisplayImage() {
  const user = useSelector((state: any) => state.persistedReducer);
  let userPhoto = user.pic ? user.pic : logo_usuaria
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource>(userPhoto);
  const userId = user.id
  const userToken = user.token
  const userName = user.Name
  const inputFile = useRef<any>(null);
  const dispatch = useDispatch();


  const handleClick = () => {
    inputFile.current.click();
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    sendImage(selectedImage)
  }

  async function sendImage(image: Blob | MediaSource | null) {
    try {
      await requestApiMultiPartAuth.put("/users/" + userId, {
        profilePicture: image,
      })
        .then(function (response) {
          const imageChanged = (response.data.user.profilePicture);
          dispatch(
            setUser({
              token: userToken,
              id: userId,
              name: userName,
              pic: imageChanged,
            }));
        })
      refreshPage();
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      }

    }
  }

  function refreshPage() {
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="uploadPhoto">

      <input
        style={{ display: "none" }}
        ref={inputFile}
        type="file"
        name="myImage"
        onChange={(event: any) => {
          setSelectedImage(event.target.files[0]);
        }}
      />

      <div>
        <img className="logo_lorena mb-2 " src={selectedImage == userPhoto ? userPhoto : URL.createObjectURL(selectedImage)} width={75}
          onClick={handleClick}
        />
      </div>

      {selectedImage != userPhoto &&
        <div>
          <button type="submit">Salvar</button>
          <button onClick={() => setSelectedImage(userPhoto)}>Cancelar</button>
        </div>
      }
    </form>
  );
};