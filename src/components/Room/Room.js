import "./Room.scss";
import { Table, Space } from "antd";
import { useEffect, useRef } from "react";
import { fetchData } from "../../api/useFetch";

const Room = () => {
  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "Ma",
      key: "Ma",
    },
    {
      title: "Mã loại phòng",
      dataIndex: "MaLoaiPhong",
      key: "MaLoaiPhong",
    },
    {
      title: "Khu vực",
      dataIndex: "KhuVuc",
      key: "KhuVuc",
    },
    {
      title: "Tình trạng",
      dataIndex: "TinhTrang",
      key: "TinhTrang",
    },
    {
      title: "Số người",
      dataIndex: "SoNguoi",
      key: "SoNguoi",
    },

    {
      title: "Thao tác",
      key: "ThaoTac",
      render: () => (
        <Space size="middle">
          <button>Update</button>
          <button>Delete</button>
        </Space>
      ),
    },
  ];

  const data = useRef([]);
  let formData = new FormData();

  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       age: 32,
  //       address: "New York No. 1 Lake Park",
  //       tags: ["nice", "developer"],
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       age: 42,
  //       address: "London No. 1 Lake Park",
  //       tags: ["loser"],
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       age: 32,
  //       address: "Sidney No. 1 Lake Park",
  //       tags: ["cool", "teacher"],
  //     },
  //   ];

  const getRoomSuccess = () => {
    console.log("success");
  };
  const getRoomError = () => {
    console.log("error");
  };

  useEffect(() => {
    formData.append(
      "param",
      JSON.stringify({
        results: 25,
        page: 1,
        sortField: "",
        sortOrder: "",
        searchInfo: "",
      })
    );
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    data.current = fetchData(
      "/api/Defines/GetRoom",
      "post",
      "",
      formData,
      getRoomSuccess,
      getRoomError
    );
    console.log(data.current);
  }, [formData]);
  return (
    <div className="room">
      <Table
        className="room-table"
        columns={columns}
        dataSource={data.current}
      />
    </div>
  );
};

export default Room;
