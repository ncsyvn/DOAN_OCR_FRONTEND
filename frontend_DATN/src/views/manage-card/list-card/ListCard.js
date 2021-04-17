import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from "@coreui/react";

import usersData from "../../users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
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
  "status",
];

const ListCard = (props) => {
  return (
    <div>
      <div>
        <CRow>
          <CCol xs="12" lg="12">
            <CCard>
              <CCardHeader>Manage Card</CCardHeader>
              <CCardBody>
                <CDataTable
                  items={usersData}
                  fields={fields}
                  size="sm"
                  itemsPerPage={5}
                  pagination
                  scopedSlots={{
                    status: (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    ),
                  }}
                />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </div>
  );
};

export default ListCard;
