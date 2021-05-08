const usersData = [
  {
    id: 0,
    name: "John Doe",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 1,
    name: "Samppa Nori",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Banned",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    dateOfBirth: "2018/03/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    dateOfBirth: "2018/01/21",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 6,
    name: "Yiorgos Avraamu",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 7,
    name: "Avram Tarasios",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Banned",
  },
  {
    id: 8,
    name: "Quintin Ed",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Enéas Kwadwo",
    dateOfBirth: "2018/03/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 10,
    name: "Agapetus Tadeáš",
    dateOfBirth: "2018/01/21",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 11,
    name: "Carwyn Fachtna",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 12,
    name: "Nehemiah Tatius",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Banned",
  },
  {
    id: 13,
    name: "Ebbe Gemariah",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Eustorgios Amulius",
    dateOfBirth: "2018/03/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 15,
    name: "Leopold Gáspár",
    dateOfBirth: "2018/01/21",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 16,
    name: "Pompeius René",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 17,
    name: "Paĉjo Jadon",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Banned",
  },
  {
    id: 18,
    name: "Micheal Mercurius",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Ganesha Dubhghall",
    dateOfBirth: "2018/03/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 20,
    name: "Hiroto Šimun",
    dateOfBirth: "2018/01/21",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 21,
    name: "Vishnu Serghei",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Active",
  },
  {
    id: 22,
    name: "Zbyněk Phoibos",
    dateOfBirth: "2018/02/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Banned",
  },
  {
    id: 23,
    name: "Aulus Agmundr",
    dateOfBirth: "2018/01/01",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Pending",
  },
  {
    id: 42,
    name: "Ford Prefect",
    dateOfBirth: "2001/05/25",
    cardNumber: "0987654321",
    gender: "Man",
    danToc: "Kinh",
    queQuan: "Không",
    noiThuongTru: "Ha Noi",
    ddnd: "Ngheo",
    cardExp: "28/02/2021",
    noiCap: "Ha Noi",
    nguoiCap: "28/02/2007",
    status: "Don't panic!",
  },
];

export default usersData;
