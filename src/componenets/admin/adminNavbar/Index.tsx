import { Layout, Button, theme } from "antd";
import "./style.scss"

const { Header } = Layout;

function Index() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    window.location.reload();
  };
  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button className="logOut" onClick={handleLogOut}>
          Log Out
        </Button>
      </Header>
    </>
  );
}

export default Index;
