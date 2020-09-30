import React from 'react';
import { Layout, Menu, Icon, Avatar, Divider } from 'antd';
import Link from 'umi/link'

const { Sider } = Layout;
const MenuItem = Menu.Item;

const siderStyle = {
    backgroundColor: 'rgb(204,231,254)',
    height: '100vh',
    borderRadius: '0 20px 20px 0',
    filter: 'blur(0.2px)'
};
const menuStyle = {
    backgroundColor: 'rgb(204,231,254)',
    borderColor: 'rgb(204,231,254)',
    textAlign: 'center',
};
const dividerStyle = {
    margin: '0',
    backgroundColor: '#fff',
};

const avatarStyle = {
    // height: '10px',
    padding: '40px 40px 40px 55px',
    margin: '0 auto'
}

// 侧边栏组件
class SiderMenu extends React.PureComponent {
    // 用于确定选择了哪个MenuItem
    state = {
        selectedKey: '',
    }
    // 点击时保存选择的MenuItem
    changeItem = (e) => {
        this.setState({
            selectedKey: e.key,
        });
    }

    render() {
        return (
            <Sider width={150} style={siderStyle}>
                <div style={avatarStyle}>
                    <Avatar size={48} icon="user" />
                    <div style={{ fontSize: '12px' }}>个人清单</div>
                </div>
                {/* <Divider style={dividerStyle} /> */}
                <Menu style={menuStyle}
                    selectedKeys={[this.state.selectedKey]}
                    onClick={this.changeItem}>
                    <MenuItem key='task'>
                        <Link to="/task">
                            <Icon type="bars" />
                            <span><b>任务</b></span>
                        </Link>
                    </MenuItem>
                    <MenuItem key='note'>
                        <Link to="/note">
                            <Icon type="file-text" />
                            <span><b>便签</b></span>
                        </Link>
                    </MenuItem>
                    <MenuItem key='project'>
                        <Link to="/project">
                            <Icon type="folder" />
                            <span><b>进度</b></span>
                        </Link>
                    </MenuItem>
                </Menu>
                {/* <div><Divider style={dividerStyle} /></div> */}
                <Menu style={menuStyle}
                    selectedKeys={[this.state.selectedKey]}
                    onClick={this.changeItem}>
                    {/* <MenuItem key='position'>
                        <Link to="/position">
                            <Icon type="environment" />
                            <span>地点</span>
                        </Link>
                    </MenuItem> */}
                    <MenuItem key='tag'>
                        <Link to="/tag">
                            <Icon type="tags" />
                            <span><b>分组</b></span>
                        </Link>
                    </MenuItem>
                </Menu>
                {/* <div><Divider style={dividerStyle} /></div> */}
                <Menu style={menuStyle}
                    selectedKeys={[this.state.selectedKey]}
                    onClick={this.changeItem}>
                    <MenuItem key='search'>
                        <Link to="/search">
                            <Icon type="search" />
                        </Link>
                    </MenuItem>
                    <MenuItem key='mail'>
                        <Icon type="mail" />
                    </MenuItem>
                    <MenuItem key='more'>
                        <span>...</span>
                    </MenuItem>
                </Menu>
            </Sider>
        );
    };
}

export default SiderMenu;