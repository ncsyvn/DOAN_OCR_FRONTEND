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

const UpdateCardId = (props) => {
  const handleClose = () => {
    // ref.current.resetForm();
    props.handleClose();
  };
  const onSubmit = (values) => {
    const body = {
      gender: values.gender,
      card_number: values.card_number,
      first_name: values.first_name.trim(),
      last_name: values.last_name.trim(),
      birth_date: values.birth_date,
      noi_cap: values.noi_cap,
      que_quan: values.que_quan,
      ddnd: values.ddnd,
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

                  <CInvalidFeedback>{errors.first_name}</CInvalidFeedback>
                </CFormGroup>
                <CInputGroup className="mb-3">
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                    checked={values.gender === "male"}
                  />
                  Male
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    checked={values.gender === "female"}
                  />
                  Female
                  <CInput
                    style={{ fontSize: 5, maxWidth: 60 }}
                    type="radio"
                    name="gender"
                    value="others"
                    onChange={handleChange}
                    checked={values.gender === "others"}
                  />
                  Others
                </CInputGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="First Name"
                    invalid={
                      values.first_name.trim() !== "" &&
                      touched.first_name &&
                      !!errors.first_name
                    }
                    autoComplete="first_name"
                    maxLength={50}
                    value={values.first_name}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // if (config.validate.valueTypingExpressionsName(e))
                      handleChange(e);
                    }}
                    name="first_name"
                    required
                  />

                  <CInvalidFeedback>{errors.first_name}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="text"
                    placeholder="Last Name"
                    invalid={
                      values.last_name.trim() !== "" &&
                      touched.last_name &&
                      !!errors.last_name
                    }
                    autoComplete="last_name"
                    maxLength={50}
                    value={values.last_name}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // if (config.validate.valueTypingExpressionsName(e))
                      handleChange(e);
                    }}
                    name="last_name"
                    required
                  />

                  <CInvalidFeedback>{errors.last_name}</CInvalidFeedback>
                </CFormGroup>
                <CFormGroup>
                  <CInput
                    type="date"
                    placeholder="Date of Birth"
                    autoComplete="birth_date"
                    value={values.birth_date}
                    //value="2020-02-28"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      // const target = e.target as HTMLTextAreaElement;
                      // setFieldValue('birth_date', target.value);
                      handleChange(e);
                    }}
                    name="birth_date"
                  />
                  <CInvalidFeedback>{errors.birth_date}</CInvalidFeedback>
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
                    placeholder="Que Quan"
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
                    placeholder="Dac Diem Nhan Dang"
                    invalid={
                      values.ddnd !== "" && touched.ddnd && !!errors.ddnd
                    }
                    autoComplete="bio"
                    value={values.ddnd}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    name="ddnd"
                  />

                  <CInvalidFeedback>{errors.ddnd}</CInvalidFeedback>
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
                    src={values.image_front}
                    name="image_front"
                    height={200}
                  />

                  <CInvalidFeedback>{errors.image_front}</CInvalidFeedback>
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
                    src={values.image_back}
                    name="image_back"
                    height={200}
                  />

                  <CInvalidFeedback>{errors.image_back}</CInvalidFeedback>
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
