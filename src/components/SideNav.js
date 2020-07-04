import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu


class SideNav extends React.Component {

    render() {
        const lessonList = this.props.lessons.map(lesson =>
            <Menu.Item key={lesson.number - 1}>{lesson.description}</Menu.Item>
        )

        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                onClick={this.props.onUpdate}
            >
                <SubMenu key="sub1" title="Beginner">
                    {lessonList}
                </SubMenu>
                <SubMenu key="sub2" title="Intermediate">
                    <Menu.Item key={0}>coming soon</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title="Advanced">
                    <Menu.Item key={0}>coming soon</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default SideNav