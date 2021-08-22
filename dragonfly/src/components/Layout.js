// import { Avatar, Layout, Menu, Breadcrumb } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import { NavLink } from "react-router-dom";
// import classes from "./Layout.module.css";
// import AutoComplete_ from "./Autocomplete";

// const { Header, Content, Footer } = Layout;

const CustomLayout = (props) => {
  return (
    <div className="layout">
      {/* <Header className={classes.header}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          
         <Menu.Item key="home">
            <NavLink to="/index" exact activeClassName={classes.active}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key="myItineraries">
            <NavLink to="/my-itineraries" exact activeClassName={classes.active}>My Itineraries</NavLink>
          </Menu.Item>
          <Menu.Item key="profile">
          <NavLink to="/myProfile" exact activeClassName={classes.active}><Avatar size="small" icon={<UserOutlined />} /></NavLink>
            
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      {/* <AutoComplete_/> */}
      {props.children}
    </div>
  );
};

export default CustomLayout;
