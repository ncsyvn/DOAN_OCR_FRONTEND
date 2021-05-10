import React, { useEffect, useState } from "react";
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
//import usersData from "../../users/UsersData";
import AddCardID from "../add-card/AddCardID";
import UpdateCardId from "../update-card/UpdateCardId";
import axios from "axios";

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
  { key: "no", label: "STT" },
  { key: "name", label: "Họ và tên" },
  { key: "dateOfBirth", label: "Ngày sinh" },
  { key: "cardNumber", label: "Số thẻ" },
  { key: "gender", label: "Giới tính" },
  { key: "danToc", label: "Dân tộc" },
  { key: "queQuan", label: "Tôn Giáo" },
  { key: "noiThuongTru", label: "Thường trú" },
  { key: "cardExp", label: "Có giá trị đến ngày" },
  { key: "nguoiCap", label: "Ngày cấp" },
  { key: "noiCap", label: "Nơi cấp" },
  { key: "action", label: "" },
];

const ListCard = (props) => {
  const query = new URLSearchParams(props.location?.search);
  const currentPage = Math.max(Number(query.get("page")) || 1, 1);
  const pageSize = 10;

  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [page, setPage] = useState(currentPage);
  const [users, setUsers] = useState({
    data: [],
    loading: false,
    total: 0,
    totalPages: currentPage,
  });

  const toggle = () => {
    setModal(!modal);
  };

  const toggleUpdate = () => {
    setModalUpdate(!modalUpdate);
  };

  const getAllUsers = () => {
    var config = {
      method: "get",
      url:
        "https://741vibt902.execute-api.us-east-2.amazonaws.com/stag/api/v1/users?page=1&page_size=12&keyword=Nguyen",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AddCardID
        initialValues={{
          cardNumber: "123345567678",
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
          image_front:
            "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/90c62f58-aa7d-41a5-91e9-ec6f59693af3.jpg",
          image_back:
            "https://i.pinimg.com/originals/0e/a6/07/0ea60749572d399218b842931f892f86.jpg",
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
                items={users.data}
                fields={fields}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  no: (item) => <td>{item.id + 1}</td>,
                  action: (item) => (
                    <td>
                      <div>
                        <CButton
                          color="primary"
                          variant="ghost"
                          onClick={toggleUpdate}
                        >
                          <CIcon name="cil-pencil" />
                        </CButton>
                        {/* <CButton
                          onClick={toggle}
                          variant="ghost"
                          color="primary"
                        >
                          <i className="fas fa-plus-square"></i>
                        </CButton> */}
                        <CButton
                          onClick={toggle}
                          variant="ghost"
                          color="primary"
                        >
                          Delete
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
