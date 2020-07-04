import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
  {
    dataIndex: "base",
    key: "base",
  },
  {
    dataIndex: "target",
    key: "target",
  },
];

class Hints extends React.Component {
  render() {
    return (
      <div className="hintsTable">
        <h2>Hints</h2>
        <Table
          columns={columns}
          dataSource={this.props.hints}
          pagination={false}
        />
      </div>
    );
  }
}

export default Hints;
