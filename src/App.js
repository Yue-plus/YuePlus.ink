import React from "react";
import ReactDOM from "react-dom";
import {
    Card, CardContent, Container, Grid, Link
} from "@material-ui/core";
import { Get } from "react-axios";

function Counter(c) {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <span style={{ fontSize: "32px" }}>合计访问：</span>
                <span style={{ fontSize: "38px" }}>{ c[1].value }</span>
            </Grid>
            <Grid item xs={12} sm={6}>
                <span style={{ fontSize: "32px" }}>今日访问：</span>
                <span style={{ fontSize: "38px"}}>{ c[0].value }</span>
            </Grid>
        </Grid>
    )
}

function GetCounter() {
    return (
        <Get url={"https://api.yueplus.ink/counter"}>
            {(error, response, isLoading) => {
                const counter = [{value: "NaN"}, {value: "NaN"}];
                if (error) {
                    return (Counter(counter));
                } else if (isLoading) {
                    return (<div>Loading...</div>)
                } else if (response !== null) {
                    console.log(response.data);
                    return (Counter(response.data));
                }
                return (<div>Default message before request is made.</div>)
            }}
        </Get>
    )
}

function MyProject() {
    const project = [
        {text: "我的 GitHub 主页", link: "https://github.com/Yue-plus"},
        {text: "STOMP 协议规范", link: "http://stomp.yueplus.ink/"},
        {text: "Cisco Packet Tracer帮助文档", link: "https://help.cisco.yueplus.ink/"},
        {text: "明日方舟 Hexo 主题", link: "https://github.com/Yue-plus/hexo-theme-arknights"},
        {text: "明日方舟 Hexo 主题预览", link: "https://ark.theme.yueplus.ink"},
        {text: "mc.YuePlus.ink | Webmin", link: "https://mc.yueplus.ink:10000/"}
    ];

    const projectItem = project.map((item) =>
        <Grid item>
            <Card>
                <CardContent>
                    <Link href={item.link}>{item.text}</Link>
                </CardContent>
            </Card>
        </Grid>
    );

    return (
        <Grid container spacing={3}>
            {projectItem}
        </Grid>
    );
}

function App() {
  return (
      <Container>
          <h1><Link href="https://YuePlus.ink/">YuePlus.inkへようこそ</Link></h1>
          <GetCounter />
          <MyProject />
          <div style={{ textAlign: "center", padding: "20px 0" }}>赣ICP备19008355号</div>
      </Container>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
export default App;
