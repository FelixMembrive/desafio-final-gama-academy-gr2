import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { requestApiMultiPart, requestApiMultiPartAuth } from "../../services/api";
import logo_usuaria from "../../assets/icons/user.png";
import { setUser } from "../../Store/modules/user";
import { useDispatch } from "react-redux";
import { Check, X } from "phosphor-react";
import './style.scss';

export default function UploadAndDisplayImage() {
  const user = useSelector((state: any) => state.persistedReducer);
  const userPhoto = user.pic ? user.pic : logo_usuaria
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource>(userPhoto);
  const [loadImage, setLoadImage] = useState<boolean>(false);
  const userId = user.id
  const userToken = user.token
  const userName = user.name
  const inputFile = useRef<any>(null);
  const dispatch = useDispatch();


  const handleClick = () => {
    inputFile.current.click();
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoadImage(true)
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
    <form onSubmit={handleSubmit} className="uploadPhoto" >

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
{loadImage }
      {selectedImage != userPhoto && loadImage == false &&
        <div>
          <button className="changePhotoButton" type="submit">
            <Check className="changePhotoIcon" size={18} weight="bold"></Check>
          </button>
          {/* <Check className="changePhotoButton" size={32} ></Check> */}
          <button className="changePhotoButton" onClick={() => setSelectedImage(userPhoto)}>
            <X className="changePhotoIcon" size={18} weight="bold"></X>
          </button>
        </div>
      }
      {loadImage &&
    <p>Carregando...</p>}
    </form>
  );
};