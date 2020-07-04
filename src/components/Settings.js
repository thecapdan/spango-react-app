import React from "react";
import { Checkbox, Radio } from "antd";
import "antd/dist/antd.css";

class Settings extends React.Component {
  onChange() {}

  render() {
    return (
      <div>
        <h2>Settings</h2>
        <h4>Lesson</h4>
        <Checkbox onChange={this.onChange}>Hide English</Checkbox>
        <Checkbox onChange={this.onChange}>Hide Spanish</Checkbox>
        <h4>Exercise</h4>
        <Radio.Group
          onChange={this.props.updateMode}
          defaultValue="target2base"
        >
          <Radio value="target2base">Esp->Eng</Radio>
          <br />
          <Radio value="base2target">Eng->Esp</Radio>
          <br />
          <Radio value="wildcard" disabled={true}>
            Wildcard
          </Radio>
        </Radio.Group>

        <h4>Difficulty</h4>
        <Checkbox onChange={this.onChange}>Strict spellcheck</Checkbox>
        <Checkbox onChange={this.onChange}>Ignore accents</Checkbox>
        <Checkbox onChange={this.onChange}>Hide hints</Checkbox>
      </div>
    );
  }
}

export default Settings;
