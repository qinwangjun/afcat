import RootRoutes from "./routers/index";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./static/css/style.css";
import Header from "./component/header";
import Footer from "./component/footer";
function App() {
  return <Layout className="page-layout">
    <Header/>
    <Layout.Content>
      <div className="page-content">
        <RootRoutes></RootRoutes>
      </div>
    </Layout.Content>
    <Footer/>
  </Layout>;
}

export default App;
