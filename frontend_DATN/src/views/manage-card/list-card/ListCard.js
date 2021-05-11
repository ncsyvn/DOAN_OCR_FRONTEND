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
  { key: "ma", label: "STT" },
  { key: "ho_va_ten", label: "Họ và tên" },
  { key: "ngay_sinh", label: "Ngày sinh" },
  { key: "so_the", label: "Số thẻ" },
  { key: "gioi_tinh", label: "Giới tính" },
  { key: "dan_toc", label: "Dân tộc" },
  { key: "ton_giao", label: "Tôn Giáo" },
  { key: "que_quan", label: "Quê quán" },
  { key: "que_quan_xa", label: "Xã" },
  { key: "que_quan_huyen", label: "Huyện" },
  { key: "que_quan_tinh", label: "Tỉnh" },
  { key: "thuong_tru", label: "Thường trú" },
  { key: "thuong_tru_xa", label: "Thường trú xã" },
  { key: "thuong_tru_huyen", label: "Thường trú huyện" },
  { key: "thuong_tru_tinh", label: "Thường trú tỉnh" },
  { key: "co_gia_tri_den", label: "Có giá trị đến ngày" },
  { key: "ngay_cap", label: "Ngày cấp" },
  { key: "noi_cap", label: "Nơi cấp" },
  { key: "action", label: "" },
];

const initialValuesUpdate = {
  ho_va_ten: " ",
  ngay_sinh: null,
  so_the: " ",
  dan_toc: " ",
  gioi_tinh: " ",
  que_quan: " ",
  que_quan_xa: " ",
  que_quan_huyen: " ",
  que_quan_tinh: " ",
  thuong_tru: " ",
  thuong_tru_xa: " ",
  thuong_tru_huyen: " ",
  thuong_tru_tinh: " ",
  co_gia_tri_den: " ",
  ngay_cap: " ",
  noi_cap: " ",
  anh_mat_truoc: " ",
  anh_mat_sau: " ",
};

const ListCard = (props) => {
  const query = new URLSearchParams(props.location?.search);
  const currentPage = Math.max(Number(query.get("page")) || 1, 1);
  const pageSize = 10;

  const [modal, setModal] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [updateUserData, setUpdateUserData] = useState({
    show: false,
    initialValues: initialValuesUpdate,
  });
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
      url: "https://741vibt902.execute-api.us-east-2.amazonaws.com/stag/api/v1/users?page=1&page_size=12&keyword=Nguyen",
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

  console.log("quy", users.data);

  useEffect(() => {
    getAllUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <AddCardID
        initialValues={{
          so_the: { users },
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
        initialValues={updateUserData.initialValues}
        // setData={setData}
        show={updateUserData.show}
        handleClose={() =>
          setUpdateUserData({ show: false, initialValues: initialValuesUpdate })
        }
        //toggle={toggleUpdate}
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
                items={users.data.users}
                fields={fields}
                size="sm"
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  no: (item) => <td>{item}</td>,
                  action: (item) => (
                    <td>
                      <div>
                        <CButton
                          color="primary"
                          variant="ghost"
                          onClick={() => {
                            setUpdateUserData({
                              show: true,
                              initialValues: item,
                            });
                          }}
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
