import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import style from '../style/style';

export default function Index3(){
    return (
        <div>
          {/*<meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />*/}
          <style dangerouslySetInnerHTML={{__html: style }} />
          <link rel="stylesheet" id="extraCss" href />
          <title data-i18n="main.programName">雀魂Plus</title>
          <div id="titlebar">
            <h1 data-i18n="main.programName">雀魂Plus</h1>
            <span className="close-btn" id="closeBtn" />
          </div>
          <div id="main-context">
            {/* 左侧选单 */}
            <div id="left-panel">
              <ul>
                <li data-target="extensionPage" data-i18n="main.extension">扩展</li>
                <li data-target="resourcepackPage" data-i18n="main.resourcepack">
                  资源包
                </li>
                <li data-target="toolPage" data-i18n="main.tool">工具箱</li>
                <li data-target="settingPage" data-i18n="main.setting">设置</li>
                <li data-target="aboutPage" data-i18n="main.about">关于</li>
              </ul>
            </div>
            {/* 扩展页面 */}
            <section data-name="extensionPage">
              <button id="refreshExtension" className="big-btn refresh-btn" />
              <button id="openFolderExtension" className="big-btn openfolder-btn">
                <i className="material-icons">folder_open</i>
              </button>
              <button id="installExtension" className="big-btn install-btn" />
              <button id="editExtension" className="big-btn edit-btn" />
              <div id="ExtensionInfos" className="info-cards" />
            </section>
            {/* 资源包页面 */}
            <section data-name="resourcepackPage">
              <button id="refreshResourcePack" className="big-btn refresh-btn" />
              <button id="openFolderResourcePack" className="big-btn openfolder-btn">
                <i className="material-icons">folder_open</i>
              </button>
              <button id="installResourcePack" className="big-btn install-btn" />
              <button id="editResourcePack" className="big-btn edit-btn" />
              <div id="ResourcePackInfos" className="info-cards" />
            </section>
            {/* 工具页面 */}
            <section data-name="toolPage">
              <button id="refreshTool" className="big-btn refresh-btn" />
              <button id="openFolderTool" className="big-btn openfolder-btn">
                <i className="material-icons">folder_open</i>
              </button>
              <button id="installTool" className="big-btn install-btn" />
              <button id="editTool" className="big-btn edit-btn" />
              <div id="ToolInfos" className="info-cards" />
            </section>
            {/* 设置面板 */}
            <section data-name="settingPage">
              <button id="save-configs" className="big-btn" />
              <div id="setting-inner">
                <h3>窗口</h3>
                <input type="checkbox" name="windowSettings1" id="windowSettings1" /><label htmlFor="windowSettings1">设置描述（Text）</label>
                <h3>更新</h3>
                <input type="checkbox" name="updateSettings1" id="updateSettings1" /><label htmlFor="updateSettings1">获取浏览版(Get
                  Pre-releases)</label>
              </div>
            </section>
            {/* 关于页面 */}
            <section data-name="aboutPage">
              <div id="about-inner" />
            </section>
            {/* 底部面板 */}
            <div id="bottom-panel">
              <span id="serverInfo" data-server-index={0}>
                <span id="serverInfoTitle" data-i18n="main.server">服务器</span>
                <span>:&nbsp;</span>
                <span id="serverText" data-i18n="main.loading">加载中</span>
                <span id="serverIndexNum" />
              </span>
              <span id="pingInfo" className="offline">
                <span data-i18n="main.delay">Ping</span>
                <span>:&nbsp;</span>
                <span id="pingText">--</span>
                <span data-i18n="main.millisecond">ms</span>
              </span>
              <button id="launch" data-i18n="main.launch">
                启动游戏
              </button>
            </div>
          </div>
          {/* 版本卡标签 */}
          <div id="update-card" className="update-card">
            <h3 data-i18n="update.newVersionWasFound">发现新版本</h3>
            <p>
              <span data-i18n="update.currentVersion">您的版本</span>
              <span id="localVersion">v1.0.0</span><br />
              <span data-i18n="update.latestVersion">最新版本</span>
              <span id="remoteVersion">v1.0.0</span><br />
              <span data-i18n="update.publishAt">发布于</span>
              <span id="publishTime">2000/2/30 下午11:11:11</span>
            </p>
            <button id="updateCard_close" className="updateCard_close" data-i18n="update.tellMeNextTime">
              下次提醒我
            </button>
            <button id="updateCard_view" className="updateCard_view" data-i18n="update.gotoPublishPage">
              前往发布页
            </button>
            <button id="updateCard_autoupdate" className="updateCard_view hide" data-i18n="update.updateNow">
              下载更新
            </button>
          </div>
          <div id="download-card" className="update-card">
            <h3 id="downloadCardTitle" data-i18n="update.downloading">
              正在下载更新
            </h3>
            <p id="downloadCardText">
              <span data-i18n="update.downloadingTip">正在从服务器获取更新中</span>
              <br />
              <span data-i18n="update.pleaseWait">请稍后……</span>
              <br />
              <span id="downloadCardSpeed" data-i18n="update.connecting">
                连接资源……
              </span>
            </p>
            <button id="downloadCard_install" className="updateCard_view" disabled data-i18n="update.installAndRelaunch">
              安装并重启
            </button>
          </div>
          {/* 版本卡标签结束 */}
        </div>
      );
}