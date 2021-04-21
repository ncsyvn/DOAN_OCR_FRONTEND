import React, { useState, useRef } from "react";
import { CCol, CContainer, CRow, CImg, CButton } from "@coreui/react";

const CameraImage = (props) => {
  const [avatar, setAvatar] = useState({ file: "", imagePreviewUrl: "" });
  const [backImage, setBackImage] = useState({ file: "", imagePreviewUrl: "" });
  const uploadRef = useRef(null);
  const uploadRefBackImage = useRef(null);
  let $imagePreview = null;
  let imageBack = null;

  const onUploadAvatar = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (!file) return;

    reader.onload = () => {
      //   setTemporaryUploadLink({ file_path: file });
      setAvatar({ file: file, imagePreviewUrl: reader.result });
      console.log("ASSAF", file);
      //   uploadAvatar(temporaryUploadLink.link, file);
    };
    reader.readAsDataURL(file);
  };

  const onUploadBackImage = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (!file) return;

    reader.onload = () => {
      //   setTemporaryUploadLink({ file_path: file });
      setBackImage({ file: file, imagePreviewUrl: reader.result });
      console.log("ASSAF", file);
      //   uploadAvatar(temporaryUploadLink.link, file);
    };
    reader.readAsDataURL(file);
  };
  // front image
  if (avatar.imagePreviewUrl) {
    $imagePreview = (
      <CImg
        src={avatar.imagePreviewUrl}
        alt="IMG"
        width={100 + "%"}
        height="200"
      />
    );
  } else {
    $imagePreview = (
      <CImg
        src="https://i.stack.imgur.com/l60Hf.png"
        alt="IMG"
        width={100 + "%"}
        height="200"
      />
    );
  }
  // back image
  if (backImage.imagePreviewUrl) {
    imageBack = (
      <CImg
        src={backImage.imagePreviewUrl}
        alt="IMG"
        width={100 + "%"}
        height="200"
      />
    );
  } else {
    imageBack = (
      <CImg
        src="https://i.stack.imgur.com/l60Hf.png"
        alt="IMG"
        width={100 + "%"}
        height="200"
      />
    );
  }

  return (
    <div className="card-image">
      <CContainer>
        <CRow>
          <CCol md={6}>
            <div className="avatar-user">
              {$imagePreview}

              <div className="overlay"></div>
              {/* <CButton
                className="avatar-user--button"
                onClick={() => {
                  uploadRef.current.click();
                  // getTemporaryUploadLink();
                }}
              >
                Upload
              </CButton> */}
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  console.log("123");
                }}
                color="primary"
                variant="ghost"
              >
                Ket Noi Camera
              </CButton>
              <input
                className="avatar-user--input"
                type="file"
                id="myFile"
                name="filename"
                ref={uploadRef}
                style={{ display: "none" }}
                accept="image/x-png,image/gif,image/jpeg"
                onChange={onUploadAvatar}
              />
            </div>
          </CCol>
          <CCol md={6}>
            <div className="front-image" style={{ width: 100 + "%" }}>
              <h3>Mat Truoc</h3>
              <div className="list">
                <div className="item">
                  <h5>So chung minh thu nhan dan:</h5>
                  <span>1231243423</span>
                </div>
                <div className="item">
                  <h5>Ho va ten khai sinh:</h5>
                  <span>Chu Minh Quy</span>
                </div>
                <div className="item">
                  <h5>Ho va ten goi khac:</h5>
                  <span>Minky Chu</span>
                </div>
                <div className="item">
                  <h5>Ngay thang nam sinh:</h5>
                  <span>28/02/1997</span>
                </div>
                <div className="item">
                  <h5>Gioi Tinh:</h5>
                  <span>Nam</span>
                </div>
                <div className="item">
                  <h5>Dan toc:</h5>
                  <span>Kinh</span>
                </div>
                <div className="item">
                  <h5>Que Quan:</h5>
                  <span>Ha Noi</span>
                </div>
                <div className="item">
                  <h5>Noi thuong tru:</h5>
                  <span>Ha Noi</span>
                </div>
                <div className="item">
                  <h5>Co gia tri den:</h5>
                  <span>26/3/2021</span>
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol md={6}>
            <div className="avatar-user">
              {imageBack}

              <div className="overlay"></div>
              {/* <CButton
                className="avatar-user--button"
                onClick={() => {
                  uploadRefBackImage.current.click();
                  // getTemporaryUploadLink();
                }}
              >
                Upload
              </CButton> */}
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  console.log("123");
                }}
                color="primary"
                variant="ghost"
              >
                Ket Noi Camera
              </CButton>
              <input
                className="avatar-user--input"
                type="file"
                id="myFile"
                name="filename"
                ref={uploadRefBackImage}
                style={{ display: "none" }}
                accept="image/x-png,image/gif,image/jpeg"
                onChange={onUploadBackImage}
              />
            </div>
          </CCol>
          <CCol md={6}>
            <div
              className="back-image"
              style={{ width: 100 + "%", marginTop: 2 + "rem" }}
            >
              <h3>Mat Sau</h3>
              <div className="list">
                <div className="item">
                  <h5>Dac diem nhan dang:</h5>
                  <span>Ngheo</span>
                </div>
                <div className="item">
                  <h5>Ngay cap:</h5>
                  <span>26/3/2021</span>
                </div>
                <div className="item">
                  <h5>Noi cap:</h5>
                  <span>Ha Noi</span>
                </div>
                <div className="item">
                  <h5>Nguoi cap:</h5>
                  <span>Minky Chu</span>
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default CameraImage;
