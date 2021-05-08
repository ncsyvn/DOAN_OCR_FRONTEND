import { CCol, CContainer, CRow, CImg, CButton } from "@coreui/react";
import React, { useState, useRef } from "react";

const CardImageId = () => {
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
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  uploadRef.current.click();
                  // getTemporaryUploadLink();
                }}
              >
                Tải lên
              </CButton>
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  console.log("123");
                }}
              >
                Trích xuất
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
              <h3>Mặt trước</h3>
              <div className="list">
                <div className="item">
                  <h5>Số thẻ:</h5>
                  <span>1231243423</span>
                </div>
                <div className="item">
                  <h5>Họ và tên:</h5>
                  <span>Chu Minh Quy</span>
                </div>
                {/* <div className="item">
                  <h5>Ngày sinh:</h5>
                  <span>Minky Chu</span>
                </div> */}
                <div className="item">
                  <h5>Ngày sinh:</h5>
                  <span>28/02/1997</span>
                </div>
                <div className="item">
                  <h5>Giới tính:</h5>
                  <span>Nam</span>
                </div>
                <div className="item">
                  <h5>Dân tộc:</h5>
                  <span>Kinh</span>
                </div>
                <div className="item">
                  <h5>Quê quán:</h5>
                  <span>Hà Nội</span>
                </div>
                <div className="item">
                  <h5>Thường trú:</h5>
                  <span>Hà Nội</span>
                </div>
                <div className="item">
                  <h5>Có giá trị đến:</h5>
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
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  uploadRefBackImage.current.click();
                  // getTemporaryUploadLink();
                }}
              >
                Tải lên
              </CButton>
              <CButton
                className="avatar-user--button"
                onClick={() => {
                  console.log("123");
                }}
              >
                Trích xuất
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
              <h3>Mặt sau</h3>
              <div className="list">
                <div className="item">
                  <h5>Ngày cấp:</h5>
                  <span>26/3/2021</span>
                </div>
                <div className="item">
                  <h5>Nơi cấp:</h5>
                  <span>Hà Nội</span>
                </div>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default CardImageId;
