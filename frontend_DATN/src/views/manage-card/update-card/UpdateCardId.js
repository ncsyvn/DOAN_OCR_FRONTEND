import React from "react";
import {
  CRow,
  CModal,
  CTextarea,
  CCol,
  CInput,
  CButton,
  CModalHeader,
  CModalBody,
  CForm,
  CFormGroup,
  CInvalidFeedback,
  CInputGroup,
  CSpinner,
  CModalFooter,
  CImg,
} from "@coreui/react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = function (values) {
  return Yup.object().shape({
    first_name: Yup.string().trim().required("First Name is required"),
    last_name: Yup.string().trim().required("Last Name is required"),
  });
};

// ho_va_ten: " ",
//   ngay_sinh: null,
//   so_the: " ",
//   dan_toc: " ",
//   gioi_tinh: " ",
//   que_quan: " ",
//   que_quan_xa: " ",
//   que_quan_huyen: " ",
//   que_quan_tinh: " ",
//   thuong_tru: " ",
//   thuong_tru_xa: " ",
//   thuong_tru_huyen: " ",
//   thuong_tru_tinh: " ",
//   co_gia_tri_den: " ",
//   ngay_cap: " ",
//   noi_cap: " ",
//   anh_mat_truoc: " ",
//   anh_mat_sau: " ",

