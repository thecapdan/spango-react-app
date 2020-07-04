import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

const columns = [
  {
    title: "English",
    dataIndex: "base",
    key: "base",
    render: (text) => <span className="baseText">{text}</span>,
  },
  {
    title: "Spanish",
    dataIndex: "target",
    key: "target",
    render: (text) => <span className="targetText">{text}</span>,
  },
];

class Lesson extends React.Component {
  render() {
    return (
      <div className="pairsTable">
        <h2>Lesson</h2>
        <Table
          columns={columns}
          dataSource={this.props.pairs}
          pagination={false}
        />
      </div>
    );
  }
}

export default Lesson;
