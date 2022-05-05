import "./Room.scss";
import { Table, Space, Input } from "antd";
import { useEffect, useState } from "react";
import { fetchData } from "../../api/useFetch";

const Room = () => {
  const columns = [
    {
      title: "Mã phòng",
      dataIndex: "Ma",
      key: "Ma",
      sorter: (record1, record2) => record1.Ma > record2.Ma,
      filterDropdown: () => {
        return <Input></Input>;
      },
    },
    {
      title: "Mã loại phòng",
      dataIndex: "MaLoaiPhong",
      key: "MaLoaiPhong",
      sorter: (record1, record2) => record1.MaLoaiPhong > record2.MaLoaiPhong,
    },
    {
      title: "Khu vực",
      dataIndex: "KhuVuc",
      key: "KhuVuc",
      sorter: (record1, record2) => record1.KhuVuc > record2.KhuVuc,
    },
    {
      title: "Tình trạng",
      dataIndex: "TinhTrang",
      key: "TinhTrang",
      filters: [
        { text: "1", value: "1" },
        { text: "2", value: "2" },
        { text: "3", value: "3" },
        { text: "4", value: "4" },
      ],
      onFilter: (value, record) => {
        console.log(record);
        if (value === "1" && record.TinhTrang === 1) {
          return true;
        }
        if (value === "2" && record.TinhTrang === 2) {
          return true;
        }
        if (value === "3" && record.TinhTrang === 3) {
          return true;
        }
        if (value === "4" && record.TinhTrang === 4) {
          return true;
        }
        return false;
      },
    },
    {
      title: "Số người",
      dataIndex: "SoNguoi",
      key: "SoNguoi",
      sorter: (record1, record2) => record1.SoNguoi > record2.SoNguoi,
    },

    {
      title: "Thao tác",
      dataIndex: "ThaoTac",
      key: "ThaoTac",
      render: () => (
        <Space size="middle">
          <button>Update</button>
          <button>Delete</button>
        </Space>
      ),
    },
  ];

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  let formData = new FormData();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  const getRoomError = (error) => {
    console.log("Lỗi: ", error);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    fetch({ pagination });
  };

  useEffect(() => {
    fetch({ pagination });
  }, []);

  const fetch = (params = {}) => {
    setLoading(true);
    formData.append(
      "param",
      JSON.stringify({
        results: params.pagination.pageSize,
        page: params.pagination.current,
        sortField: "",
        sortOrder: "",
        searchInfo: "",
      })
    );
    fetchData(
      "/api/Defines/GetRoom",
      "post",
      "",
      formData,
      (res) => {
        setData(JSON.parse(res.data));
        setPagination({ ...params.pagination, total: res.totalRow });
        setLoading(false);
      },
      getRoomError
    );
  };

  return (
    <div className="room">
      <Table
        rowKey="Ma"
        className="room-table"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={pagination}
        onChange={handleTableChange}
        scroll={{ y: 650, x: 850 }}
      />
    </div>
  );
};

export default Room;