const UpdateCardId = (props) => {
  const handleClose = () => {
    // ref.current.resetForm();
    props.handleClose();
  };
  const onSubmit = (values) => {
    const body = {
      gioi_tinh: values.gioi_tinh,
      so_the: values.so_the,
      dan_toc: values.dan_toc.trim(),
      last_name: values.last_name.trim(),
      ngay_sinh: values.ngay_sinh,
      noi_cap: values.noi_cap,
      que_quan: values.que_quan,
      que_quan_xa: values.que_quan_xa,
      que_quan_huyen: values.que_quan_huyen,
      que_quan_tinh: values.que_quan_tinh,
      thuong_tru: values.thuong_tru,
      thuong_tru_xa: values.thuong_tru_xa,
      thuong_tru_huyen: values.thuong_tru_huyen,
      thuong_tru_tinh: values.thuong_tru_tinh,
      co_gia_tri_den: values.co_gia_tri_den,
      ngay_cap: values.ngay_cap,
      noi_cap: values.noi_cap,
      anh_mat_truoc: values.anh_mat_truoc,
      anh_mat_sau: values.anh_mat_sau,
    };
  };

  return (
    <div>
      <CModal show={props.show} centered closeOnBackdrop={false}>
        <CModalHeader closeButton>
          Thông tin chi tiết
          {/* <i className="fa fa-close cursor-pointer" onClick={showAttention} /> */}
        </CModalHeader>
        <CModalBody>
          {/* <CModal size="sm" centered closeOnBackdrop={false}>
          <CModalBody style={{ textAlign: "center" }}>
            Are you sure you want to discard your changes?
          </CModalBody>
          <CModalFooter
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <CButton
              style={{ width: 120 }}
              color="primary"
              onClick={() => {
                // setAttention(false);
                handleClose();
              }}
            >
              Discard
            </CButton>
            <CButton
              style={{ width: 120 }}
              color="primary"
              onClick={() => setAttention(false)}
            >
              Keep Editing
            </CButton>
          </CModalFooter>
        </CModal> */}
          <Formik
            // innerRef={ref}
            enableReinitialize={true}
            initialValues={props.initialValues}
            validate={validationSchema}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              //status,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
              //isSubmitting,
              isValid,
              // handleReset,
              // setTouched,
              // setFieldValue,
            }) => (
              <CForm onSubmit={handleSubmit}>
                <CFormGroup>
                  <CFormGroup>
                    <CInput
                      type="text"
                      placeholder="Số thẻ "
                      //invalid={values.password !== '' && touched.password && !!errors.password}
                      autoComplete="card_number"
                      maxLength={20}
                      value={values.card_number}
                      onBlur={handleBlur}
                      onChange={(e) => handleChange(e)}
                      name="card_number"
                    />

                    <CInvalidFeedback>{errors.card_number}</CInvalidFeedback>
                  </CFormGroup>

                  <CInvalidFeedback>{errors.dan_toc}</CInvalidFeedback>
                </CFormGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gioi_tinh"
                    value="Nam"
                    onChange={handleChange}
                    checked={values.gioi_tinh === "Nam"}
                  />
                  Male
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gioi_tinh"
                    value="Nu"
                    onChange={handleChange}
                    checked={values.gioi_tinh === "Nu"}
                  />
                  Female
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gioi_tinh"
                    value="Khac"
                    onChange={handleChange}
                    checked={values.gioi_tinh === "Khac"}
                  />
                  Others
                </CInputGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Dân tộc"
                    invalid={touched.dan_toc && !!errors.dan_toc}
                    autoComplete="dan_toc"
                    maxLength={50}
                    value={values.dan_toc}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // if (config.validate.valueTypingExpressionsName(e))
                      handleChange(e);
                    }}
                    name="dan_toc"
                    required
                  />

                  <CInvalidFeedback>{errors.dan_toc}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Ngày sinh"
                    autoComplete="ngay_sinh"
                    value={values.ngay_sinh}
                    //value="2020-02-28"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // const target = e.target as HTMLTextAreaElement;
                      // setFieldValue('ngay_sinh', target.value);
                      handleChange(e);
                    }}
                    name="ngay_sinh"
                  />
                  <CInvalidFeedback>{errors.ngay_sinh}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Noi Cap"
                    invalid={
                      values.noi_cap !== "" &&
                      touched.noi_cap &&
                      !!errors.noi_cap
                    }
                    autoComplete="bio"
                    value={values.noi_cap}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="noi_cap"
                  />

                  <CInvalidFeedback>{errors.noi_cap}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Quê quán"
                    invalid={
                      values.que_quan !== "" &&
                      touched.que_quan &&
                      !!errors.que_quan
                    }
                    autoComplete="bio"
                    value={values.que_quan}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="que_quan"
                  />

                  <CInvalidFeedback>{errors.que_quan}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Xã"
                    invalid={
                      values.que_quan_xa !== "" &&
                      touched.que_quan_xa &&
                      !!errors.que_quan_xa
                    }
                    autoComplete="bio"
                    value={values.que_quan_xa}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="que_quan_xa"
                  />

                  <CInvalidFeedback>{errors.que_quan_xa}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Huyện"
                    invalid={
                      values.que_quan_huyen !== "" &&
                      touched.que_quan_huyen &&
                      !!errors.que_quan_huyen
                    }
                    autoComplete="bio"
                    value={values.que_quan_huyen}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="que_quan_huyen"
                  />

                  <CInvalidFeedback>{errors.que_quan_huyen}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Tỉnh"
                    invalid={
                      values.que_quan_tinh !== "" &&
                      touched.que_quan_tinh &&
                      !!errors.que_quan_tinh
                    }
                    autoComplete="bio"
                    value={values.que_quan_tinh}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="que_quan_tinh"
                  />

                  <CInvalidFeedback>{errors.que_quan_tinh}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Thường trú"
                    invalid={
                      values.thuong_tru !== "" &&
                      touched.thuong_tru &&
                      !!errors.thuong_tru
                    }
                    autoComplete="bio"
                    value={values.thuong_tru}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="thuong_tru"
                  />

                  <CInvalidFeedback>{errors.thuong_tru}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Thường trú xã"
                    invalid={
                      values.thuong_tru_xa !== "" &&
                      touched.thuong_tru_xa &&
                      !!errors.thuong_tru_xa
                    }
                    autoComplete="bio"
                    value={values.thuong_tru_xa}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="thuong_tru_xa"
                  />

                  <CInvalidFeedback>{errors.thuong_tru_xa}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Thường trú huyện"
                    invalid={
                      values.thuong_tru_huyen !== "" &&
                      touched.thuong_tru_huyen &&
                      !!errors.thuong_tru_huyen
                    }
                    autoComplete="bio"
                    value={values.thuong_tru_huyen}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="thuong_tru_huyen"
                  />

                  <CInvalidFeedback>{errors.thuong_tru_huyen}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Thường trú tỉnh"
                    invalid={
                      values.thuong_tru_tinh !== "" &&
                      touched.thuong_tru_tinh &&
                      !!errors.thuong_tru_tinh
                    }
                    autoComplete="bio"
                    value={values.thuong_tru_tinh}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="thuong_tru_tinh"
                  />

                  <CInvalidFeedback>{errors.thuong_tru_tinh}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Có giá trị đến ngày"
                    invalid={
                      values.co_gia_tri_den !== "" &&
                      touched.co_gia_tri_den &&
                      !!errors.co_gia_tri_den
                    }
                    autoComplete="bio"
                    value={values.co_gia_tri_den}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="co_gia_tri_den"
                  />

                  <CInvalidFeedback>{errors.co_gia_tri_den}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Nơi cấp"
                    invalid={
                      values.noi_cap !== "" &&
                      touched.noi_cap &&
                      !!errors.noi_cap
                    }
                    autoComplete="bio"
                    value={values.noi_cap}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="noi_cap"
                  />

                  <CInvalidFeedback>{errors.noi_cap}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Ngày cấp"
                    invalid={
                      values.ngay_cap !== "" &&
                      touched.ngay_cap &&
                      !!errors.ngay_cap
                    }
                    autoComplete="bio"
                    value={values.ngay_cap}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="ngay_cap"
                  />

                  <CInvalidFeedback>{errors.ngay_cap}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CImg
                    type="image"
                    placeholder="Ảnh mặt trước"
                    // invalid={
                    //   values.ddnd !== "" && touched.ddnd && !!errors.ddnd
                    // }
                    // autoComplete="bio"
                    // value={values.ddnd}
                    // onBlur={handleBlur}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    src={values.anh_mat_truoc}
                    name="anh_mat_truoc"
                    height={200}
                  />

                  <CInvalidFeedback>{errors.anh_mat_truoc}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CImg
                    type="image"
                    placeholder="Ảnh mặt sau"
                    // invalid={
                    //   values.ddnd !== "" && touched.ddnd && !!errors.ddnd
                    // }
                    // autoComplete="bio"
                    // value={values.ddnd}
                    // onBlur={handleBlur}
                    // onChange={(e) => {
                    //   handleChange(e);
                    // }}
                    src={values.anh_mat_sau}
                    name="anh_mat_sau"
                    height={200}
                  />

                  <CInvalidFeedback>{errors.anh_mat_sau}</CInvalidFeedback>
                </CFormGroup>

                <CFormGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton
                        color="primary"
                        className="px-4"
                        type="submit"
                        disabled={!(isValid && dirty)}
                        style={{ width: 100 }}
                      >
                        {/* {loading ? (
                        <CSpinner size="sm" color="light" />
                      ) : ( */}
                        Update
                        {/* )} */}
                      </CButton>
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            )}
          </Formik>
        </CModalBody>
      </CModal>
    </div>
  );
};

export default UpdateCardId;
