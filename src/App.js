// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Numbers } from "./components/Numbers";

export const App = () => {
  // const [persons] = useState([
  //   { name: "Mary", number: "99999999" },
  //   { name: "Mar", number: "8888" },
  //   { name: "John", number: "22222222" },
  //   { name: "Zackery", number: "333333333" },
  // ]);

  const [persons] = useState([
    {
        "uid": "RBX3",
        "name": "Punggol",
        "full_name": "Punggol, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.911461 1.406974)"
    },
    {
        "uid": "US35",
        "name": "Duxton Hill",
        "full_name": "Duxton Hill, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.842514 1.279308)"
    },
    {
        "uid": "TZOZ",
        "name": "Dempsey Hill",
        "full_name": "Dempsey Hill, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.810738 1.304863)"
    },
    {
        "uid": "WD0M",
        "name": "SIN",
        "full_name": "Singapore, Singapore (SIN-Changi)",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.988953 1.355172)"
    },
    {
        "uid": "NE3Z",
        "name": "Pulau Ubin",
        "full_name": "Pulau Ubin, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.9617 1.413728)"
    },
    {
        "uid": "QX8C",
        "name": "Tampines",
        "full_name": "Tampines, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.954384 1.343237)"
    },
    {
        "uid": "8V8Y",
        "name": "Colonial District",
        "full_name": "Colonial District, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.85128 1.296381)"
    },
    {
        "uid": "JSFL",
        "name": "Central Business District",
        "full_name": "Central Business District, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.855461 1.287126)"
    },
    {
        "uid": "CQ22",
        "name": "Clarke Quay",
        "full_name": "Clarke Quay, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.844543 1.289587)"
    },
    {
        "uid": "FDAM",
        "name": "Kranji",
        "full_name": "Kranji, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.761131 1.429174)"
    },
    {
        "uid": "LF74",
        "name": "Outram",
        "full_name": "Outram, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.841858 1.283103)"
    },
    {
        "uid": "IFRH",
        "name": "XSP",
        "full_name": "Singapore, Singapore (XSP-Seletar)",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.864502 1.418872)"
    },
    {
        "uid": "A28M",
        "name": "QPG",
        "full_name": "Paya Lebar, Singapore (QPG-Paya Lebar Air Base)",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.901199 1.353246)"
    },
    {
        "uid": "RsBU",
        "name": "Singapore",
        "full_name": "Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.8509491 1.2800945)"
    },
    {
        "uid": "3W9U",
        "name": "Sentosa",
        "full_name": "Sentosa, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.828654289246 1.24976736984118)"
    },
    {
        "uid": "9CUZ",
        "name": "Holland Village",
        "full_name": "Holland Village, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.797089 1.309309)"
    },
    {
        "uid": "1SMI",
        "name": "Changi",
        "full_name": "Changi, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(104.005844 1.348869)"
    },
    {
        "uid": "VE3G",
        "name": "Bukit Timah",
        "full_name": "Bukit Timah, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.790581 1.329764)"
    },
    {
        "uid": "EBI3",
        "name": "Bugis Village",
        "full_name": "Bugis Village, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.855759 1.300697)"
    },
    {
        "uid": "CB4E",
        "name": "Robertson Quay",
        "full_name": "Robertson Quay, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.839966 1.291016)"
    },
    {
        "uid": "AGNY",
        "name": "River Valley",
        "full_name": "River Valley, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.833954 1.298103)"
    },
    {
        "uid": "197E",
        "name": "Red Light District",
        "full_name": "Red Light District, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.880104 1.311398)"
    },
    {
        "uid": "2OKD",
        "name": "Katong",
        "full_name": "Katong, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.903816 1.303599)"
    },
    {
        "uid": "YD2Z",
        "name": "Kallang",
        "full_name": "Kallang, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.86657 1.310436)"
    },
    {
        "uid": "TVKC",
        "name": "Tanglin",
        "full_name": "Tanglin, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.81768 1.308089)"
    },
    {
        "uid": "ZZ4Y",
        "name": "Tiong Bahru Estate",
        "full_name": "Tiong Bahru Estate, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.821266 1.286666)"
    },
    {
        "uid": "EP3Q",
        "name": "St. John's Island",
        "full_name": "St. John's Island, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.848732 1.218606)"
    },
    {
        "uid": "KLR6",
        "name": "Emerald Hill",
        "full_name": "Emerald Hill, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.838867 1.303474)"
    },
    {
        "uid": "LZJP",
        "name": "Resorts World Sentosa",
        "full_name": "Resorts World Sentosa, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.821312 1.256532)"
    },
    {
        "uid": "HUIR",
        "name": "Jurong",
        "full_name": "Jurong, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.729973 1.329377)"
    },
    {
        "uid": "ZJN6",
        "name": "Yishun",
        "full_name": "Yishun, Singapore, Singapore",
        "country_code": "SG",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.836899 1.414836)"
    },
    {
        "uid": "NI6H",
        "name": "Genting Sempah",
        "full_name": "Genting Sempah, Bukit Tinggi, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.790848 3.350833)"
    },
    {
        "uid": "KF8Z",
        "name": "Bandar Meru Raya",
        "full_name": "Bandar Meru Raya, Ipoh, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.071594 4.671031)"
    },
    {
        "uid": "ILIK",
        "name": "Padang Rengas",
        "full_name": "Padang Rengas, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.865135 4.780007)"
    },
    {
        "uid": "72OP",
        "name": "Kampong Salulong",
        "full_name": "Kampong Salulong, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(117.1203 6.121955)"
    },
    {
        "uid": "69JY",
        "name": "Bintangor",
        "full_name": "Bintangor, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(111.630768 2.206675)"
    },
    {
        "uid": "DOQN",
        "name": "Binatang",
        "full_name": "Binatang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(111.626404 2.159993)"
    },
    {
        "uid": "6UFM",
        "name": "Ketengah Jaya",
        "full_name": "Ketengah Jaya, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.283333 4.583333)"
    },
    {
        "uid": "4EAF",
        "name": "Pengerang",
        "full_name": "Pengerang, Bandar Penawar, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(104.163208 1.372926)"
    },
    {
        "uid": "XSIO",
        "name": "Lenggeng",
        "full_name": "Lenggeng, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.942398 2.8558)"
    },
    {
        "uid": "CJL2",
        "name": "Gemia Island",
        "full_name": "Gemia Island, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.263336 5.233617)"
    },
    {
        "uid": "Z5AS",
        "name": "Gumut",
        "full_name": "Gumut, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.75 3.616667)"
    },
    {
        "uid": "FBKA",
        "name": "Pokok Sena",
        "full_name": "Pokok Sena, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.560951 6.116828)"
    },
    {
        "uid": "5M58",
        "name": "Ayer Lanas",
        "full_name": "Ayer Lanas, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.906433 5.809164)"
    },
    {
        "uid": "WG61",
        "name": "Selising",
        "full_name": "Selising, Melor, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.333336 5.9)"
    },
    {
        "uid": "GJY3",
        "name": "Titi",
        "full_name": "Titi, Kuala Klawang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.078529 3.063314)"
    },
    {
        "uid": "58V4",
        "name": "Dong",
        "full_name": "Dong, Raub, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.916496 3.911891)"
    },
    {
        "uid": "CE8P",
        "name": "Kuala Krau",
        "full_name": "Kuala Krau, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.406067 3.646255)"
    },
    {
        "uid": "86OT",
        "name": "Selama",
        "full_name": "Selama, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.692093 5.184662)"
    },
    {
        "uid": "2W8M",
        "name": "Sauk",
        "full_name": "Sauk, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.916702 4.9333)"
    },
    {
        "uid": "9PII",
        "name": "Tamau",
        "full_name": "Tamau, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(116.418098 6.403843)"
    },
    {
        "uid": "LZNE",
        "name": "Kuala Baram",
        "full_name": "Kuala Baram, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(113.982597 4.586751)"
    },
    {
        "uid": "Q1VU",
        "name": "Kuala Kerau",
        "full_name": "Kuala Kerau, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.399048 3.637189)"
    },
    {
        "uid": "467Z",
        "name": "Sega",
        "full_name": "Sega, Kuala Lipis, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.931183 4.043634)"
    },
    {
        "uid": "GNK1",
        "name": "Kuala Nyabor",
        "full_name": "Kuala Nyabor, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(114.092003 4.146984)"
    },
    {
        "uid": "FQE0",
        "name": "Simunjan",
        "full_name": "Simunjan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(110.744682 1.290323)"
    },
    {
        "uid": "ZS96",
        "name": "Jeniang",
        "full_name": "Jeniang, Gurun, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.647835 5.876334)"
    },
    {
        "uid": "6APD",
        "name": "Kampong Changkat Kereta",
        "full_name": "Kampong Changkat Kereta, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.23333 3.783333)"
    },
    {
        "uid": "HU8F",
        "name": "Kampong Batu Balai",
        "full_name": "Kampong Batu Balai, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.156128 3.972346)"
    },
    {
        "uid": "76S2",
        "name": "Kampung Badok",
        "full_name": "Kampung Badok, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.440926 3.53448)"
    },
    {
        "uid": "KW2B",
        "name": "Kampung Bentan",
        "full_name": "Kampung Bentan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.400612 3.576439)"
    },
    {
        "uid": "FCX2",
        "name": "Kampung Budu",
        "full_name": "Kampung Budu, Kuala Lipis, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.990448 3.992297)"
    },
    {
        "uid": "3T7B",
        "name": "Kampung Bukit Ketupat",
        "full_name": "Kampung Bukit Ketupat, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.386482 3.810637)"
    },
    {
        "uid": "NPBF",
        "name": "Pulau Batu Merah",
        "full_name": "Pulau Batu Merah, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(99.76271800000001 6.213205)"
    },
    {
        "uid": "IWDI",
        "name": "Pulau Tinggi",
        "full_name": "Pulau Tinggi, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(104.126694 2.301533)"
    },
    {
        "uid": "PZN1",
        "name": "Pamol",
        "full_name": "Pamol, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(117.451622 5.93782)"
    },
    {
        "uid": "N49B",
        "name": "Karambunai",
        "full_name": "Karambunai, Kota Kinabalu, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(116.102303 6.112131)"
    },
    {
        "uid": "UBF1",
        "name": "Tuaran",
        "full_name": "Tuaran, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(116.205383 6.186121)"
    },
    {
        "uid": "T3BM",
        "name": "Sitiawan",
        "full_name": "Sitiawan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.720245 4.213616)"
    },
    {
        "uid": "N6TQ",
        "name": "Kampung Sepetang",
        "full_name": "Kampung Sepetang, Kuala Sepetang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.633003 4.83333)"
    },
    {
        "uid": "BE30",
        "name": "Bagan Serai",
        "full_name": "Bagan Serai, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.53334 5.013934)"
    },
    {
        "uid": "IRB2",
        "name": "Kampung Tempoyak",
        "full_name": "Kampung Tempoyak, Kuala Nerang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.536644 6.22076)"
    },
    {
        "uid": "XBUF",
        "name": "Kampung Tok Keling",
        "full_name": "Kampung Tok Keling, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.531013 6.147699)"
    },
    {
        "uid": "8RQE",
        "name": "Kampung Wang Perah",
        "full_name": "Kampung Wang Perah, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.475327 6.374793)"
    },
    {
        "uid": "7OU4",
        "name": "Kampung Kuala Dulang Kechil",
        "full_name": "Kampung Kuala Dulang Kechil, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.380669 5.852209)"
    },
    {
        "uid": "PXG7",
        "name": "Kampong Sungai Pasir",
        "full_name": "Kampong Sungai Pasir, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.469513 5.616758)"
    },
    {
        "uid": "J8V4",
        "name": "Kampong Charok Kelian",
        "full_name": "Kampong Charok Kelian, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.8451 5.700008)"
    },
    {
        "uid": "AB37",
        "name": "Kampong Suka Menanti",
        "full_name": "Kampong Suka Menanti, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.359612 6.158905)"
    },
    {
        "uid": "NQIR",
        "name": "Kampung Alor Mengkudu",
        "full_name": "Kampung Alor Mengkudu, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.379272 6.090218)"
    },
    {
        "uid": "5OZ0",
        "name": "Felda Lubuk Merbau",
        "full_name": "Felda Lubuk Merbau, Kuala Nerang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.744507 6.051891)"
    },
    {
        "uid": "TH2Y",
        "name": "Kampung Alor Senjaya",
        "full_name": "Kampung Alor Senjaya, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.379265 6.187275)"
    },
    {
        "uid": "MUOH",
        "name": "Kampung Bohor",
        "full_name": "Kampung Bohor, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.403839 6.174375)"
    },
    {
        "uid": "E8R5",
        "name": "Kampung Gelam",
        "full_name": "Kampung Gelam, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.434036 6.098687)"
    },
    {
        "uid": "Z989",
        "name": "Kampung Guar Sanji",
        "full_name": "Kampung Guar Sanji, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.274734 6.420564)"
    },
    {
        "uid": "CLIJ",
        "name": "Kampung Hutan Gelam",
        "full_name": "Kampung Hutan Gelam, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.456512 6.119134)"
    },
    {
        "uid": "RW2L",
        "name": "Kampung Jenalik",
        "full_name": "Kampung Jenalik, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.922783 5.339092)"
    },
    {
        "uid": "YWWQ",
        "name": "Kampung Kepala Bukit",
        "full_name": "Kampung Kepala Bukit, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.476891 6.119388)"
    },
    {
        "uid": "81T2",
        "name": "Kampung Pinang Tunggal",
        "full_name": "Kampung Pinang Tunggal, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.541977 5.562862)"
    },
    {
        "uid": "F3OV",
        "name": "Kampung Lebai Ali",
        "full_name": "Kampung Lebai Ali, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.535568 5.735464)"
    },
    {
        "uid": "TXAG",
        "name": "Kampung Kualasungai",
        "full_name": "Kampung Kualasungai, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.321945 6.15)"
    },
    {
        "uid": "IMW9",
        "name": "Kampung Parit",
        "full_name": "Kampung Parit, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.763863 5.553544)"
    },
    {
        "uid": "9J7U",
        "name": "Kampung Pengkalan Kakap",
        "full_name": "Kampung Pengkalan Kakap, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.389793 5.703381)"
    },
    {
        "uid": "V0M0",
        "name": "Kampung Pokok Puluh",
        "full_name": "Kampung Pokok Puluh, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.566666 6.133333)"
    },
    {
        "uid": "V9I6",
        "name": "Kampung Selarong Batang",
        "full_name": "Kampung Selarong Batang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.397522 6.002879)"
    },
    {
        "uid": "E2BT",
        "name": "Kampung Temenggong",
        "full_name": "Kampung Temenggong, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.407349 6.105732)"
    },
    {
        "uid": "SMW2",
        "name": "Kampung Tambak Bunga",
        "full_name": "Kampung Tambak Bunga, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.348389 6.101652)"
    },
    {
        "uid": "S8OR",
        "name": "Kampung Tok Tambak",
        "full_name": "Kampung Tok Tambak, Ayer Hitam, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.309097 6.314304)"
    },
    {
        "uid": "WHEK",
        "name": "Kampung Tanjong Putus",
        "full_name": "Kampung Tanjong Putus, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.463539 6.232682)"
    },
    {
        "uid": "76SD",
        "name": "Naka",
        "full_name": "Naka, Kuala Nerang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.656258 6.133459)"
    },
    {
        "uid": "6WU8",
        "name": "Parit Nibong",
        "full_name": "Parit Nibong, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.532425 5.110854)"
    },
    {
        "uid": "69G7",
        "name": "Kampung Berangan",
        "full_name": "Kampung Berangan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.239059 6.007413)"
    },
    {
        "uid": "BCJK",
        "name": "Titi Serong",
        "full_name": "Titi Serong, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.40033 5.828449)"
    },
    {
        "uid": "3BEJ",
        "name": "Kampung Ayer Asahan",
        "full_name": "Kampung Ayer Asahan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.982597 5.809185)"
    },
    {
        "uid": "99M5",
        "name": "Kampung Bunohan",
        "full_name": "Kampung Bunohan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.116112 6.184169)"
    },
    {
        "uid": "LK9M",
        "name": "Kampung Bunut Susu",
        "full_name": "Kampung Bunut Susu, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.171135 6.096508)"
    },
    {
        "uid": "KOWN",
        "name": "Kampung Seberang Baroh",
        "full_name": "Kampung Seberang Baroh, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.151123 6.141122)"
    },
    {
        "uid": "1XMI",
        "name": "Kampung Tok Saboh",
        "full_name": "Kampung Tok Saboh, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.526215 5.824406)"
    },
    {
        "uid": "WMRD",
        "name": "Kampong Haji Abdullah Hukum",
        "full_name": "Kampong Haji Abdullah Hukum, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.683296 3.1167)"
    },
    {
        "uid": "YP5L",
        "name": "Taman Bandaraya",
        "full_name": "Taman Bandaraya, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.669136 3.14147)"
    },
    {
        "uid": "9UOV",
        "name": "Kampung Gadong Jaya",
        "full_name": "Kampung Gadong Jaya, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.836433 2.703167)"
    },
    {
        "uid": "VIN7",
        "name": "Kampung Kuala Lukut",
        "full_name": "Kampung Kuala Lukut, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.787987 2.584419)"
    },
    {
        "uid": "AVDG",
        "name": "Kampung Paroi",
        "full_name": "Kampung Paroi, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.995445 2.721675)"
    },
    {
        "uid": "4VUE",
        "name": "Kampung Petaling",
        "full_name": "Kampung Petaling, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.06469 2.949815)"
    },
    {
        "uid": "9AOA",
        "name": "Kampung Ranjau Hantu",
        "full_name": "Kampung Ranjau Hantu, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.23333 2.766666)"
    },
    {
        "uid": "C2YO",
        "name": "Kampung Tebat Kening",
        "full_name": "Kampung Tebat Kening, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.247643 2.733101)"
    },
    {
        "uid": "7H6I",
        "name": "Kampung Titian Bintangor",
        "full_name": "Kampung Titian Bintangor, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.098969 2.460259)"
    },
    {
        "uid": "GZ44",
        "name": "Rahang Kechil",
        "full_name": "Rahang Kechil, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.956741 2.708821)"
    },
    {
        "uid": "4GP5",
        "name": "Kampung Baharu Sempalit Hilir",
        "full_name": "Kampung Baharu Sempalit Hilir, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.874916 3.800488)"
    },
    {
        "uid": "M3SF",
        "name": "Kampung Berkelah",
        "full_name": "Kampung Berkelah, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(102.96946 3.710182)"
    },
    {
        "uid": "ZDJ5",
        "name": "Mines City",
        "full_name": "Mines City, Seri Kembangan, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.716835 3.037625)"
    },
    {
        "uid": "Z82B",
        "name": "Sungkai",
        "full_name": "Sungkai, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.324707 3.974016)"
    },
    {
        "uid": "Z2AH",
        "name": "Sungai Bakap",
        "full_name": "Sungai Bakap, Sungai Jawi, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.5 5.21667)"
    },
    {
        "uid": "DKIU",
        "name": "Sintuk",
        "full_name": "Sintuk, Changlun, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.516998 6.43333)"
    },
    {
        "uid": "16DY",
        "name": "Pusing",
        "full_name": "Pusing, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.016998 4.5)"
    },
    {
        "uid": "E45W",
        "name": "Pulau Tuba",
        "full_name": "Pulau Tuba, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(99.840706 6.236594)"
    },
    {
        "uid": "XP7F",
        "name": "Taman Seraya",
        "full_name": "Taman Seraya, Ampang, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.7575 3.1215)"
    },
    {
        "uid": "KSBX",
        "name": "Air Papan",
        "full_name": "Air Papan, Mersing, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(103.833099 2.515699)"
    },
    {
        "uid": "R28U",
        "name": "Chenderong Balai",
        "full_name": "Chenderong Balai, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.051018 4.118427)"
    },
    {
        "uid": "G5F5",
        "name": "Guar Chempedak",
        "full_name": "Guar Chempedak, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.457108 5.87379)"
    },
    {
        "uid": "T8FQ",
        "name": "Padang Tengku",
        "full_name": "Padang Tengku, Kuala Lipis, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(101.980698 4.338011)"
    },
    {
        "uid": "8DT9",
        "name": "Changkat Jering",
        "full_name": "Changkat Jering, Malaysia",
        "country_code": "MY",
        "state": "",
        "lonlat": "SRID=4326;POINT(100.747246 4.777969)"
    },
    {
        "uid": "XI8Z",
        "name": "Stanwell Tops",
        "full_name": "Stanwell Tops, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.973877 -34.220165)"
    },
    {
        "uid": "9KU5",
        "name": "Bannockburn",
        "full_name": "Bannockburn, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.171967 -38.0457)"
    },
    {
        "uid": "3MDG",
        "name": "Long Island",
        "full_name": "Long Island, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(148.857529 -20.361721)"
    },
    {
        "uid": "IRI8",
        "name": "Corowa",
        "full_name": "Corowa, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.356171 -35.998627)"
    },
    {
        "uid": "37KB",
        "name": "Corryong",
        "full_name": "Corryong, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.906158 -36.186825)"
    },
    {
        "uid": "DLB5",
        "name": "Derwent Bridge",
        "full_name": "Derwent Bridge, Tasmania, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.247437 -42.131649)"
    },
    {
        "uid": "5YZM",
        "name": "Blackwood Forest",
        "full_name": "Blackwood Forest, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.616669 -38.5)"
    },
    {
        "uid": "97CB",
        "name": "Yengarie",
        "full_name": "Yengarie, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.592453 -25.543222)"
    },
    {
        "uid": "CHAE",
        "name": "Pine Valley",
        "full_name": "Pine Valley, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.062469 -36.249111)"
    },
    {
        "uid": "OHRT",
        "name": "Tuncurry",
        "full_name": "Tuncurry, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.485703 -32.16053)"
    },
    {
        "uid": "SCSY",
        "name": "Edgecliff",
        "full_name": "Edgecliff, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.236511 -33.879398)"
    },
    {
        "uid": "EJX4",
        "name": "Blair Athol",
        "full_name": "Blair Athol, Clermont, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.54213 -22.699308)"
    },
    {
        "uid": "WRHS",
        "name": "Williamtown",
        "full_name": "Williamtown, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.838821 -32.805023)"
    },
    {
        "uid": "MUUZ",
        "name": "Monduran",
        "full_name": "Monduran, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.891159 -24.854233)"
    },
    {
        "uid": "GW95",
        "name": "Eraring",
        "full_name": "Eraring, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.533295 -33.083302)"
    },
    {
        "uid": "D7CL",
        "name": "Daceyville",
        "full_name": "Daceyville, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.233307 -33.9333)"
    },
    {
        "uid": "PA45",
        "name": "Bexhill",
        "full_name": "Bexhill, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.350006 -28.766701)"
    },
    {
        "uid": "YLQB",
        "name": "Brownsville",
        "full_name": "Brownsville, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.811172 -34.482719)"
    },
    {
        "uid": "IIE9",
        "name": "Caloola",
        "full_name": "Caloola, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.433304 -33.599998)"
    },
    {
        "uid": "VCUU",
        "name": "Canoelands",
        "full_name": "Canoelands, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.066696 -33.5)"
    },
    {
        "uid": "SBC1",
        "name": "Duncans Creek",
        "full_name": "Duncans Creek, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.199997 -31.366699)"
    },
    {
        "uid": "NPDO",
        "name": "Huntley",
        "full_name": "Huntley, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.133301 -33.366699)"
    },
    {
        "uid": "NR5E",
        "name": "Stroud",
        "full_name": "Stroud, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.006638 -32.368034)"
    },
    {
        "uid": "SISO",
        "name": "Merrilla",
        "full_name": "Merrilla, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.550003 -34.733299)"
    },
    {
        "uid": "CQHA",
        "name": "Galston",
        "full_name": "Galston, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.050003 -33.650002)"
    },
    {
        "uid": "BSP4",
        "name": "Gwynneville",
        "full_name": "Gwynneville, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.883163 -34.414967)"
    },
    {
        "uid": "I1XR",
        "name": "Harefield",
        "full_name": "Harefield, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.533295 -34.966702)"
    },
    {
        "uid": "N590",
        "name": "Glengowrie",
        "full_name": "Glengowrie, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.533508 -34.98724)"
    },
    {
        "uid": "82PS",
        "name": "Glenorchy",
        "full_name": "Glenorchy, Tasmania, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.2715 -42.832848)"
    },
    {
        "uid": "KPBM",
        "name": "Laverton",
        "full_name": "Laverton, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.767487 -37.859188)"
    },
    {
        "uid": "BUD9",
        "name": "Mount Evelyn",
        "full_name": "Mount Evelyn, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.389084 -37.787823)"
    },
    {
        "uid": "O4QL",
        "name": "Naringal",
        "full_name": "Naringal, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.720062 -38.397881)"
    },
    {
        "uid": "QV45",
        "name": "Sherbrooke",
        "full_name": "Sherbrooke, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.359222 -37.886883)"
    },
    {
        "uid": "FCK5",
        "name": "Coogee",
        "full_name": "Coogee, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(115.765335 -32.122353)"
    },
    {
        "uid": "G4LV",
        "name": "Wooroloo",
        "full_name": "Wooroloo, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(116.320686 -31.804224)"
    },
    {
        "uid": "ZKLI",
        "name": "Point Piper",
        "full_name": "Point Piper, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.251648 -33.867344)"
    },
    {
        "uid": "QPN7",
        "name": "Yelgun",
        "full_name": "Yelgun, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.516693 -28.483299)"
    },
    {
        "uid": "A171",
        "name": "Rosebank",
        "full_name": "Rosebank, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.399994 -28.6667)"
    },
    {
        "uid": "OVDI",
        "name": "Sodwalls",
        "full_name": "Sodwalls, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.983307 -33.516701)"
    },
    {
        "uid": "O9UC",
        "name": "Williamsdale",
        "full_name": "Williamsdale, Australian Capital Territory, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.133301 -35.5667)"
    },
    {
        "uid": "6AQO",
        "name": "Southgate",
        "full_name": "Southgate, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.005585 -29.602562)"
    },
    {
        "uid": "F859",
        "name": "Cunningham",
        "full_name": "Cunningham, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.850006 -28.15)"
    },
    {
        "uid": "KX44",
        "name": "Tregeagle",
        "full_name": "Tregeagle, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.366699 -28.85)"
    },
    {
        "uid": "X3X1",
        "name": "Antigua",
        "full_name": "Antigua, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.600006 -25.633301)"
    },
    {
        "uid": "LYUK",
        "name": "Allan",
        "full_name": "Allan, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.949997 -28.200001)"
    },
    {
        "uid": "MIQS",
        "name": "Berajondo",
        "full_name": "Berajondo, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.833298 -24.633301)"
    },
    {
        "uid": "DJ21",
        "name": "Kybong",
        "full_name": "Kybong, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.716705 -26.3167)"
    },
    {
        "uid": "GX36",
        "name": "Marian",
        "full_name": "Marian, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(148.933304 -21.15)"
    },
    {
        "uid": "URWB",
        "name": "Mount Jukes East",
        "full_name": "Mount Jukes East, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(148.966705 -21.016701)"
    },
    {
        "uid": "814Y",
        "name": "Quorn",
        "full_name": "Quorn, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.05098 -32.365887)"
    },
    {
        "uid": "HH6J",
        "name": "Gladstone",
        "full_name": "Gladstone, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.369949 -33.267281)"
    },
    {
        "uid": "9JLR",
        "name": "Crabbes Creek",
        "full_name": "Crabbes Creek, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.484039 -28.461641)"
    },
    {
        "uid": "I2EL",
        "name": "South Wharf",
        "full_name": "South Wharf, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.951523 -37.825989)"
    },
    {
        "uid": "EIJW",
        "name": "Mackay Harbour",
        "full_name": "Mackay Harbour, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(149.216476 -21.114622)"
    },
    {
        "uid": "A8D1",
        "name": "Chinderah",
        "full_name": "Chinderah, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.539001 -28.252449)"
    },
    {
        "uid": "VL6A",
        "name": "Nemingha",
        "full_name": "Nemingha, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.005081 -31.117132)"
    },
    {
        "uid": "8QNA",
        "name": "Barrow Island",
        "full_name": "Barrow Island, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(115.397697 -20.792805)"
    },
    {
        "uid": "7W00",
        "name": "Meningie",
        "full_name": "Meningie, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.373703 -35.731968)"
    },
    {
        "uid": "9V4L",
        "name": "Piangil",
        "full_name": "Piangil, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.218689 -35.046726)"
    },
    {
        "uid": "C5T0",
        "name": "Hawthorn",
        "full_name": "Hawthorn, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.031921 -37.824928)"
    },
    {
        "uid": "2O7E",
        "name": "Glen Aplin",
        "full_name": "Glen Aplin, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.880081 -28.737495)"
    },
    {
        "uid": "O9PN",
        "name": "Oxley",
        "full_name": "Oxley, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.377563 -36.448586)"
    },
    {
        "uid": "PFWF",
        "name": "Mintaro",
        "full_name": "Mintaro, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.750977 -33.927952)"
    },
    {
        "uid": "MLO2",
        "name": "Goodna",
        "full_name": "Goodna, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.89296 -27.611393)"
    },
    {
        "uid": "NZRC",
        "name": "Port Lincoln",
        "full_name": "Port Lincoln, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.847107 -34.736881)"
    },
    {
        "uid": "KLL4",
        "name": "Westmead",
        "full_name": "Westmead, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.986328 -33.80854)"
    },
    {
        "uid": "VFH0",
        "name": "Parndana",
        "full_name": "Parndana, South Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.256485 -35.781727)"
    },
    {
        "uid": "FCFS",
        "name": "Ascot Vale",
        "full_name": "Ascot Vale, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.914093 -37.776833)"
    },
    {
        "uid": "VJ3R",
        "name": "Carlton North",
        "full_name": "Carlton North, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.969055 -37.786942)"
    },
    {
        "uid": "EQSK",
        "name": "Attwood",
        "full_name": "Attwood, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.885162 -37.670143)"
    },
    {
        "uid": "WL6D",
        "name": "Fingal Head",
        "full_name": "Fingal Head, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.560471 -28.200102)"
    },
    {
        "uid": "XPNY",
        "name": "Palm Island",
        "full_name": "Palm Island, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.618271 -18.735294)"
    },
    {
        "uid": "Q96W",
        "name": "Morley",
        "full_name": "Morley, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(115.910637 -31.887327)"
    },
    {
        "uid": "UCJ2",
        "name": "Stephen Island",
        "full_name": "Stephen Island, Torres Shire, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.572495 -9.5185)"
    },
    {
        "uid": "ZS4C",
        "name": "St. Pauls",
        "full_name": "St. Pauls, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.327194 -10.184545)"
    },
    {
        "uid": "N8HR",
        "name": "Smithton",
        "full_name": "Smithton, Tasmania, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.125458 -40.826332)"
    },
    {
        "uid": "N1IE",
        "name": "South Molle Island",
        "full_name": "South Molle Island, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(148.838272 -20.269367)"
    },
    {
        "uid": "83HX",
        "name": "Kurnell",
        "full_name": "Kurnell, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(151.190887 -34.023331)"
    },
    {
        "uid": "WOZB",
        "name": "King Scrub",
        "full_name": "King Scrub, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.821472 -27.169876)"
    },
    {
        "uid": "YP1U",
        "name": "Hotham Heights",
        "full_name": "Hotham Heights, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.154205 -37.00547)"
    },
    {
        "uid": "DVH6",
        "name": "Tocumwal",
        "full_name": "Tocumwal, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.522385 -35.782494)"
    },
    {
        "uid": "2HP7",
        "name": "Morawa",
        "full_name": "Morawa, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(116.001144 -29.206606)"
    },
    {
        "uid": "Z9VE",
        "name": "Yam Island",
        "full_name": "Yam Island, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.768494 -9.901999999999999)"
    },
    {
        "uid": "S89Q",
        "name": "Helensvale",
        "full_name": "Helensvale, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.336319 -27.901869)"
    },
    {
        "uid": "LJX9",
        "name": "Paradise",
        "full_name": "Paradise, Tasmania, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.324387 -41.421627)"
    },
    {
        "uid": "WASW",
        "name": "Koroit",
        "full_name": "Koroit, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.37915 -38.265038)"
    },
    {
        "uid": "JIB6",
        "name": "Sussex Inlet",
        "full_name": "Sussex Inlet, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.56189 -35.142529)"
    },
    {
        "uid": "Z4GU",
        "name": "Harrington",
        "full_name": "Harrington, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.670242 -31.869795)"
    },
    {
        "uid": "VDVT",
        "name": "Wahgunyah",
        "full_name": "Wahgunyah, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(146.423172 -36.002121)"
    },
    {
        "uid": "6191",
        "name": "Kambalda",
        "full_name": "Kambalda, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(121.634003 -31.193501)"
    },
    {
        "uid": "CXFZ",
        "name": "Bangalow",
        "full_name": "Bangalow, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(153.521805 -28.683607)"
    },
    {
        "uid": "107J",
        "name": "Munster",
        "full_name": "Munster, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(115.79081 -32.13916)"
    },
    {
        "uid": "RZS7",
        "name": "Innes Park",
        "full_name": "Innes Park, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.467819 -24.868177)"
    },
    {
        "uid": "2CY9",
        "name": "Dartmoor",
        "full_name": "Dartmoor, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.274902 -37.922249)"
    },
    {
        "uid": "4B7C",
        "name": "Eumundi",
        "full_name": "Eumundi, Queensland, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(152.957169 -26.472975)"
    },
    {
        "uid": "6G68",
        "name": "Pennyroyal",
        "full_name": "Pennyroyal, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.872345 -38.440643)"
    },
    {
        "uid": "SMDH",
        "name": "Melton Mowbray",
        "full_name": "Melton Mowbray, Tasmania, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(147.23291 -42.447933)"
    },
    {
        "uid": "9BC0",
        "name": "Lansvale",
        "full_name": "Lansvale, New South Wales, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(150.963181 -33.90181)"
    },
    {
        "uid": "6QVH",
        "name": "Kew",
        "full_name": "Kew, Victoria, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.034607 -37.803577)"
    },
    {
        "uid": "QYUF",
        "name": "Bicton",
        "full_name": "Bicton, Western Australia, Australia",
        "country_code": "AU",
        "state": "",
        "lonlat": "SRID=4326;POINT(115.785645 -32.02541)"
    },
    {
        "uid": "TBWG",
        "name": "Honjima Island",
        "full_name": "Honjima Island, Sakaide, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.767563 34.385651)"
    },
    {
        "uid": "6KVB",
        "name": "Toon",
        "full_name": "Toon, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.9263 33.802704)"
    },
    {
        "uid": "KW40",
        "name": "Narai-juku",
        "full_name": "Narai-juku, Shiojiri, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.813644 35.965919)"
    },
    {
        "uid": "HQKD",
        "name": "Oshika",
        "full_name": "Oshika, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.074127 35.55817)"
    },
    {
        "uid": "NLKH",
        "name": "Teradomari",
        "full_name": "Teradomari, Nagaoka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.798279 37.623981)"
    },
    {
        "uid": "B89D",
        "name": "Takahata",
        "full_name": "Takahata, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.216019 37.990162)"
    },
    {
        "uid": "BNJZ",
        "name": "Ajigasawa",
        "full_name": "Ajigasawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.185928 40.658058)"
    },
    {
        "uid": "HHDD",
        "name": "Taramajima",
        "full_name": "Taramajima, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(124.703987 24.652424)"
    },
    {
        "uid": "4V7P",
        "name": "Tsushima",
        "full_name": "Tsushima, Uwajima, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.520615 33.121735)"
    },
    {
        "uid": "1Y35",
        "name": "Atsumi",
        "full_name": "Atsumi, Tsuruoka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.606232 38.614021)"
    },
    {
        "uid": "Q4SN",
        "name": "Okuma",
        "full_name": "Okuma, Kunigami, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(128.201874 26.723404)"
    },
    {
        "uid": "HOCK",
        "name": "Tokunoshima",
        "full_name": "Tokunoshima, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(129.066376 27.830753)"
    },
    {
        "uid": "UPLW",
        "name": "Shirahama",
        "full_name": "Shirahama, Shimoda, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.968323 34.701263)"
    },
    {
        "uid": "HW7R",
        "name": "Osatsucho",
        "full_name": "Osatsucho, Toba, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.90242 34.396667)"
    },
    {
        "uid": "9RDO",
        "name": "Utsunomiya",
        "full_name": "Utsunomiya, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.88681 36.596733)"
    },
    {
        "uid": "GVMA",
        "name": "Samani",
        "full_name": "Samani, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.045624 42.150608)"
    },
    {
        "uid": "UIBJ",
        "name": "Naruko",
        "full_name": "Naruko, Osaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.718643 38.745941)"
    },
    {
        "uid": "QI41",
        "name": "Utoro",
        "full_name": "Utoro, Shari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.995499 44.066502)"
    },
    {
        "uid": "8LSL",
        "name": "Niihama",
        "full_name": "Niihama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.324493 33.917755)"
    },
    {
        "uid": "S6U3",
        "name": "Awaji",
        "full_name": "Awaji, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.903793 34.433792)"
    },
    {
        "uid": "Q8HY",
        "name": "Shinchi",
        "full_name": "Shinchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.902328 37.866798)"
    },
    {
        "uid": "R4V2",
        "name": "Itoman",
        "full_name": "Itoman, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(127.682732 26.111385)"
    },
    {
        "uid": "5NS5",
        "name": "Meiwa",
        "full_name": "Meiwa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.627853 34.553368)"
    },
    {
        "uid": "QUPP",
        "name": "Ogasawara",
        "full_name": "Ogasawara, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.332993 25.612362)"
    },
    {
        "uid": "2S6V",
        "name": "Shimosuwa",
        "full_name": "Shimosuwa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.111862 36.111244)"
    },
    {
        "uid": "V28U",
        "name": "Sakahogi-mura",
        "full_name": "Sakahogi-mura, Sakahogi-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.983337 35.433331)"
    },
    {
        "uid": "PVQJ",
        "name": "Hachirougata",
        "full_name": "Hachirougata, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.083328 39.933331)"
    },
    {
        "uid": "I6NM",
        "name": "Akabira-shi",
        "full_name": "Akabira-shi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.062805 43.567902)"
    },
    {
        "uid": "IGAX",
        "name": "Morai",
        "full_name": "Morai, Ishikari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.419174 43.307781)"
    },
    {
        "uid": "S0FD",
        "name": "Yasuoka-mura",
        "full_name": "Yasuoka-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.850006 35.366669)"
    },
    {
        "uid": "933L",
        "name": "Motomari",
        "full_name": "Motomari, Muroran, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.983337 42.299999)"
    },
    {
        "uid": "PTHN",
        "name": "Tobutsu",
        "full_name": "Tobutsu, Toyokoro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.503906 42.851898)"
    },
    {
        "uid": "62R0",
        "name": "Katori-shi",
        "full_name": "Katori-shi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.499435 35.897671)"
    },
    {
        "uid": "5WHT",
        "name": "Ebeotsu",
        "full_name": "Ebeotsu, Takikawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.938065 43.621391)"
    },
    {
        "uid": "3Z52",
        "name": "Erimo",
        "full_name": "Erimo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.218948 42.037342)"
    },
    {
        "uid": "UMCQ",
        "name": "Taiho",
        "full_name": "Taiho, Ogimi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(128.126114 26.648975)"
    },
    {
        "uid": "C61C",
        "name": "Urasaki",
        "full_name": "Urasaki, Motobu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(127.893982 26.677605)"
    },
    {
        "uid": "H1E5",
        "name": "Taira",
        "full_name": "Taira, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(125.283302 24.799999)"
    },
    {
        "uid": "CJ1A",
        "name": "Isumi",
        "full_name": "Isumi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.401672 35.233582)"
    },
    {
        "uid": "A0AX",
        "name": "Iyo",
        "full_name": "Iyo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.706512 33.754459)"
    },
    {
        "uid": "LBT3",
        "name": "Kinokawa",
        "full_name": "Kinokawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.36261 34.269505)"
    },
    {
        "uid": "XAIR",
        "name": "Kunohe-mura",
        "full_name": "Kunohe-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.433472 40.196232)"
    },
    {
        "uid": "M4MG",
        "name": "Shirakawa-cho",
        "full_name": "Shirakawa-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.187958 35.582031)"
    },
    {
        "uid": "UIWL",
        "name": "Yaotsu-cho",
        "full_name": "Yaotsu-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.149994 35.466671)"
    },
    {
        "uid": "WV6D",
        "name": "Shitara-cho",
        "full_name": "Shitara-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.566666 35.099998)"
    },
    {
        "uid": "6AHJ",
        "name": "Toei-cho",
        "full_name": "Toei-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.690277 35.08963)"
    },
    {
        "uid": "VSQU",
        "name": "Isinomaki",
        "full_name": "Isinomaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.41246 38.435055)"
    },
    {
        "uid": "N55O",
        "name": "Natori",
        "full_name": "Natori, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.997864 38.140083)"
    },
    {
        "uid": "7HIT",
        "name": "Kisarazu",
        "full_name": "Kisarazu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.982086 35.370167)"
    },
    {
        "uid": "J2UO",
        "name": "Toyako",
        "full_name": "Toyako, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.82341 42.619511)"
    },
    {
        "uid": "GUVJ",
        "name": "Makuhari",
        "full_name": "Makuhari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.024918 35.658146)"
    },
    {
        "uid": "EXVY",
        "name": "Sue",
        "full_name": "Sue, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.519516 33.592705)"
    },
    {
        "uid": "DHMK",
        "name": "Imakane",
        "full_name": "Imakane, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.094635 42.443768)"
    },
    {
        "uid": "C647",
        "name": "Manago",
        "full_name": "Manago, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.199997 33.433331)"
    },
    {
        "uid": "JDR1",
        "name": "Honokizawa",
        "full_name": "Honokizawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.350006 37.833328)"
    },
    {
        "uid": "DNIV",
        "name": "Odaira",
        "full_name": "Odaira, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.068436 37.394901)"
    },
    {
        "uid": "I59A",
        "name": "Kanahashi",
        "full_name": "Kanahashi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.916702 37.583302)"
    },
    {
        "uid": "QRUW",
        "name": "Onogawa",
        "full_name": "Onogawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.116669 37.683331)"
    },
    {
        "uid": "NS3P",
        "name": "Kubota",
        "full_name": "Kubota, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.766693 36.883301)"
    },
    {
        "uid": "J1B2",
        "name": "Chashinai",
        "full_name": "Chashinai, Bibai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.866669 43.366669)"
    },
    {
        "uid": "CN2G",
        "name": "Utsubo",
        "full_name": "Utsubo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.183334 36.383331)"
    },
    {
        "uid": "EHGC",
        "name": "Toyohoro",
        "full_name": "Toyohoro, Kuromatsunai-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.366669 42.633331)"
    },
    {
        "uid": "PJQ2",
        "name": "Honcho",
        "full_name": "Honcho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.151001 42.008099)"
    },
    {
        "uid": "T9DY",
        "name": "Hayashida",
        "full_name": "Hayashida, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.583298 34.900002)"
    },
    {
        "uid": "GC33",
        "name": "Kamiyamada",
        "full_name": "Kamiyamada, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.366699 31.366699)"
    },
    {
        "uid": "MZBG",
        "name": "Kawamukai",
        "full_name": "Kawamukai, Hidaka-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.033325 42.51667)"
    },
    {
        "uid": "WIXX",
        "name": "Hayashida-cho",
        "full_name": "Hayashida-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.600006 34.900002)"
    },
    {
        "uid": "FR6R",
        "name": "Kiire-cho",
        "full_name": "Kiire-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.550003 31.366671)"
    },
    {
        "uid": "4ZYX",
        "name": "Nagamochi",
        "full_name": "Nagamochi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.318893 35.350559)"
    },
    {
        "uid": "81DA",
        "name": "Kayano",
        "full_name": "Kayano, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.833328 43.216671)"
    },
    {
        "uid": "M5P9",
        "name": "Yashiro",
        "full_name": "Yashiro, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.966705 34.916698)"
    },
    {
        "uid": "O4OC",
        "name": "Yoneda-cho",
        "full_name": "Yoneda-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.816666 34.783329)"
    },
    {
        "uid": "BI1X",
        "name": "Mime",
        "full_name": "Mime, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.226669 34.525002)"
    },
    {
        "uid": "H06N",
        "name": "Yamawaki",
        "full_name": "Yamawaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.816696 34.116699)"
    },
    {
        "uid": "2KXD",
        "name": "Ichinari",
        "full_name": "Ichinari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.850006 31.58333)"
    },
    {
        "uid": "JP4P",
        "name": "Iikuma",
        "full_name": "Iikuma, Oosaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.037506 31.43417)"
    },
    {
        "uid": "I4AN",
        "name": "Kaneda",
        "full_name": "Kaneda, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.666702 35.166698)"
    },
    {
        "uid": "OBEI",
        "name": "Nisemoto",
        "full_name": "Nisemoto, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.183334 32.75)"
    },
    {
        "uid": "OVN8",
        "name": "Kaneuchi",
        "full_name": "Kaneuchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.949997 32.733299)"
    },
    {
        "uid": "SRY6",
        "name": "Yanagi",
        "full_name": "Yanagi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.433304 32.549999)"
    },
    {
        "uid": "BQ4A",
        "name": "Katagiri",
        "full_name": "Katagiri, Matsukawa-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.883301 35.616699)"
    },
    {
        "uid": "162K",
        "name": "Seba",
        "full_name": "Seba, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.916672 36.083328)"
    },
    {
        "uid": "7OCC",
        "name": "Konoha",
        "full_name": "Konoha, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.616669 32.916672)"
    },
    {
        "uid": "32UC",
        "name": "Natatsuka",
        "full_name": "Natatsuka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.691391 32.886898)"
    },
    {
        "uid": "Q8TX",
        "name": "Tomikura",
        "full_name": "Tomikura, Iiyama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.319809 36.905472)"
    },
    {
        "uid": "MMAO",
        "name": "Hamamoto",
        "full_name": "Hamamoto, Motobu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(127.890427 26.672674)"
    },
    {
        "uid": "G6F3",
        "name": "Tsukawaki",
        "full_name": "Tsukawaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.149994 33.26667)"
    },
    {
        "uid": "UEGW",
        "name": "Yamaura",
        "full_name": "Yamaura, Kunisaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.61644 33.484062)"
    },
    {
        "uid": "2R6K",
        "name": "Fukai",
        "full_name": "Fukai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(124.183296 24.450001)"
    },
    {
        "uid": "MQ6T",
        "name": "Komatsubara",
        "full_name": "Komatsubara, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.166702 33.900002)"
    },
    {
        "uid": "CLFH",
        "name": "Furuichi",
        "full_name": "Furuichi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.100006 34.383301)"
    },
    {
        "uid": "XPMU",
        "name": "Futashika",
        "full_name": "Futashika, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.050003 34.150002)"
    },
    {
        "uid": "C35T",
        "name": "Taniguchi",
        "full_name": "Taniguchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.056702 33.450001)"
    },
    {
        "uid": "5RJQ",
        "name": "Kamegai",
        "full_name": "Kamegai, Toyama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.396835 36.561123)"
    },
    {
        "uid": "62EC",
        "name": "Tanami",
        "full_name": "Tanami, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.716675 33.48333)"
    },
    {
        "uid": "W4O0",
        "name": "Kitago",
        "full_name": "Kitago, Nichinan, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.378922 31.691595)"
    },
    {
        "uid": "ODVH",
        "name": "Shimajiri",
        "full_name": "Shimajiri, Iheya-son, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(127.938393 27.015846)"
    },
    {
        "uid": "QN7L",
        "name": "Hitachiota",
        "full_name": "Hitachiota, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.507767 36.655067)"
    },
    {
        "uid": "L3ST",
        "name": "Horoizumi-gun",
        "full_name": "Horoizumi-gun, Erimo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.222214 42.062698)"
    },
    {
        "uid": "6PU0",
        "name": "Shinshinotsu",
        "full_name": "Shinshinotsu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.615906 43.226479)"
    },
    {
        "uid": "T2A0",
        "name": "Suttsu-cho",
        "full_name": "Suttsu-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.228973 42.790977)"
    },
    {
        "uid": "PKDJ",
        "name": "Kamisunagawa-cho",
        "full_name": "Kamisunagawa-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.003784 43.448471)"
    },
    {
        "uid": "3WK5",
        "name": "Kenbuchi",
        "full_name": "Kenbuchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.341492 44.103596)"
    },
    {
        "uid": "GGO0",
        "name": "Sensui Island",
        "full_name": "Sensui Island, Fukuyama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.396622 34.38369)"
    },
    {
        "uid": "WJTP",
        "name": "Karumai-machi",
        "full_name": "Karumai-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.462082 40.327061)"
    },
    {
        "uid": "23K2",
        "name": "Otsuchi-cho",
        "full_name": "Otsuchi-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.899994 39.366669)"
    },
    {
        "uid": "VQ5B",
        "name": "Kawanuma-gun",
        "full_name": "Kawanuma-gun, Yanaizu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.747604 37.502419)"
    },
    {
        "uid": "AH2N",
        "name": "Iijima-machi",
        "full_name": "Iijima-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.933334 35.666672)"
    },
    {
        "uid": "FM6S",
        "name": "Chikuhoku-mura",
        "full_name": "Chikuhoku-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.040115 36.4212)"
    },
    {
        "uid": "6XJD",
        "name": "Kaifu-gun",
        "full_name": "Kaifu-gun, Kaiyo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.353119 33.68119)"
    },
    {
        "uid": "OMGB",
        "name": "Teshio-cho",
        "full_name": "Teshio-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.745392 44.88834)"
    },
    {
        "uid": "AVMU",
        "name": "Omu-cho",
        "full_name": "Omu-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.95694 44.575279)"
    },
    {
        "uid": "UA02",
        "name": "Nishiokoppe-mura",
        "full_name": "Nishiokoppe-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.924194 44.320591)"
    },
    {
        "uid": "2X5U",
        "name": "Atsuma-cho",
        "full_name": "Atsuma-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.87793 42.723663)"
    },
    {
        "uid": "FG1K",
        "name": "Sakegawa-mura",
        "full_name": "Sakegawa-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.222046 38.796455)"
    },
    {
        "uid": "GKS9",
        "name": "Shirataka-machi",
        "full_name": "Shirataka-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.066666 38.150002)"
    },
    {
        "uid": "2H0T",
        "name": "Miho-mura",
        "full_name": "Miho-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.345123 36.01886)"
    },
    {
        "uid": "3HOF",
        "name": "Shioya-machi",
        "full_name": "Shioya-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.815186 36.796471)"
    },
    {
        "uid": "4JJP",
        "name": "Shimonita-machi",
        "full_name": "Shimonita-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.786896 36.210602)"
    },
    {
        "uid": "WTOJ",
        "name": "Yorii-machi",
        "full_name": "Yorii-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.195755 36.116344)"
    },
    {
        "uid": "YYIN",
        "name": "Ebi",
        "full_name": "Ebi, Shinshiro, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.567551 35.024124)"
    },
    {
        "uid": "VYZ4",
        "name": "Kamikatsu",
        "full_name": "Kamikatsu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.383408 33.900311)"
    },
    {
        "uid": "YDZZ",
        "name": "Kotora-cho",
        "full_name": "Kotora-cho, Kotoura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.692719 35.495007)"
    },
    {
        "uid": "1P7E",
        "name": "Kitayama-mura",
        "full_name": "Kitayama-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.951462 33.959869)"
    },
    {
        "uid": "WCPU",
        "name": "Yabuki-machi",
        "full_name": "Yabuki-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.347015 37.193901)"
    },
    {
        "uid": "X47B",
        "name": "Samegawa-mura",
        "full_name": "Samegawa-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.483337 37.033329)"
    },
    {
        "uid": "TDCS",
        "name": "Hirata-mura",
        "full_name": "Hirata-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.557327 37.211071)"
    },
    {
        "uid": "Q1DS",
        "name": "Mutsuzawa-machi",
        "full_name": "Mutsuzawa-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.319275 35.361088)"
    },
    {
        "uid": "K1E9",
        "name": "Izumozaki-machi",
        "full_name": "Izumozaki-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.679337 37.539108)"
    },
    {
        "uid": "XSE0",
        "name": "Kasawara",
        "full_name": "Kasawara, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.149994 35.299999)"
    },
    {
        "uid": "8EXG",
        "name": "Watarai-cho",
        "full_name": "Watarai-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.622467 34.438923)"
    },
    {
        "uid": "JTXW",
        "name": "Kumatori-cho",
        "full_name": "Kumatori-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.35582 34.401348)"
    },
    {
        "uid": "1ADH",
        "name": "Nishinoshima-cho",
        "full_name": "Nishinoshima-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.994492 36.09296)"
    },
    {
        "uid": "J58M",
        "name": "Higashisonogi-cho",
        "full_name": "Higashisonogi-cho, Higashisonogi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(129.917145 33.037025)"
    },
    {
        "uid": "O8ST",
        "name": "Kumenan-cho",
        "full_name": "Kumenan-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.960693 34.929245)"
    },
    {
        "uid": "3OPW",
        "name": "Naoshima-cho",
        "full_name": "Naoshima-cho, Tamano, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.995667 34.459648)"
    },
    {
        "uid": "N2LB",
        "name": "Manno-cho",
        "full_name": "Manno-cho, Nakatado, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.912918 34.140759)"
    },
    {
        "uid": "SAAN",
        "name": "Toho-mura",
        "full_name": "Toho-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.825897 33.464291)"
    },
    {
        "uid": "NZ9C",
        "name": "Nishiki-machi",
        "full_name": "Nishiki-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.833328 32.183331)"
    },
    {
        "uid": "R2L6",
        "name": "Kawaminami-cho",
        "full_name": "Kawaminami-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.503784 32.209339)"
    },
    {
        "uid": "LZ8M",
        "name": "Fukagawa",
        "full_name": "Fukagawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.039658 43.716751)"
    },
    {
        "uid": "3PMM",
        "name": "Sasado",
        "full_name": "Sasado, Toyota, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.321564 35.215977)"
    },
    {
        "uid": "6C0A",
        "name": "Akasakata",
        "full_name": "Akasakata, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141 40.049999)"
    },
    {
        "uid": "C4L9",
        "name": "Ani-maeda",
        "full_name": "Ani-maeda, Kitaakita, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.416672 40.049999)"
    },
    {
        "uid": "3A1M",
        "name": "Futatsuimachi",
        "full_name": "Futatsuimachi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.233337 40.200001)"
    },
    {
        "uid": "292A",
        "name": "Haginari",
        "full_name": "Haginari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.300003 39.900002)"
    },
    {
        "uid": "I1HK",
        "name": "Kasose",
        "full_name": "Kasose, Fukaura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.018799 40.737068)"
    },
    {
        "uid": "B0V6",
        "name": "Katsurase",
        "full_name": "Katsurase, Kitaakita, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.416672 40.083328)"
    },
    {
        "uid": "8MLM",
        "name": "Matsukami",
        "full_name": "Matsukami, Fukaura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.952332 40.547138)"
    },
    {
        "uid": "3WW0",
        "name": "Mineyoshikawa",
        "full_name": "Mineyoshikawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.333328 39.566669)"
    },
    {
        "uid": "NR2Y",
        "name": "Shinjo-son",
        "full_name": "Shinjo-son, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.568878 35.178608)"
    },
    {
        "uid": "2G4L",
        "name": "Moriguchi",
        "full_name": "Moriguchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.576309 34.741974)"
    },
    {
        "uid": "DKF0",
        "name": "Matsubara",
        "full_name": "Matsubara, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.551697 34.580891)"
    },
    {
        "uid": "DOU8",
        "name": "Omagoshi",
        "full_name": "Omagoshi, Fukaura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.954575 40.485584)"
    },
    {
        "uid": "OZGA",
        "name": "Shimo-sugi",
        "full_name": "Shimo-sugi, Kitaakita, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.333328 40.150002)"
    },
    {
        "uid": "7C9B",
        "name": "Shimo-nojiri",
        "full_name": "Shimo-nojiri, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.616669 37.633331)"
    },
    {
        "uid": "NNS0",
        "name": "Shin-nozoki",
        "full_name": "Shin-nozoki, Mamurogawa-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.356934 38.97472)"
    },
    {
        "uid": "J423",
        "name": "Edogawadai",
        "full_name": "Edogawadai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.907196 35.901402)"
    },
    {
        "uid": "VS59",
        "name": "Numanokura",
        "full_name": "Numanokura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.133331 37.583328)"
    },
    {
        "uid": "H60U",
        "name": "Kawahigashi-machi",
        "full_name": "Kawahigashi-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.966675 37.549999)"
    },
    {
        "uid": "ZABL",
        "name": "Minamitsuru-gun",
        "full_name": "Minamitsuru-gun, Fujiyoshida, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(138.790573 35.472839)"
    },
    {
        "uid": "YARN",
        "name": "Nakakiri",
        "full_name": "Nakakiri, Shirakawa-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.316666 35.599998)"
    },
    {
        "uid": "C9I5",
        "name": "Akankohan",
        "full_name": "Akankohan, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.101395 43.424999)"
    },
    {
        "uid": "1B7P",
        "name": "Akabira",
        "full_name": "Akabira, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.053101 43.551399)"
    },
    {
        "uid": "CBDQ",
        "name": "Toka",
        "full_name": "Toka, Mitane, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.100006 40.049999)"
    },
    {
        "uid": "8JTS",
        "name": "Chikura",
        "full_name": "Chikura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.949997 34.950001)"
    },
    {
        "uid": "77L8",
        "name": "Hasunuma",
        "full_name": "Hasunuma, Sanmu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.483307 35.583302)"
    },
    {
        "uid": "2ARF",
        "name": "Imba-mura",
        "full_name": "Imba-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.216675 35.76667)"
    },
    {
        "uid": "VAAZ",
        "name": "Imagami",
        "full_name": "Imagami, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.883331 35.916672)"
    },
    {
        "uid": "U8JK",
        "name": "Kobunaki",
        "full_name": "Kobunaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.75 35.76667)"
    },
    {
        "uid": "YM2M",
        "name": "Machibo",
        "full_name": "Machibo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.316666 35.433331)"
    },
    {
        "uid": "5LX1",
        "name": "Nakadai-shinkai",
        "full_name": "Nakadai-shinkai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.199997 35.650002)"
    },
    {
        "uid": "6DPW",
        "name": "Iwami",
        "full_name": "Iwami, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.359467 35.550304)"
    },
    {
        "uid": "U0OV",
        "name": "Oppama",
        "full_name": "Oppama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.625565 35.309441)"
    },
    {
        "uid": "LG3P",
        "name": "Yatomi",
        "full_name": "Yatomi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.725021 35.10981)"
    },
    {
        "uid": "MXJU",
        "name": "Motosu",
        "full_name": "Motosu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.679001 35.483002)"
    },
    {
        "uid": "DF3O",
        "name": "Katagami",
        "full_name": "Katagami, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.050995 39.866573)"
    },
    {
        "uid": "J7ZY",
        "name": "Kuwana",
        "full_name": "Kuwana, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.656647 35.093197)"
    },
    {
        "uid": "93SL",
        "name": "Yoron",
        "full_name": "Yoron, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(128.454865 27.054777)"
    },
    {
        "uid": "SQYU",
        "name": "Kakuta",
        "full_name": "Kakuta, Kuriyama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.816696 43.033298)"
    },
    {
        "uid": "73PJ",
        "name": "Kaidomari",
        "full_name": "Kaidomari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.616669 36.98333)"
    },
    {
        "uid": "M8GU",
        "name": "Kanazu",
        "full_name": "Kanazu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.833328 37.950001)"
    },
    {
        "uid": "E8RK",
        "name": "Sumino",
        "full_name": "Sumino, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.316696 33.9333)"
    },
    {
        "uid": "54RF",
        "name": "Takuma",
        "full_name": "Takuma, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.666702 34.216702)"
    },
    {
        "uid": "H3WX",
        "name": "Karurusu",
        "full_name": "Karurusu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.10611 42.50972)"
    },
    {
        "uid": "YOXG",
        "name": "Katsurakoi",
        "full_name": "Katsurakoi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.449997 42.933331)"
    },
    {
        "uid": "1I4Q",
        "name": "Numaushi",
        "full_name": "Numaushi, Horokanai-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.183334 43.966671)"
    },
    {
        "uid": "MXHI",
        "name": "Obeton",
        "full_name": "Obeton, Urahoro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.666672 42.833328)"
    },
    {
        "uid": "J7ZL",
        "name": "Okimura",
        "full_name": "Okimura, Furubira-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.683334 43.25)"
    },
    {
        "uid": "KHXS",
        "name": "Osamunai",
        "full_name": "Osamunai, Fukagawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.126114 43.723331)"
    },
    {
        "uid": "X072",
        "name": "Okushumbetsu",
        "full_name": "Okushumbetsu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.399994 43.466671)"
    },
    {
        "uid": "KCKS",
        "name": "Onnebira",
        "full_name": "Onnebira, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.25 43.066669)"
    },
    {
        "uid": "UT10",
        "name": "Otoebokke",
        "full_name": "Otoebokke, Fukagawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(142.083328 43.700001)"
    },
    {
        "uid": "GU5W",
        "name": "Rapushi",
        "full_name": "Rapushi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.949997 42.333328)"
    },
    {
        "uid": "W2GL",
        "name": "Sankisen",
        "full_name": "Sankisen, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.983337 43.533329)"
    },
    {
        "uid": "PDP6",
        "name": "Yashio",
        "full_name": "Yashio, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.839539 35.819431)"
    },
    {
        "uid": "SHH3",
        "name": "Choja",
        "full_name": "Choja, Niyodogawa-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.133331 33.48333)"
    },
    {
        "uid": "EM0B",
        "name": "Ichinokawa",
        "full_name": "Ichinokawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.199997 33.883331)"
    },
    {
        "uid": "TBSS",
        "name": "Anebetsu",
        "full_name": "Anebetsu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.5 42.950001)"
    },
    {
        "uid": "Y8Z8",
        "name": "Inagi-shi",
        "full_name": "Inagi-shi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.492905 35.6329)"
    },
    {
        "uid": "W9OM",
        "name": "Osaru",
        "full_name": "Osaru, Date, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.833328 42.48333)"
    },
    {
        "uid": "EB98",
        "name": "Kozushima-mura",
        "full_name": "Kozushima-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.134262 34.205269)"
    },
    {
        "uid": "YY3R",
        "name": "Igura",
        "full_name": "Igura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.988327 34.186939)"
    },
    {
        "uid": "GNVN",
        "name": "Inokuchi",
        "full_name": "Inokuchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.033325 34.26667)"
    },
    {
        "uid": "TAKJ",
        "name": "Kamagari",
        "full_name": "Kamagari, Kure, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.714569 34.189194)"
    },
    {
        "uid": "RUU7",
        "name": "Kikuma",
        "full_name": "Kikuma, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.857773 34.042782)"
    },
    {
        "uid": "YU06",
        "name": "Miyake-mura",
        "full_name": "Miyake-mura, Miyakejima, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.513596 34.114029)"
    },
    {
        "uid": "OUZB",
        "name": "Mannen",
        "full_name": "Mannen, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.792694 33.707279)"
    },
    {
        "uid": "4UGC",
        "name": "Tamatsu",
        "full_name": "Tamatsu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.199997 33.916672)"
    },
    {
        "uid": "69O1",
        "name": "Niijuku",
        "full_name": "Niijuku, Takahata, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.251389 38.031406)"
    },
    {
        "uid": "Z8B5",
        "name": "Takinohara",
        "full_name": "Takinohara, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.699997 37.083328)"
    },
    {
        "uid": "JK6Q",
        "name": "Kamimatsuo",
        "full_name": "Kamimatsuo, Nanto, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.947098 36.461521)"
    },
    {
        "uid": "4OLE",
        "name": "Otobe-cho",
        "full_name": "Otobe-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.138062 41.967781)"
    },
    {
        "uid": "EQ0T",
        "name": "Naganuma-cho",
        "full_name": "Naganuma-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.689713 43.005829)"
    },
    {
        "uid": "8BOM",
        "name": "Menashi-gun",
        "full_name": "Menashi-gun, Rausu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.140778 44.047989)"
    },
    {
        "uid": "6MC9",
        "name": "Atsunai",
        "full_name": "Atsunai, Urahoro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.809433 42.803059)"
    },
    {
        "uid": "BGYT",
        "name": "Besshakudomari",
        "full_name": "Besshakudomari, Kushiro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.783325 42.933331)"
    },
    {
        "uid": "4G8U",
        "name": "Chimbe",
        "full_name": "Chimbe, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.933334 42.98333)"
    },
    {
        "uid": "PFM3",
        "name": "Furuume",
        "full_name": "Furuume, Bihoro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.189713 43.704441)"
    },
    {
        "uid": "381K",
        "name": "Furusan",
        "full_name": "Furusan, Yuni, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.783325 42.966671)"
    },
    {
        "uid": "K0J3",
        "name": "Daito",
        "full_name": "Daito, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.626282 34.710518)"
    },
    {
        "uid": "ZKAS",
        "name": "Heison-shiku",
        "full_name": "Heison-shiku, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.866669 43.799999)"
    },
    {
        "uid": "F0CN",
        "name": "Hiura",
        "full_name": "Hiura, Hakodate, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.050705 41.733803)"
    },
    {
        "uid": "G6BV",
        "name": "Kamuiwakka",
        "full_name": "Kamuiwakka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.129913 44.153389)"
    },
    {
        "uid": "E6JR",
        "name": "Karikan",
        "full_name": "Karikan, Kushiro-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(144.47583 43.057781)"
    },
    {
        "uid": "8ZGV",
        "name": "Inoura",
        "full_name": "Inoura, Ikata-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.111588 33.370819)"
    },
    {
        "uid": "C59V",
        "name": "Isaki",
        "full_name": "Isaki, Yawatahama, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.415085 33.54343)"
    },
    {
        "uid": "7BYB",
        "name": "Nakasuji",
        "full_name": "Nakasuji, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.633331 33.416672)"
    },
    {
        "uid": "I5G3",
        "name": "Jogu",
        "full_name": "Jogu, Tsuruga, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.019928 35.698318)"
    },
    {
        "uid": "I4SB",
        "name": "Kanezaki",
        "full_name": "Kanezaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.533325 33.866669)"
    },
    {
        "uid": "H8IW",
        "name": "Tamanoi",
        "full_name": "Tamanoi, Otama-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.339539 37.539219)"
    },
    {
        "uid": "C57Z",
        "name": "Machikita-mura",
        "full_name": "Machikita-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.933334 37.51667)"
    },
    {
        "uid": "ADKL",
        "name": "Onneyu",
        "full_name": "Onneyu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(143.507507 43.752781)"
    },
    {
        "uid": "MFVE",
        "name": "Ichinoki",
        "full_name": "Ichinoki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.783325 37.716671)"
    },
    {
        "uid": "OV5L",
        "name": "Sagura",
        "full_name": "Sagura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.800003 37.98333)"
    },
    {
        "uid": "XNFN",
        "name": "Oyabu",
        "full_name": "Oyabu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.966675 34.533329)"
    },
    {
        "uid": "TU6M",
        "name": "Arimura",
        "full_name": "Arimura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.666702 31.549999)"
    },
    {
        "uid": "U370",
        "name": "Ifuna",
        "full_name": "Ifuna, Suzuka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(136.494141 34.916229)"
    },
    {
        "uid": "5N0Q",
        "name": "Kinaoshicho",
        "full_name": "Kinaoshicho, Hakodate, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.068558 41.884487)"
    },
    {
        "uid": "3SHU",
        "name": "Miyanoura",
        "full_name": "Miyanoura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.976105 34.458328)"
    },
    {
        "uid": "9OIT",
        "name": "Tabata",
        "full_name": "Tabata, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.866699 32.6833)"
    },
    {
        "uid": "M3TF",
        "name": "Fusato",
        "full_name": "Fusato, Nanjo, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(127.76973 26.143707)"
    },
    {
        "uid": "NV6D",
        "name": "Kuninaka",
        "full_name": "Kuninaka, Miyakojima, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(125.166672 24.816669)"
    },
    {
        "uid": "TE2A",
        "name": "Izui",
        "full_name": "Izui, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.216675 33.866669)"
    },
    {
        "uid": "4MA4",
        "name": "Sashirui",
        "full_name": "Sashirui, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(145.237976 44.061131)"
    },
    {
        "uid": "LN9B",
        "name": "Wakkanai",
        "full_name": "Wakkanai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(141.687775 45.422527)"
    },
    {
        "uid": "DDV3",
        "name": "Suhara",
        "full_name": "Suhara, Okuwa-mura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.693375 35.69857)"
    },
    {
        "uid": "FO4A",
        "name": "Akaike",
        "full_name": "Akaike, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.766693 33.700001)"
    },
    {
        "uid": "CLKQ",
        "name": "Ita",
        "full_name": "Ita, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.816666 33.650002)"
    },
    {
        "uid": "66VG",
        "name": "Funehiki",
        "full_name": "Funehiki, Tamura, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.583557 37.436279)"
    },
    {
        "uid": "M4OZ",
        "name": "Kanada",
        "full_name": "Kanada, Fukuchi-machi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.783295 33.6833)"
    },
    {
        "uid": "1NE9",
        "name": "Mushirouchi",
        "full_name": "Mushirouchi, Koga, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(130.5 33.73333)"
    },
    {
        "uid": "DLG6",
        "name": "Shono",
        "full_name": "Shono, Ikata-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.033295 33.349998)"
    },
    {
        "uid": "5FAJ",
        "name": "Kushi",
        "full_name": "Kushi, Ikata-cho, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(132.052826 33.37175)"
    },
    {
        "uid": "H8YK",
        "name": "Noma-guchi",
        "full_name": "Noma-guchi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(135.483337 34.933331)"
    },
    {
        "uid": "4AD5",
        "name": "Kasaoka",
        "full_name": "Kasaoka, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(133.500671 34.498013)"
    },
    {
        "uid": "BFEC",
        "name": "Hikari",
        "full_name": "Hikari, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(131.974594 33.979595)"
    },
    {
        "uid": "61G5",
        "name": "Aida-gun",
        "full_name": "Aida-gun, Shiso, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(134.340942 35.193298)"
    },
    {
        "uid": "URTZ",
        "name": "Dachi",
        "full_name": "Dachi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.233337 35.316669)"
    },
    {
        "uid": "A532",
        "name": "Mashizume",
        "full_name": "Mashizume, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(137.333328 35.316669)"
    },
    {
        "uid": "MXIL",
        "name": "Asane",
        "full_name": "Asane, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.016663 40.150002)"
    },
    {
        "uid": "3MY0",
        "name": "Kakumazaki",
        "full_name": "Kakumazaki, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.916672 39.950001)"
    },
    {
        "uid": "7IIV",
        "name": "Tagonai",
        "full_name": "Tagonai, Higashi Naruse, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.649994 39.183331)"
    },
    {
        "uid": "ONAE",
        "name": "Tsubakigawa",
        "full_name": "Tsubakigawa, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.149994 39.616669)"
    },
    {
        "uid": "PR7P",
        "name": "Uwaji",
        "full_name": "Uwaji, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.533325 39.066669)"
    },
    {
        "uid": "3O59",
        "name": "Uyashinai",
        "full_name": "Uyashinai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.366669 39.700001)"
    },
    {
        "uid": "X3YA",
        "name": "Kemanai",
        "full_name": "Kemanai, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.770004 40.26778)"
    },
    {
        "uid": "9XPH",
        "name": "Kiriishi",
        "full_name": "Kiriishi, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.216675 40.200001)"
    },
    {
        "uid": "97GM",
        "name": "Ikego",
        "full_name": "Ikego, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(139.600006 35.299999)"
    },
    {
        "uid": "2DTW",
        "name": "Ikisu",
        "full_name": "Ikisu, Japan",
        "country_code": "JP",
        "state": "",
        "lonlat": "SRID=4326;POINT(140.633331 35.883331)"
    }
]);

  return (
    <div>
      <Numbers persons={persons}></Numbers>
    </div>
  );
};

export default App;
