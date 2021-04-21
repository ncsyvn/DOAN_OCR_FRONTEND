import React, { useState } from "react";
import {
  // CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "../../users/UsersData";
import AddCardID from "../add-card/AddCardID";
import UpdateCardId from "../update-card/UpdateCardId";

// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };
const fields = [
  "name",
  "dateOfBirth",
  "cardNumber",
  "gender",
  "danToc",
  "queQuan",
  "noiThuongTru",
  "ddnd",
  "cardExp",
  "noiCap",
  "nguoiCap",
  "action",
];

const ListCard = (props) => {
  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggleUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  return (
    <div>
      <AddCardID
        initialValues={{
          gender: "male",
          first_name: "Quy",
          last_name: "Chu",
          card_number: "0868280297",
          birth_date: "1997-02-28",
          email: "mnhquy2802",
          noi_cap: "Ha Noi",
          que_quan: "Ha Noi",
          ddnd: "Ngheo",
        }}
        // setData={setData}
        show={modal}
        toggle={toggle}
        handleClose={() => {
          setModal(false);
        }}
      />

      <UpdateCardId
        initialValues={{
          gender: "male",
          first_name: "Quy",
          last_name: "Chu",
          card_number: "0868280297",
          birth_date: "1997-02-28",
          email: "mnhquy2802",
          noi_cap: "Ha Noi",
          que_quan: "Ha Noi",
          ddnd: "Ngheo",
        }}
        // setData={setData}
        show={modalUpdate}
        toggle={toggleUpdate}
        handleClose={() => {
          setModalUpdate(false);
        }}
      />

      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Manage Card
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  action: (item) => (
                    <td>
                      <div>
                        <CButton
                          color="primary"
                          variant="ghost"
                          onClick={toggle}
                        >
                          <CIcon name="cil-pencil" />
                        </CButton>
                        <CButton
                          onClick={toggleUpdate}
                          variant="ghost"
                          color="primary"
                        >
                          <i className="fas fa-plus-square"></i>
                        </CButton>
                      </div>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ListCard;
