const css = `
@charset "UTF-8";
:root {
  --title-color: #e280ae;
  --title-text: #ffffff;
  --main-color: #e280ae;
  --main-dark-color: #cc6699;
  --white-text: #ffffff;
  --disabled-color: #808080;
  --switch-able-color: #e280ae;
  --switch-disable-color: #b1b1b1;
  --switch-ball-color: #fff;
  --light-text: #808080;
  --bold-text: #303030;
  --icon-color: #404040;
  --border-color: #d0d0d0;
  --left-panel-color: #f0f0f0;
  --left-panel-active-color: #e0e0e0;stylesheet
  --left-panel-hover-color: #d8d8d8;
  --section-color: #fafafa;
  --info-card-color: #ffffff;
  --bottom-panel-color: #fff;
  --ease-in-out: cubic-bezier(0.645, 0.045, 0.355, 1);
  --animation-time: 100ms;
  --ping-red: #dd3333;
  --ping-orange: #ff8800;
  --ping-green: #33dd33;
  --ping-offline: #888888;
  --mac-close-btn: #ff4444;
  --mac-close-btn-border: #dd3333;
  --mac-close-btn-hover: #ff4444;
  --mac-close-btn-hover-border: #dd3333;
  --main-height: 628px; }
  
  @font-face {
    font-family: 'iconfont';
    src: url('../iconfont/'+'iconfont.eot');
    src: url('../iconfont/'+'iconfont.eot?#iefix')
        format('embedded-opentype'),
      url('../iconfont/'+'iconfont.woff') format('woff'),
      url('../iconfont/'+'iconfont.ttf') format('truetype');
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: 400;
    user-select: none;
    font-family: '思源黑体 CN', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    zoom: 1; }
    *::-webkit-scrollbar {
      width: 8px; }
    *::-webkit-scrollbar-button {
      height: 0;
      display: none;
      background-color: transparent; }
    *::-webkit-scrollbar-track-piece {
      background-color: transparent;
      padding-right: 8px; }
    *::-webkit-scrollbar-thumb {
      width: 8px;
      border-radius: 4px;
      min-height: 64px;
      max-height: 128px;
      height: auto;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color var(--animation-time) var(--ease-in-out); }
    *:hover::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.1); }
    *:hover::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.15);
      transition: background-color 0; }
    *:hover::-webkit-scrollbar-thumb:active {
      background-color: rgba(0, 0, 0, 0.2);
      transition: background-color 0; }

  button {
    outline: none !important;
    cursor: pointer; }

  body {
    width: 100%;
    height: 100%;
    overflow: hidden; }

  .darwin {
    --main-height: 634px;
    --left-panel-color: transparent;
    --left-panel-active-color: rgba(0, 0, 0, 0.067);
    --left-panel-hover-color: rgba(0, 0, 0, 0.188); }
    .darwin h1 {
      height: 22px;
      line-height: 22px;
      font-size: 12px; }

  #titlebar > .close-btn > .darwin::before {
    cursor: pointer;
    right: auto;
    left: 10px;
    top: 8px;
    height: 12px;
    width: 12px;
    font-size: 12px;
    font-weight: 400;
    background-color: var(--mac-close-btn);
    border-radius: 50%;
    border: 1px solid var(--mac-close-btn-border);
    color: #8110;
    transition: color var(--animation-time) var(--ease-in-out);
    line-height: 12px; }

  #titlebar > .close-btn > .darwin:hover::before {
    color: #811f;
    background-color: var(--mac-close-btn-hover);
    border: 1px solid var(--mac-close-btn-hover-border); }

  .blur {
    --title-color: #fddaea;
    --title-text: #808080;
    --mac-close-btn: #c0c0c0;
    --mac-close-btn-border: #a0a0a0; }

  #titlebar h1 {
    display: block;
    width: 100%;
    height: 28px;
    text-align: center;
    color: var(--title-text);
    background-color: var(--title-color);
    font-size: 14px;
    line-height: 28px;
    -webkit-app-region: drag; }

  #titlebar .close-btn::before {
    display: block;
    position: fixed;
    right: 0;
    top: 0;
    height: 28px;
    width: 48px;
    content: '×';
    color: var(--title-text);
    font-weight: 300;
    background-color: #f000;
    transition: color var(--animation-time) var(--ease-in-out);
    transition: background-color var(--animation-time) var(--ease-in-out);
    -webkit-app-region: no-drag;
    text-align: center;
    line-height: 28px; }

  #titlebar .close-btn:hover::before {
    background-color: #ff1122;
    color: var(--white-text); }

  #left-panel {
    height: var(--main-height);
    width: calc(240px + 1px);
    border-right: 1px solid var(--border-color);
    background-color: var(--left-panel-color); }
    #left-panel ul {
      cursor: pointer;
      width: 100%; }
      #left-panel ul li {
        display: block;
        width: 100%;
        height: 48px;
        line-height: 48px;
        font-size: 16px;
        color: var(--bold-text);
        padding-left: 48px;
        transition: background-color var(--animation-time) var(--ease-in-out); }
        #left-panel ul li.active {
          background-color: var(--left-panel-active-color); }
        #left-panel ul li:hover {
          background-color: var(--left-panel-hover-color); }
        #left-panel ul li::before {
          font-family: 'iconfont' !important;
          position: absolute;
          left: 0;
          width: 48px;
          height: 48px;
          text-align: center;
          font-size: 18px;
          line-height: 48px;
          color: var(--icon-color); }
        #left-panel ul li[data-target='resourcepackPage']::before {
          content: '`+`'; }
        #left-panel ul li[data-target='extensionPage']::before {
          content: '';
          font-size: 16px; }
        #left-panel ul li[data-target='toolPage']::before {
          content: '';
          font-size: 18px; }
        #left-panel ul li[data-target='settingPage']::before {
          content: '';
          font-size: 18px; }
        #left-panel ul li[data-target='aboutPage']::before {
          content: ''; }

  #bottom-panel {
    height: calc(64px + 1px);
    width: 100%;
    position: relative;
    background-color: var(--bottom-panel-color);
    border-top: 1px solid var(--border-color);
    margin: 0 auto; }
    #bottom-panel #serverInfo {
      font-size: 14px;
      position: absolute;
      line-height: 14px;
      top: 16px;
      left: 42px;
      color: var(--light-text);
      cursor: pointer; }
    #bottom-panel #pingInfo {
      cursor: default;
      font-size: 14px;
      position: absolute;
      line-height: 14px;
      top: 34px;
      left: 42px;
      color: var(--light-text); }
      #bottom-panel #pingInfo::before {
        display: block;
        position: absolute;
        border-radius: 50%;
        content: ' ';
        width: 10px;
        height: 10px;
        left: -24px;
        top: -8px; }
      #bottom-panel #pingInfo.offline::before {
        background-color: var(--ping-offline); }
      #bottom-panel #pingInfo.red::before {
        background-color: var(--ping-red); }
      #bottom-panel #pingInfo.green::before {
        background-color: var(--ping-green); }
      #bottom-panel #pingInfo.orange::before {
        background-color: var(--ping-orange); }
    #bottom-panel #launch {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0 48px;
      height: 64px;
      line-height: 64px;
      background-color: var(--main-color);
      color: var(--white-text);
      text-align: center;
      font-size: 24px;
      font-weight: 300;
      cursor: pointer;
      border: none;
      transition: background-color var(--animation-time) var(--ease-in-out); }
      #bottom-panel #launch:hover {
        background-color: var(--main-dark-color); }
      #bottom-panel #launch:disabled {
        cursor: not-allowed;
        background-color: var(--disabled-color); }

  #main-context > section > div.info-cards {
    color: var(--light-text);
    width: calc(100% - 16px);
    height: calc(100% - 40px - 20px);
    position: absolute;
    top: 40px;
    overflow-y: auto;
    padding-left: 102px; }
    #main-context > section > div.info-cards article {
      width: 400px;
      height: 144px;
      font-size: 14px;
      position: relative;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
      transition: box-shadow var(--animation-time) var(--ease-in-out);
      background-color: var(--info-card-color);
      float: left;
      margin-top: 8px;
      margin-bottom: 16px;
      margin-right: 36px; }
      #main-context > section > div.info-cards article:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2); }
      #main-context > section > div.info-cards article * {
        float: left;
        cursor: default;
        word-wrap: break-word; }
      #main-context > section > div.info-cards article img {
        width: 144px;
        height: 144px; }
      #main-context > section > div.info-cards article h3 {
        padding-top: 16px;
        padding-left: 20px;
        color: var(--bold-text);
        font-size: 14px;
        line-height: 14px;
        max-width: calc(100% - 20px - 144px); }
      #main-context > section > div.info-cards article span {
        padding-top: 16px;
        padding-right: 20px;
        float: right;
        font-size: 14px;
        line-height: 14px;
        max-width: calc(100% - 20px - 144px); }
      #main-context > section > div.info-cards article p {
        padding-left: 20px;
        padding-top: 6px;
        padding-right: 20px;
        width: var(--bold-text);
        width: calc(400px - 144px);
        line-height: 18px; }
      #main-context > section > div.info-cards article address {
        font-style: normal;
        padding-left: 20px;
        position: absolute;
        bottom: 14px;
        left: 144px; }
        #main-context > section > div.info-cards article address::before {
          font-family: 'iconfont' !important;
          font-size: 14px;
          content: '';
          padding-right: 4px; }
      #main-context > section > div.info-cards article input {
        display: none; }
      #main-context > section > div.info-cards article input[type='checkbox'] + label {
        height: 0;
        width: 0;
        line-height: 0;
        font-size: 12px;
        /* opacity: 0; */
        position: absolute;
        bottom: 16px;
        right: 20px;
        cursor: pointer;
        outline: none !important; }
        #main-context > section > div.info-cards article input[type='checkbox'] + label::before {
          content: ' ';
          display: block;
          width: 32px;
          height: 16px;
          border-radius: 8px;
          position: relative;
          right: 32px;
          bottom: 16px;
          background-color: var(--switch-disable-color);
          transition: background-color var(--animation-time) var(--ease-in-out); }
        #main-context > section > div.info-cards article input[type='checkbox'] + label::after {
          content: ' ';
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          position: relative;
          left: calc(-32px + 2px);
          bottom: calc(12px + 2px + 16px);
          background-color: var(--switch-ball-color);
          transition: left var(--animation-time) var(--ease-in-out); }
      #main-context > section > div.info-cards article input[type='checkbox']:checked + label::before {
        background-color: var(--switch-able-color); }
      #main-context > section > div.info-cards article input[type='checkbox']:checked + label::after {
        left: calc(-12px - 2px); }
      #main-context > section > div.info-cards article input[type='button'] + label {
        font-style: normal;
        position: absolute;
        bottom: 12px;
        right: 18px;
        background-color: transparent;
        border: 0;
        color: var(--light-text);
        cursor: pointer; }
        #main-context > section > div.info-cards article input[type='button'] + label:hover {
          color: var(--bold-text); }
        #main-context > section > div.info-cards article input[type='button'] + label::before {
          font-family: 'iconfont' !important;
          font-size: 16px;
          content: ''; }
      #main-context > section > div.info-cards article .remove-btn,
      #main-context > section > div.info-cards article .export-btn {
        font-style: normal;
        position: absolute;
        bottom: 14px;
        right: 38px;
        background-color: transparent;
        border: 0;
        color: var(--light-text);
        display: none;
        cursor: pointer; }
        #main-context > section > div.info-cards article .remove-btn:hover,
        #main-context > section > div.info-cards article .export-btn:hover {
          color: var(--bold-text); }
        #main-context > section > div.info-cards article .remove-btn::before,
        #main-context > section > div.info-cards article .export-btn::before {
          font-family: 'iconfont' !important;
          font-size: 14px;
          content: ''; }
      #main-context > section > div.info-cards article .export-btn {
        right: 18px; }
        #main-context > section > div.info-cards article .export-btn::before {
          content: ''; }
      #main-context > section > div.info-cards article.edit .remove-btn,
      #main-context > section > div.info-cards article.edit .export-btn {
        display: block; }
      #main-context > section > div.info-cards article.edit input + label {
        display: none; }

  #main-context > section[data-name='settingPage'] {
    padding: 40px 0 20px 102px; }
    #main-context > section[data-name='settingPage'] #save-configs {
      left: 102px; }
      #main-context > section[data-name='settingPage'] #save-configs::before {
        font-family: 'iconfont' !important;
        content: ''; }
    #main-context > section[data-name='settingPage'] #setting-inner {
      height: 100%;
      width: calc(100% - 16px);
      overflow-y: auto;
      display: flex;
      flex-direction: column; }
      #main-context > section[data-name='settingPage'] #setting-inner h3 {
        cursor: default;
        font-size: 18px;
        padding-top: 8px;
        line-height: 22px;
        color: var(--bold-text); }
      #main-context > section[data-name='settingPage'] #setting-inner p {
        height: 20px;
        margin-top: 4px;
        cursor: default;
        width: max-content;
        line-height: 20px;
        font-size: 14px;
        padding-left: 16px;
        color: var(--light-text); }
      #main-context > section[data-name='settingPage'] #setting-inner input {
        outline: none !important; }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='number'] {
        height: 20px;
        margin-top: 4px;
        margin-left: 2px;
        line-height: 20px;
        font-size: 14px;
        width: 36px; }
        #main-context > section[data-name='settingPage'] #setting-inner input[type='number']::-webkit-outer-spin-button, #main-context > section[data-name='settingPage'] #setting-inner input[type='number']::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
          margin: 0; }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='text'] {
        height: 20px;
        margin-top: 4px;
        margin-left: 2px;
        line-height: 20px;
        font-size: 14px;
        width: max-content; }
        #main-context > section[data-name='settingPage'] #setting-inner input[type='text']::-webkit-outer-spin-button, #main-context > section[data-name='settingPage'] #setting-inner input[type='text']::-webkit-inner-spin-button {
          -webkit-appearance: none !important;
          margin: 0; }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox'] {
        display: none; }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='number'] + label {
        width: max-content;
        height: 20px;
        margin-top: 4px;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        outline: none !important;
        padding-left: 10px;
        color: var(--light-text); }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='text'] + label {
        width: max-content;
        height: 20px;
        margin-top: 4px;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        outline: none !important;
        padding-left: 10px;
        color: var(--light-text); }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox'] + label {
        width: max-content;
        height: 20px;
        margin-top: 4px;
        line-height: 20px;
        font-size: 14px;
        cursor: pointer;
        outline: none !important;
        display: block;
        padding-left: 16px;
        color: var(--light-text); }
        #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox'] + label::before {
          content: ' ';
          display: inline-block;
          width: 32px;
          height: 16px;
          border-radius: 8px;
          position: relative;
          top: 3px;
          right: 12px;
          background-color: var(--switch-disable-color);
          transition: background-color var(--animation-time) var(--ease-in-out); }
        #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox'] + label::after {
          content: ' ';
          display: block;
          width: 12px;
          height: 12px;
          border-radius: 6px;
          position: relative;
          left: -10px;
          bottom: 16px;
          background-color: var(--switch-ball-color);
          transition: left var(--animation-time) var(--ease-in-out); }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox']:checked + label::before {
        background-color: var(--switch-able-color); }
      #main-context > section[data-name='settingPage'] #setting-inner input[type='checkbox']:checked + label::after {
        left: calc(-12px - 2px + 20px); }

  #main-context > section[data-name='aboutPage'] {
    padding: 40px 0 20px 102px; }
    #main-context > section[data-name='aboutPage'] #about-inner {
      height: 100%;
      width: calc(100% - 80px);
      overflow-y: auto;
      display: flex;
      flex-direction: column; }
      #main-context > section[data-name='aboutPage'] #about-inner h3 {
        cursor: default;
        font-size: 18px;
        padding-top: 8px;
        line-height: 22px;
        color: var(--bold-text); }
      #main-context > section[data-name='aboutPage'] #about-inner p {
        margin-top: 4px;
        padding-bottom: 4px;
        cursor: default;
        line-height: 20px;
        font-size: 14px;
        padding-left: 16px;
        color: var(--light-text); }
        #main-context > section[data-name='aboutPage'] #about-inner p span {
          padding-right: 5px; }

  #main-context * {
    float: left; }

  #main-context section {
    display: none;
    height: var(--main-height);
    width: calc(1280px - 241px);
    background-color: var(--section-color);
    position: relative; }
    #main-context section.show {
      display: block; }
    #main-context section .big-btn {
      font-style: normal;
      position: absolute;
      top: 8px;
      background-color: transparent;
      border: 0;
      color: var(--light-text); }
      #main-context section .big-btn:hover {
        color: var(--bold-text); }
      #main-context section .big-btn::before {
        font-size: 24px; }
    #main-context section .refresh-btn {
      left: 102px; }
      #main-context section .refresh-btn::before {
        font-family: 'iconfont' !important;
        content: ''; }
    #main-context section .openfolder-btn {
      right: 180px; }
    #main-context section .install-btn {
      right: 140px; }
      #main-context section .install-btn::before {
        font-family: 'iconfont' !important;
        content: ''; }
    #main-context section .edit-btn {
      right: 100px; }
      #main-context section .edit-btn::before {
        font-family: 'iconfont' !important;
        content: ''; }

  #update-card {
    display: none;
    padding: 16px 20px;
    position: fixed;
    left: 0;
    bottom: calc(64px);
    height: calc(144px + 2px);
    width: calc(256px + 2px);
    background-color: var(--info-card-color);
    border: 1px solid var(--border-color);
    user-select: none; }

  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0; }
    1% {
      display: block;
      opacity: 0; }
    100% {
      display: block;
      opacity: 1; } }
    #update-card h3 {
      color: var(--bold-text);
      font-size: 14px;
      line-height: 14px;
      max-width: 100%;
      margin-bottom: 8px;
      cursor: default; }
    #update-card p {
      font-size: 14px;
      line-height: 18px;
      color: var(--light-text);
      margin-bottom: 8px;
      cursor: default; }
    #update-card button {
      font-size: 12px;
      font-weight: 400; }
      #update-card button.hide {
        display: none; }
      #update-card button.updateCard_close {
        position: absolute;
        top: 100px;
        left: 24px;
        color: var(--light-text);
        border: none;
        text-underline-position: under;
        background-color: transparent;
        text-decoration: underline;
        transition: color var(--animation-time) var(--ease-in-out); }
        #update-card button.updateCard_close:hover {
          color: var(--bold-text); }
      #update-card button.updateCard_view {
        position: absolute;
        top: 100px;
        right: 24px;
        border: none;
        color: var(--white-text);
        background-color: var(--main-color);
        transition: background-color var(--animation-time) var(--ease-in-out);
        padding: 4px 12px;
        float: right; }
        #update-card button.updateCard_view:hover {
          background-color: var(--main-dark-color); }
        #update-card button.updateCard_view:disabled {
          background-color: var(--disabled-color);
          cursor: not-allowed; }
    #update-card.show {
      display: block;
      animation: fadeInFromNone var(--animation-time) var(--ease-in-out); }

  @font-face {
    font-family: '思源黑体 CN';
    src: url("../fonts/SourceHanSansCN-Light.otf") format("opentype");
    font-weight: 300; }

  @font-face {
    font-family: '思源黑体 CN';
    src: url("../fonts/SourceHanSansCN-Normal.otf") format("opentype");
    font-weight: 400; }

  @font-face {
    font-family: 'iconfont';
    src: url("../iconfont/iconfont.eot");
    src: url("../iconfont/iconfont.eot?#iefix") format("embedded-opentype"), url("../iconfont/iconfont.woff") format("woff"), url("../iconfont/iconfont.ttf") format("truetype"); }

  .iconfont {
    font-family: 'iconfont' !important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale; }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url("../material/fonts/MaterialIcons-Regular.eot");
    /* For IE6-8 */
    src: local("☺"), url("../material/fonts/MaterialIcons-Regular.woff2") format("woff2"), url("../material/fonts/MaterialIcons-Regular.woff") format("woff"), url("../material/fonts/MaterialIcons-Regular.ttf") format("truetype"); }

  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    /* Preferred icon size */
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
    /* Support for IE. */
    font-feature-settings: 'liga'; }
    .material-icons._10k:before {
      content: "\e951"; }
    .material-icons._10mp:before {
      content: "\e952"; }
    .material-icons._11mp:before {
      content: "\e953"; }
    .material-icons._12mp:before {
      content: "\e954"; }
    .material-icons._13mp:before {
      content: "\e955"; }
    .material-icons._14mp:before {
      content: "\e956"; }
    .material-icons._15mp:before {
      content: "\e957"; }
    .material-icons._16mp:before {
      content: "\e958"; }
    .material-icons._17mp:before {
      content: "\e959"; }
    .material-icons._18mp:before {
      content: "\e95a"; }
    .material-icons._19mp:before {
      content: "\e95b"; }
    .material-icons._1k:before {
      content: "\e95c"; }
    .material-icons._1k_plus:before {
      content: "\e95d"; }
    .material-icons._20mp:before {
      content: "\e95e"; }
    .material-icons._21mp:before {
      content: "\e95f"; }
    .material-icons._22mp:before {
      content: "\e960"; }
    .material-icons._23mp:before {
      content: "\e961"; }
    .material-icons._24mp:before {
      content: "\e962"; }
    .material-icons._2k:before {
      content: "\e963"; }
    .material-icons._2k_plus:before {
      content: "\e964"; }
    .material-icons._2mp:before {
      content: "\e965"; }
    .material-icons._360:before {
      content: "\e577"; }
    .material-icons._3d_rotation:before {
      content: "\e84d"; }
    .material-icons._3k:before {
      content: "\e966"; }
    .material-icons._3k_plus:before {
      content: "\e967"; }
    .material-icons._3mp:before {
      content: "\e968"; }
    .material-icons._4k:before {
      content: "\e072"; }
    .material-icons._4k_plus:before {
      content: "\e969"; }
    .material-icons._4mp:before {
      content: "\e96a"; }
    .material-icons._5k:before {
      content: "\e96b"; }
    .material-icons._5k_plus:before {
      content: "\e96c"; }
    .material-icons._5mp:before {
      content: "\e96d"; }
    .material-icons._6k:before {
      content: "\e96e"; }
    .material-icons._6k_plus:before {
      content: "\e96f"; }
    .material-icons._6mp:before {
      content: "\e970"; }
    .material-icons._7k:before {
      content: "\e971"; }
    .material-icons._7k_plus:before {
      content: "\e972"; }
    .material-icons._7mp:before {
      content: "\e973"; }
    .material-icons._8k:before {
      content: "\e974"; }
    .material-icons._8k_plus:before {
      content: "\e975"; }
    .material-icons._8mp:before {
      content: "\e976"; }
    .material-icons._9k:before {
      content: "\e977"; }
    .material-icons._9k_plus:before {
      content: "\e978"; }
    .material-icons._9mp:before {
      content: "\e979"; }
    .material-icons.ac_unit:before {
      content: "\eb3b"; }
    .material-icons.access_alarm:before {
      content: "\e190"; }
    .material-icons.access_alarms:before {
      content: "\e191"; }
    .material-icons.access_time:before {
      content: "\e192"; }
    .material-icons.accessibility:before {
      content: "\e84e"; }
    .material-icons.accessibility_new:before {
      content: "\e92c"; }
    .material-icons.accessible:before {
      content: "\e914"; }
    .material-icons.accessible_forward:before {
      content: "\e934"; }
    .material-icons.account_balance:before {
      content: "\e84f"; }
    .material-icons.account_balance_wallet:before {
      content: "\e850"; }
    .material-icons.account_box:before {
      content: "\e851"; }
    .material-icons.account_circle:before {
      content: "\e853"; }
    .material-icons.account_tree:before {
      content: "\e97a"; }
    .material-icons.adb:before {
      content: "\e60e"; }
    .material-icons.add:before {
      content: "\e145"; }
    .material-icons.add_a_photo:before {
      content: "\e439"; }
    .material-icons.add_alarm:before {
      content: "\e193"; }
    .material-icons.add_alert:before {
      content: "\e003"; }
    .material-icons.add_box:before {
      content: "\e146"; }
    .material-icons.add_call:before {
      content: "\e0e8"; }
    .material-icons.add_chart:before {
      content: "\e97b"; }
    .material-icons.add_circle:before {
      content: "\e147"; }
    .material-icons.add_circle_outline:before {
      content: "\e148"; }
    .material-icons.add_comment:before {
      content: "\e266"; }
    .material-icons.add_ic_call:before {
      content: "\e97c"; }
    .material-icons.add_link:before {
      content: "\e178"; }
    .material-icons.add_location:before {
      content: "\e567"; }
    .material-icons.add_moderator:before {
      content: "\e97d"; }
    .material-icons.add_photo_alternate:before {
      content: "\e43e"; }
    .material-icons.add_shopping_cart:before {
      content: "\e854"; }
    .material-icons.add_to_home_screen:before {
      content: "\e1fe"; }
    .material-icons.add_to_photos:before {
      content: "\e39d"; }
    .material-icons.add_to_queue:before {
      content: "\e05c"; }
    .material-icons.adjust:before {
      content: "\e39e"; }
    .material-icons.airline_seat_flat:before {
      content: "\e630"; }
    .material-icons.airline_seat_flat_angled:before {
      content: "\e631"; }
    .material-icons.airline_seat_individual_suite:before {
      content: "\e632"; }
    .material-icons.airline_seat_legroom_extra:before {
      content: "\e633"; }
    .material-icons.airline_seat_legroom_normal:before {
      content: "\e634"; }
    .material-icons.airline_seat_legroom_reduced:before {
      content: "\e635"; }
    .material-icons.airline_seat_recline_extra:before {
      content: "\e636"; }
    .material-icons.airline_seat_recline_normal:before {
      content: "\e637"; }
    .material-icons.airplanemode_active:before {
      content: "\e195"; }
    .material-icons.airplanemode_inactive:before {
      content: "\e194"; }
    .material-icons.airplanemode_off:before {
      content: "\e194"; }
    .material-icons.airplanemode_on:before {
      content: "\e195"; }
    .material-icons.airplay:before {
      content: "\e055"; }
    .material-icons.airport_shuttle:before {
      content: "\eb3c"; }
    .material-icons.alarm:before {
      content: "\e855"; }
    .material-icons.alarm_add:before {
      content: "\e856"; }
    .material-icons.alarm_off:before {
      content: "\e857"; }
    .material-icons.alarm_on:before {
      content: "\e858"; }
    .material-icons.album:before {
      content: "\e019"; }
    .material-icons.all_inbox:before {
      content: "\e97f"; }
    .material-icons.all_inclusive:before {
      content: "\eb3d"; }
    .material-icons.all_out:before {
      content: "\e90b"; }
    .material-icons.alternate_email:before {
      content: "\e0e6"; }
    .material-icons.amp_stories:before {
      content: "\ea13"; }
    .material-icons.android:before {
      content: "\e859"; }
    .material-icons.announcement:before {
      content: "\e85a"; }
    .material-icons.apartment:before {
      content: "\ea40"; }
    .material-icons.approval:before {
      content: "\e982"; }
    .material-icons.apps:before {
      content: "\e5c3"; }
    .material-icons.archive:before {
      content: "\e149"; }
    .material-icons.arrow_back:before {
      content: "\e5c4"; }
    .material-icons.arrow_back_ios:before {
      content: "\e5e0"; }
    .material-icons.arrow_downward:before {
      content: "\e5db"; }
    .material-icons.arrow_drop_down:before {
      content: "\e5c5"; }
    .material-icons.arrow_drop_down_circle:before {
      content: "\e5c6"; }
    .material-icons.arrow_drop_up:before {
      content: "\e5c7"; }
    .material-icons.arrow_forward:before {
      content: "\e5c8"; }
    .material-icons.arrow_forward_ios:before {
      content: "\e5e1"; }
    .material-icons.arrow_left:before {
      content: "\e5de"; }
    .material-icons.arrow_right:before {
      content: "\e5df"; }
    .material-icons.arrow_right_alt:before {
      content: "\e941"; }
    .material-icons.arrow_upward:before {
      content: "\e5d8"; }
    .material-icons.art_track:before {
      content: "\e060"; }
    .material-icons.aspect_ratio:before {
      content: "\e85b"; }
    .material-icons.assessment:before {
      content: "\e85c"; }
    .material-icons.assignment:before {
      content: "\e85d"; }
    .material-icons.assignment_ind:before {
      content: "\e85e"; }
    .material-icons.assignment_late:before {
      content: "\e85f"; }
    .material-icons.assignment_return:before {
      content: "\e860"; }
    .material-icons.assignment_returned:before {
      content: "\e861"; }
    .material-icons.assignment_turned_in:before {
      content: "\e862"; }
    .material-icons.assistant:before {
      content: "\e39f"; }
    .material-icons.assistant_direction:before {
      content: "\e988"; }
    .material-icons.assistant_navigation:before {
      content: "\e989"; }
    .material-icons.assistant_photo:before {
      content: "\e3a0"; }
    .material-icons.atm:before {
      content: "\e573"; }
    .material-icons.attach_file:before {
      content: "\e226"; }
    .material-icons.attach_money:before {
      content: "\e227"; }
    .material-icons.attachment:before {
      content: "\e2bc"; }
    .material-icons.attractions:before {
      content: "\ea52"; }
    .material-icons.audiotrack:before {
      content: "\e3a1"; }
    .material-icons.autorenew:before {
      content: "\e863"; }
    .material-icons.av_timer:before {
      content: "\e01b"; }
    .material-icons.backspace:before {
      content: "\e14a"; }
    .material-icons.backup:before {
      content: "\e864"; }
    .material-icons.badge:before {
      content: "\ea67"; }
    .material-icons.bakery_dining:before {
      content: "\ea53"; }
    .material-icons.ballot:before {
      content: "\e172"; }
    .material-icons.bar_chart:before {
      content: "\e26b"; }
    .material-icons.bathtub:before {
      content: "\ea41"; }
    .material-icons.battery_alert:before {
      content: "\e19c"; }
    .material-icons.battery_charging_full:before {
      content: "\e1a3"; }
    .material-icons.battery_full:before {
      content: "\e1a4"; }
    .material-icons.battery_std:before {
      content: "\e1a5"; }
    .material-icons.battery_unknown:before {
      content: "\e1a6"; }
    .material-icons.beach_access:before {
      content: "\eb3e"; }
    .material-icons.beenhere:before {
      content: "\e52d"; }
    .material-icons.block:before {
      content: "\e14b"; }
    .material-icons.bluetooth:before {
      content: "\e1a7"; }
    .material-icons.bluetooth_audio:before {
      content: "\e60f"; }
    .material-icons.bluetooth_connected:before {
      content: "\e1a8"; }
    .material-icons.bluetooth_disabled:before {
      content: "\e1a9"; }
    .material-icons.bluetooth_searching:before {
      content: "\e1aa"; }
    .material-icons.blur_circular:before {
      content: "\e3a2"; }
    .material-icons.blur_linear:before {
      content: "\e3a3"; }
    .material-icons.blur_off:before {
      content: "\e3a4"; }
    .material-icons.blur_on:before {
      content: "\e3a5"; }
    .material-icons.bolt:before {
      content: "\ea0b"; }
    .material-icons.book:before {
      content: "\e865"; }
    .material-icons.bookmark:before {
      content: "\e866"; }
    .material-icons.bookmark_border:before {
      content: "\e867"; }
    .material-icons.bookmark_outline:before {
      content: "\e867"; }
    .material-icons.bookmarks:before {
      content: "\e98b"; }
    .material-icons.border_all:before {
      content: "\e228"; }
    .material-icons.border_bottom:before {
      content: "\e229"; }
    .material-icons.border_clear:before {
      content: "\e22a"; }
    .material-icons.border_color:before {
      content: "\e22b"; }
    .material-icons.border_horizontal:before {
      content: "\e22c"; }
    .material-icons.border_inner:before {
      content: "\e22d"; }
    .material-icons.border_left:before {
      content: "\e22e"; }
    .material-icons.border_outer:before {
      content: "\e22f"; }
    .material-icons.border_right:before {
      content: "\e230"; }
    .material-icons.border_style:before {
      content: "\e231"; }
    .material-icons.border_top:before {
      content: "\e232"; }
    .material-icons.border_vertical:before {
      content: "\e233"; }
    .material-icons.branding_watermark:before {
      content: "\e06b"; }
    .material-icons.breakfast_dining:before {
      content: "\ea54"; }
    .material-icons.brightness_1:before {
      content: "\e3a6"; }
    .material-icons.brightness_2:before {
      content: "\e3a7"; }
    .material-icons.brightness_3:before {
      content: "\e3a8"; }
    .material-icons.brightness_4:before {
      content: "\e3a9"; }
    .material-icons.brightness_5:before {
      content: "\e3aa"; }
    .material-icons.brightness_6:before {
      content: "\e3ab"; }
    .material-icons.brightness_7:before {
      content: "\e3ac"; }
    .material-icons.brightness_auto:before {
      content: "\e1ab"; }
    .material-icons.brightness_high:before {
      content: "\e1ac"; }
    .material-icons.brightness_low:before {
      content: "\e1ad"; }
    .material-icons.brightness_medium:before {
      content: "\e1ae"; }
    .material-icons.broken_image:before {
      content: "\e3ad"; }
    .material-icons.brunch_dining:before {
      content: "\ea73"; }
    .material-icons.brush:before {
      content: "\e3ae"; }
    .material-icons.bubble_chart:before {
      content: "\e6dd"; }
    .material-icons.bug_report:before {
      content: "\e868"; }
    .material-icons.build:before {
      content: "\e869"; }
    .material-icons.burst_mode:before {
      content: "\e43c"; }
    .material-icons.bus_alert:before {
      content: "\e98f"; }
    .material-icons.business:before {
      content: "\e0af"; }
    .material-icons.business_center:before {
      content: "\eb3f"; }
    .material-icons.cached:before {
      content: "\e86a"; }
    .material-icons.cake:before {
      content: "\e7e9"; }
    .material-icons.calendar_today:before {
      content: "\e935"; }
    .material-icons.calendar_view_day:before {
      content: "\e936"; }
    .material-icons.call:before {
      content: "\e0b0"; }
    .material-icons.call_end:before {
      content: "\e0b1"; }
    .material-icons.call_made:before {
      content: "\e0b2"; }
    .material-icons.call_merge:before {
      content: "\e0b3"; }
    .material-icons.call_missed:before {
      content: "\e0b4"; }
    .material-icons.call_missed_outgoing:before {
      content: "\e0e4"; }
    .material-icons.call_received:before {
      content: "\e0b5"; }
    .material-icons.call_split:before {
      content: "\e0b6"; }
    .material-icons.call_to_action:before {
      content: "\e06c"; }
    .material-icons.camera:before {
      content: "\e3af"; }
    .material-icons.camera_alt:before {
      content: "\e3b0"; }
    .material-icons.camera_enhance:before {
      content: "\e8fc"; }
    .material-icons.camera_front:before {
      content: "\e3b1"; }
    .material-icons.camera_rear:before {
      content: "\e3b2"; }
    .material-icons.camera_roll:before {
      content: "\e3b3"; }
    .material-icons.cancel:before {
      content: "\e5c9"; }
    .material-icons.cancel_presentation:before {
      content: "\e0e9"; }
    .material-icons.cancel_schedule_send:before {
      content: "\ea39"; }
    .material-icons.car_rental:before {
      content: "\ea55"; }
    .material-icons.car_repair:before {
      content: "\ea56"; }
    .material-icons.card_giftcard:before {
      content: "\e8f6"; }
    .material-icons.card_membership:before {
      content: "\e8f7"; }
    .material-icons.card_travel:before {
      content: "\e8f8"; }
    .material-icons.cases:before {
      content: "\e992"; }
    .material-icons.casino:before {
      content: "\eb40"; }
    .material-icons.cast:before {
      content: "\e307"; }
    .material-icons.cast_connected:before {
      content: "\e308"; }
    .material-icons.category:before {
      content: "\e574"; }
    .material-icons.celebration:before {
      content: "\ea65"; }
    .material-icons.cell_wifi:before {
      content: "\e0ec"; }
    .material-icons.center_focus_strong:before {
      content: "\e3b4"; }
    .material-icons.center_focus_weak:before {
      content: "\e3b5"; }
    .material-icons.change_history:before {
      content: "\e86b"; }
    .material-icons.chat:before {
      content: "\e0b7"; }
    .material-icons.chat_bubble:before {
      content: "\e0ca"; }
    .material-icons.chat_bubble_outline:before {
      content: "\e0cb"; }
    .material-icons.check:before {
      content: "\e5ca"; }
    .material-icons.check_box:before {
      content: "\e834"; }
    .material-icons.check_box_outline_blank:before {
      content: "\e835"; }
    .material-icons.check_circle:before {
      content: "\e86c"; }
    .material-icons.check_circle_outline:before {
      content: "\e92d"; }
    .material-icons.chevron_left:before {
      content: "\e5cb"; }
    .material-icons.chevron_right:before {
      content: "\e5cc"; }
    .material-icons.child_care:before {
      content: "\eb41"; }
    .material-icons.child_friendly:before {
      content: "\eb42"; }
    .material-icons.chrome_reader_mode:before {
      content: "\e86d"; }
    .material-icons.circle_notifications:before {
      content: "\e994"; }
    .material-icons.class:before {
      content: "\e86e"; }
    .material-icons.clear:before {
      content: "\e14c"; }
    .material-icons.clear_all:before {
      content: "\e0b8"; }
    .material-icons.close:before {
      content: "\e5cd"; }
    .material-icons.closed_caption:before {
      content: "\e01c"; }
    .material-icons.closed_caption_off:before {
      content: "\e996"; }
    .material-icons.cloud:before {
      content: "\e2bd"; }
    .material-icons.cloud_circle:before {
      content: "\e2be"; }
    .material-icons.cloud_done:before {
      content: "\e2bf"; }
    .material-icons.cloud_download:before {
      content: "\e2c0"; }
    .material-icons.cloud_off:before {
      content: "\e2c1"; }
    .material-icons.cloud_queue:before {
      content: "\e2c2"; }
    .material-icons.cloud_upload:before {
      content: "\e2c3"; }
    .material-icons.code:before {
      content: "\e86f"; }
    .material-icons.collections:before {
      content: "\e3b6"; }
    .material-icons.collections_bookmark:before {
      content: "\e431"; }
    .material-icons.color_lens:before {
      content: "\e3b7"; }
    .material-icons.colorize:before {
      content: "\e3b8"; }
    .material-icons.comment:before {
      content: "\e0b9"; }
    .material-icons.commute:before {
      content: "\e940"; }
    .material-icons.compare:before {
      content: "\e3b9"; }
    .material-icons.compare_arrows:before {
      content: "\e915"; }
    .material-icons.compass_calibration:before {
      content: "\e57c"; }
    .material-icons.compress:before {
      content: "\e94d"; }
    .material-icons.computer:before {
      content: "\e30a"; }
    .material-icons.confirmation_num:before {
      content: "\e638"; }
    .material-icons.confirmation_number:before {
      content: "\e638"; }
    .material-icons.connected_tv:before {
      content: "\e998"; }
    .material-icons.contact_mail:before {
      content: "\e0d0"; }
    .material-icons.contact_phone:before {
      content: "\e0cf"; }
    .material-icons.contact_support:before {
      content: "\e94c"; }
    .material-icons.contactless:before {
      content: "\ea71"; }
    .material-icons.contacts:before {
      content: "\e0ba"; }
    .material-icons.content_copy:before {
      content: "\e14d"; }
    .material-icons.content_cut:before {
      content: "\e14e"; }
    .material-icons.content_paste:before {
      content: "\e14f"; }
    .material-icons.control_camera:before {
      content: "\e074"; }
    .material-icons.control_point:before {
      content: "\e3ba"; }
    .material-icons.control_point_duplicate:before {
      content: "\e3bb"; }
    .material-icons.copyright:before {
      content: "\e90c"; }
    .material-icons.create:before {
      content: "\e150"; }
    .material-icons.create_new_folder:before {
      content: "\e2cc"; }
    .material-icons.credit_card:before {
      content: "\e870"; }
    .material-icons.crop:before {
      content: "\e3be"; }
    .material-icons.crop_16_9:before {
      content: "\e3bc"; }
    .material-icons.crop_3_2:before {
      content: "\e3bd"; }
    .material-icons.crop_5_4:before {
      content: "\e3bf"; }
    .material-icons.crop_7_5:before {
      content: "\e3c0"; }
    .material-icons.crop_din:before {
      content: "\e3c1"; }
    .material-icons.crop_free:before {
      content: "\e3c2"; }
    .material-icons.crop_landscape:before {
      content: "\e3c3"; }
    .material-icons.crop_original:before {
      content: "\e3c4"; }
    .material-icons.crop_portrait:before {
      content: "\e3c5"; }
    .material-icons.crop_rotate:before {
      content: "\e437"; }
    .material-icons.crop_square:before {
      content: "\e3c6"; }
    .material-icons.dangerous:before {
      content: "\e99a"; }
    .material-icons.dashboard:before {
      content: "\e871"; }
    .material-icons.dashboard_customize:before {
      content: "\e99b"; }
    .material-icons.data_usage:before {
      content: "\e1af"; }
    .material-icons.date_range:before {
      content: "\e916"; }
    .material-icons.deck:before {
      content: "\ea42"; }
    .material-icons.dehaze:before {
      content: "\e3c7"; }
    .material-icons.delete:before {
      content: "\e872"; }
    .material-icons.delete_forever:before {
      content: "\e92b"; }
    .material-icons.delete_outline:before {
      content: "\e92e"; }
    .material-icons.delete_sweep:before {
      content: "\e16c"; }
    .material-icons.delivery_dining:before {
      content: "\ea72"; }
    .material-icons.departure_board:before {
      content: "\e576"; }
    .material-icons.description:before {
      content: "\e873"; }
    .material-icons.desktop_access_disabled:before {
      content: "\e99d"; }
    .material-icons.desktop_mac:before {
      content: "\e30b"; }
    .material-icons.desktop_windows:before {
      content: "\e30c"; }
    .material-icons.details:before {
      content: "\e3c8"; }
    .material-icons.developer_board:before {
      content: "\e30d"; }
    .material-icons.developer_mode:before {
      content: "\e1b0"; }
    .material-icons.device_hub:before {
      content: "\e335"; }
    .material-icons.device_thermostat:before {
      content: "\e1ff"; }
    .material-icons.device_unknown:before {
      content: "\e339"; }
    .material-icons.devices:before {
      content: "\e1b1"; }
    .material-icons.devices_other:before {
      content: "\e337"; }
    .material-icons.dialer_sip:before {
      content: "\e0bb"; }
    .material-icons.dialpad:before {
      content: "\e0bc"; }
    .material-icons.dinner_dining:before {
      content: "\ea57"; }
    .material-icons.directions:before {
      content: "\e52e"; }
    .material-icons.directions_bike:before {
      content: "\e52f"; }
    .material-icons.directions_boat:before {
      content: "\e532"; }
    .material-icons.directions_bus:before {
      content: "\e530"; }
    .material-icons.directions_car:before {
      content: "\e531"; }
    .material-icons.directions_ferry:before {
      content: "\e532"; }
    .material-icons.directions_railway:before {
      content: "\e534"; }
    .material-icons.directions_run:before {
      content: "\e566"; }
    .material-icons.directions_subway:before {
      content: "\e533"; }
    .material-icons.directions_train:before {
      content: "\e534"; }
    .material-icons.directions_transit:before {
      content: "\e535"; }
    .material-icons.directions_walk:before {
      content: "\e536"; }
    .material-icons.disc_full:before {
      content: "\e610"; }
    .material-icons.dnd_forwardslash:before {
      content: "\e611"; }
    .material-icons.dns:before {
      content: "\e875"; }
    .material-icons.do_not_disturb:before {
      content: "\e612"; }
    .material-icons.do_not_disturb_alt:before {
      content: "\e611"; }
    .material-icons.do_not_disturb_off:before {
      content: "\e643"; }
    .material-icons.do_not_disturb_on:before {
      content: "\e644"; }
    .material-icons.dock:before {
      content: "\e30e"; }
    .material-icons.domain:before {
      content: "\e7ee"; }
    .material-icons.domain_disabled:before {
      content: "\e0ef"; }
    .material-icons.done:before {
      content: "\e876"; }
    .material-icons.done_all:before {
      content: "\e877"; }
    .material-icons.done_outline:before {
      content: "\e92f"; }
    .material-icons.donut_large:before {
      content: "\e917"; }
    .material-icons.donut_small:before {
      content: "\e918"; }
    .material-icons.double_arrow:before {
      content: "\ea50"; }
    .material-icons.drafts:before {
      content: "\e151"; }
    .material-icons.drag_handle:before {
      content: "\e25d"; }
    .material-icons.drag_indicator:before {
      content: "\e945"; }
    .material-icons.drive_eta:before {
      content: "\e613"; }
    .material-icons.drive_file_move_outline:before {
      content: "\e9a1"; }
    .material-icons.drive_file_rename_outline:before {
      content: "\e9a2"; }
    .material-icons.drive_folder_upload:before {
      content: "\e9a3"; }
    .material-icons.dry_cleaning:before {
      content: "\ea58"; }
    .material-icons.duo:before {
      content: "\e9a5"; }
    .material-icons.dvr:before {
      content: "\e1b2"; }
    .material-icons.dynamic_feed:before {
      content: "\ea14"; }
    .material-icons.eco:before {
      content: "\ea35"; }
    .material-icons.edit:before {
      content: "\e3c9"; }
    .material-icons.edit_attributes:before {
      content: "\e578"; }
    .material-icons.edit_location:before {
      content: "\e568"; }
    .material-icons.edit_off:before {
      content: "\e950"; }
    .material-icons.eject:before {
      content: "\e8fb"; }
    .material-icons.email:before {
      content: "\e0be"; }
    .material-icons.emoji_emotions:before {
      content: "\ea22"; }
    .material-icons.emoji_events:before {
      content: "\ea23"; }
    .material-icons.emoji_flags:before {
      content: "\ea1a"; }
    .material-icons.emoji_food_beverage:before {
      content: "\ea1b"; }
    .material-icons.emoji_nature:before {
      content: "\ea1c"; }
    .material-icons.emoji_objects:before {
      content: "\ea24"; }
    .material-icons.emoji_people:before {
      content: "\ea1d"; }
    .material-icons.emoji_symbols:before {
      content: "\ea1e"; }
    .material-icons.emoji_transportation:before {
      content: "\ea1f"; }
    .material-icons.enhance_photo_translate:before {
      content: "\e8fc"; }
    .material-icons.enhanced_encryption:before {
      content: "\e63f"; }
    .material-icons.equalizer:before {
      content: "\e01d"; }
    .material-icons.error:before {
      content: "\e000"; }
    .material-icons.error_outline:before {
      content: "\e001"; }
    .material-icons.euro:before {
      content: "\ea15"; }
    .material-icons.euro_symbol:before {
      content: "\e926"; }
    .material-icons.ev_station:before {
      content: "\e56d"; }
    .material-icons.event:before {
      content: "\e878"; }
    .material-icons.event_available:before {
      content: "\e614"; }
    .material-icons.event_busy:before {
      content: "\e615"; }
    .material-icons.event_note:before {
      content: "\e616"; }
    .material-icons.event_seat:before {
      content: "\e903"; }
    .material-icons.exit_to_app:before {
      content: "\e879"; }
    .material-icons.expand:before {
      content: "\e94f"; }
    .material-icons.expand_less:before {
      content: "\e5ce"; }
    .material-icons.expand_more:before {
      content: "\e5cf"; }
    .material-icons.explicit:before {
      content: "\e01e"; }
    .material-icons.explore:before {
      content: "\e87a"; }
    .material-icons.explore_off:before {
      content: "\e9a8"; }
    .material-icons.exposure:before {
      content: "\e3ca"; }
    .material-icons.exposure_minus_1:before {
      content: "\e3cb"; }
    .material-icons.exposure_minus_2:before {
      content: "\e3cc"; }
    .material-icons.exposure_neg_1:before {
      content: "\e3cb"; }
    .material-icons.exposure_neg_2:before {
      content: "\e3cc"; }
    .material-icons.exposure_plus_1:before {
      content: "\e3cd"; }
    .material-icons.exposure_plus_2:before {
      content: "\e3ce"; }
    .material-icons.exposure_zero:before {
      content: "\e3cf"; }
    .material-icons.extension:before {
      content: "\e87b"; }
    .material-icons.face:before {
      content: "\e87c"; }
    .material-icons.fast_forward:before {
      content: "\e01f"; }
    .material-icons.fast_rewind:before {
      content: "\e020"; }
    .material-icons.fastfood:before {
      content: "\e57a"; }
    .material-icons.favorite:before {
      content: "\e87d"; }
    .material-icons.favorite_border:before {
      content: "\e87e"; }
    .material-icons.favorite_outline:before {
      content: "\e87e"; }
    .material-icons.featured_play_list:before {
      content: "\e06d"; }
    .material-icons.featured_video:before {
      content: "\e06e"; }
    .material-icons.feedback:before {
      content: "\e87f"; }
    .material-icons.festival:before {
      content: "\ea68"; }
    .material-icons.fiber_dvr:before {
      content: "\e05d"; }
    .material-icons.fiber_manual_record:before {
      content: "\e061"; }
    .material-icons.fiber_new:before {
      content: "\e05e"; }
    .material-icons.fiber_pin:before {
      content: "\e06a"; }
    .material-icons.fiber_smart_record:before {
      content: "\e062"; }
    .material-icons.file_copy:before {
      content: "\e173"; }
    .material-icons.file_download:before {
      content: "\e2c4"; }
    .material-icons.file_download_done:before {
      content: "\e9aa"; }
    .material-icons.file_present:before {
      content: "\ea0e"; }
    .material-icons.file_upload:before {
      content: "\e2c6"; }
    .material-icons.filter:before {
      content: "\e3d3"; }
    .material-icons.filter_1:before {
      content: "\e3d0"; }
    .material-icons.filter_2:before {
      content: "\e3d1"; }
    .material-icons.filter_3:before {
      content: "\e3d2"; }
    .material-icons.filter_4:before {
      content: "\e3d4"; }
    .material-icons.filter_5:before {
      content: "\e3d5"; }
    .material-icons.filter_6:before {
      content: "\e3d6"; }
    .material-icons.filter_7:before {
      content: "\e3d7"; }
    .material-icons.filter_8:before {
      content: "\e3d8"; }
    .material-icons.filter_9:before {
      content: "\e3d9"; }
    .material-icons.filter_9_plus:before {
      content: "\e3da"; }
    .material-icons.filter_b_and_w:before {
      content: "\e3db"; }
    .material-icons.filter_center_focus:before {
      content: "\e3dc"; }
    .material-icons.filter_drama:before {
      content: "\e3dd"; }
    .material-icons.filter_frames:before {
      content: "\e3de"; }
    .material-icons.filter_hdr:before {
      content: "\e3df"; }
    .material-icons.filter_list:before {
      content: "\e152"; }
    .material-icons.filter_list_alt:before {
      content: "\e94e"; }
    .material-icons.filter_none:before {
      content: "\e3e0"; }
    .material-icons.filter_tilt_shift:before {
      content: "\e3e2"; }
    .material-icons.filter_vintage:before {
      content: "\e3e3"; }
    .material-icons.find_in_page:before {
      content: "\e880"; }
    .material-icons.find_replace:before {
      content: "\e881"; }
    .material-icons.fingerprint:before {
      content: "\e90d"; }
    .material-icons.fireplace:before {
      content: "\ea43"; }
    .material-icons.first_page:before {
      content: "\e5dc"; }
    .material-icons.fit_screen:before {
      content: "\ea10"; }
    .material-icons.fitness_center:before {
      content: "\eb43"; }
    .material-icons.flag:before {
      content: "\e153"; }
    .material-icons.flare:before {
      content: "\e3e4"; }
    .material-icons.flash_auto:before {
      content: "\e3e5"; }
    .material-icons.flash_off:before {
      content: "\e3e6"; }
    .material-icons.flash_on:before {
      content: "\e3e7"; }
    .material-icons.flight:before {
      content: "\e539"; }
    .material-icons.flight_land:before {
      content: "\e904"; }
    .material-icons.flight_takeoff:before {
      content: "\e905"; }
    .material-icons.flip:before {
      content: "\e3e8"; }
    .material-icons.flip_camera_android:before {
      content: "\ea37"; }
    .material-icons.flip_camera_ios:before {
      content: "\ea38"; }
    .material-icons.flip_to_back:before {
      content: "\e882"; }
    .material-icons.flip_to_front:before {
      content: "\e883"; }
    .material-icons.folder:before {
      content: "\e2c7"; }
    .material-icons.folder_open:before {
      content: "\e2c8"; }
    .material-icons.folder_shared:before {
      content: "\e2c9"; }
    .material-icons.folder_special:before {
      content: "\e617"; }
    .material-icons.font_download:before {
      content: "\e167"; }
    .material-icons.format_align_center:before {
      content: "\e234"; }
    .material-icons.format_align_justify:before {
      content: "\e235"; }
    .material-icons.format_align_left:before {
      content: "\e236"; }
    .material-icons.format_align_right:before {
      content: "\e237"; }
    .material-icons.format_bold:before {
      content: "\e238"; }
    .material-icons.format_clear:before {
      content: "\e239"; }
    .material-icons.format_color_fill:before {
      content: "\e23a"; }
    .material-icons.format_color_reset:before {
      content: "\e23b"; }
    .material-icons.format_color_text:before {
      content: "\e23c"; }
    .material-icons.format_indent_decrease:before {
      content: "\e23d"; }
    .material-icons.format_indent_increase:before {
      content: "\e23e"; }
    .material-icons.format_italic:before {
      content: "\e23f"; }
    .material-icons.format_line_spacing:before {
      content: "\e240"; }
    .material-icons.format_list_bulleted:before {
      content: "\e241"; }
    .material-icons.format_list_numbered:before {
      content: "\e242"; }
    .material-icons.format_list_numbered_rtl:before {
      content: "\e267"; }
    .material-icons.format_paint:before {
      content: "\e243"; }
    .material-icons.format_quote:before {
      content: "\e244"; }
    .material-icons.format_shapes:before {
      content: "\e25e"; }
    .material-icons.format_size:before {
      content: "\e245"; }
    .material-icons.format_strikethrough:before {
      content: "\e246"; }
    .material-icons.format_textdirection_l_to_r:before {
      content: "\e247"; }
    .material-icons.format_textdirection_r_to_l:before {
      content: "\e248"; }
    .material-icons.format_underline:before {
      content: "\e249"; }
    .material-icons.format_underlined:before {
      content: "\e249"; }
    .material-icons.forum:before {
      content: "\e0bf"; }
    .material-icons.forward:before {
      content: "\e154"; }
    .material-icons.forward_10:before {
      content: "\e056"; }
    .material-icons.forward_30:before {
      content: "\e057"; }
    .material-icons.forward_5:before {
      content: "\e058"; }
    .material-icons.free_breakfast:before {
      content: "\eb44"; }
    .material-icons.fullscreen:before {
      content: "\e5d0"; }
    .material-icons.fullscreen_exit:before {
      content: "\e5d1"; }
    .material-icons.functions:before {
      content: "\e24a"; }
    .material-icons.g_translate:before {
      content: "\e927"; }
    .material-icons.gamepad:before {
      content: "\e30f"; }
    .material-icons.games:before {
      content: "\e021"; }
    .material-icons.gavel:before {
      content: "\e90e"; }
    .material-icons.gesture:before {
      content: "\e155"; }
    .material-icons.get_app:before {
      content: "\e884"; }
    .material-icons.gif:before {
      content: "\e908"; }
    .material-icons.goat:before {
      content: "\dbff"; }
    .material-icons.golf_course:before {
      content: "\eb45"; }
    .material-icons.gps_fixed:before {
      content: "\e1b3"; }
    .material-icons.gps_not_fixed:before {
      content: "\e1b4"; }
    .material-icons.gps_off:before {
      content: "\e1b5"; }
    .material-icons.grade:before {
      content: "\e885"; }
    .material-icons.gradient:before {
      content: "\e3e9"; }
    .material-icons.grain:before {
      content: "\e3ea"; }
    .material-icons.graphic_eq:before {
      content: "\e1b8"; }
    .material-icons.grid_off:before {
      content: "\e3eb"; }
    .material-icons.grid_on:before {
      content: "\e3ec"; }
    .material-icons.grid_view:before {
      content: "\e9b0"; }
    .material-icons.group:before {
      content: "\e7ef"; }
    .material-icons.group_add:before {
      content: "\e7f0"; }
    .material-icons.group_work:before {
      content: "\e886"; }
    .material-icons.hail:before {
      content: "\e9b1"; }
    .material-icons.hardware:before {
      content: "\ea59"; }
    .material-icons.hd:before {
      content: "\e052"; }
    .material-icons.hdr_off:before {
      content: "\e3ed"; }
    .material-icons.hdr_on:before {
      content: "\e3ee"; }
    .material-icons.hdr_strong:before {
      content: "\e3f1"; }
    .material-icons.hdr_weak:before {
      content: "\e3f2"; }
    .material-icons.headset:before {
      content: "\e310"; }
    .material-icons.headset_mic:before {
      content: "\e311"; }
    .material-icons.headset_off:before {
      content: "\e33a"; }
    .material-icons.healing:before {
      content: "\e3f3"; }
    .material-icons.hearing:before {
      content: "\e023"; }
    .material-icons.height:before {
      content: "\ea16"; }
    .material-icons.help:before {
      content: "\e887"; }
    .material-icons.help_outline:before {
      content: "\e8fd"; }
    .material-icons.high_quality:before {
      content: "\e024"; }
    .material-icons.highlight:before {
      content: "\e25f"; }
    .material-icons.highlight_off:before {
      content: "\e888"; }
    .material-icons.highlight_remove:before {
      content: "\e888"; }
    .material-icons.history:before {
      content: "\e889"; }
    .material-icons.home:before {
      content: "\e88a"; }
    .material-icons.home_filled:before {
      content: "\e9b2"; }
    .material-icons.home_work:before {
      content: "\ea09"; }
    .material-icons.horizontal_split:before {
      content: "\e947"; }
    .material-icons.hot_tub:before {
      content: "\eb46"; }
    .material-icons.hotel:before {
      content: "\e53a"; }
    .material-icons.hourglass_empty:before {
      content: "\e88b"; }
    .material-icons.hourglass_full:before {
      content: "\e88c"; }
    .material-icons.house:before {
      content: "\ea44"; }
    .material-icons.how_to_reg:before {
      content: "\e174"; }
    .material-icons.how_to_vote:before {
      content: "\e175"; }
    .material-icons.http:before {
      content: "\e902"; }
    .material-icons.https:before {
      content: "\e88d"; }
    .material-icons.icecream:before {
      content: "\ea69"; }
    .material-icons.image:before {
      content: "\e3f4"; }
    .material-icons.image_aspect_ratio:before {
      content: "\e3f5"; }
    .material-icons.image_search:before {
      content: "\e43f"; }
    .material-icons.imagesearch_roller:before {
      content: "\e9b4"; }
    .material-icons.import_contacts:before {
      content: "\e0e0"; }
    .material-icons.import_export:before {
      content: "\e0c3"; }
    .material-icons.important_devices:before {
      content: "\e912"; }
    .material-icons.inbox:before {
      content: "\e156"; }
    .material-icons.indeterminate_check_box:before {
      content: "\e909"; }
    .material-icons.info:before {
      content: "\e88e"; }
    .material-icons.info_outline:before {
      content: "\e88f"; }
    .material-icons.input:before {
      content: "\e890"; }
    .material-icons.insert_chart:before {
      content: "\e24b"; }
    .material-icons.insert_chart_outlined:before {
      content: "\e26a"; }
    .material-icons.insert_comment:before {
      content: "\e24c"; }
    .material-icons.insert_drive_file:before {
      content: "\e24d"; }
    .material-icons.insert_emoticon:before {
      content: "\e24e"; }
    .material-icons.insert_invitation:before {
      content: "\e24f"; }
    .material-icons.insert_link:before {
      content: "\e250"; }
    .material-icons.insert_photo:before {
      content: "\e251"; }
    .material-icons.inventory:before {
      content: "\e179"; }
    .material-icons.invert_colors:before {
      content: "\e891"; }
    .material-icons.invert_colors_off:before {
      content: "\e0c4"; }
    .material-icons.invert_colors_on:before {
      content: "\e891"; }
    .material-icons.iso:before {
      content: "\e3f6"; }
    .material-icons.keyboard:before {
      content: "\e312"; }
    .material-icons.keyboard_arrow_down:before {
      content: "\e313"; }
    .material-icons.keyboard_arrow_left:before {
      content: "\e314"; }
    .material-icons.keyboard_arrow_right:before {
      content: "\e315"; }
    .material-icons.keyboard_arrow_up:before {
      content: "\e316"; }
    .material-icons.keyboard_backspace:before {
      content: "\e317"; }
    .material-icons.keyboard_capslock:before {
      content: "\e318"; }
    .material-icons.keyboard_control:before {
      content: "\e5d3"; }
    .material-icons.keyboard_hide:before {
      content: "\e31a"; }
    .material-icons.keyboard_return:before {
      content: "\e31b"; }
    .material-icons.keyboard_tab:before {
      content: "\e31c"; }
    .material-icons.keyboard_voice:before {
      content: "\e31d"; }
    .material-icons.king_bed:before {
      content: "\ea45"; }
    .material-icons.kitchen:before {
      content: "\eb47"; }
    .material-icons.label:before {
      content: "\e892"; }
    .material-icons.label_important:before {
      content: "\e937"; }
    .material-icons.label_important_outline:before {
      content: "\e948"; }
    .material-icons.label_off:before {
      content: "\e9b6"; }
    .material-icons.label_outline:before {
      content: "\e893"; }
    .material-icons.landscape:before {
      content: "\e3f7"; }
    .material-icons.language:before {
      content: "\e894"; }
    .material-icons.laptop:before {
      content: "\e31e"; }
    .material-icons.laptop_chromebook:before {
      content: "\e31f"; }
    .material-icons.laptop_mac:before {
      content: "\e320"; }
    .material-icons.laptop_windows:before {
      content: "\e321"; }
    .material-icons.last_page:before {
      content: "\e5dd"; }
    .material-icons.launch:before {
      content: "\e895"; }
    .material-icons.layers:before {
      content: "\e53b"; }
    .material-icons.layers_clear:before {
      content: "\e53c"; }
    .material-icons.leak_add:before {
      content: "\e3f8"; }
    .material-icons.leak_remove:before {
      content: "\e3f9"; }
    .material-icons.lens:before {
      content: "\e3fa"; }
    .material-icons.library_add:before {
      content: "\e02e"; }
    .material-icons.library_add_check:before {
      content: "\e9b7"; }
    .material-icons.library_books:before {
      content: "\e02f"; }
    .material-icons.library_music:before {
      content: "\e030"; }
    .material-icons.lightbulb:before {
      content: "\e0f0"; }
    .material-icons.lightbulb_outline:before {
      content: "\e90f"; }
    .material-icons.line_style:before {
      content: "\e919"; }
    .material-icons.line_weight:before {
      content: "\e91a"; }
    .material-icons.linear_scale:before {
      content: "\e260"; }
    .material-icons.link:before {
      content: "\e157"; }
    .material-icons.link_off:before {
      content: "\e16f"; }
    .material-icons.linked_camera:before {
      content: "\e438"; }
    .material-icons.liquor:before {
      content: "\ea60"; }
    .material-icons.list:before {
      content: "\e896"; }
    .material-icons.list_alt:before {
      content: "\e0ee"; }
    .material-icons.live_help:before {
      content: "\e0c6"; }
    .material-icons.live_tv:before {
      content: "\e639"; }
    .material-icons.local_activity:before {
      content: "\e53f"; }
    .material-icons.local_airport:before {
      content: "\e53d"; }
    .material-icons.local_atm:before {
      content: "\e53e"; }
    .material-icons.local_attraction:before {
      content: "\e53f"; }
    .material-icons.local_bar:before {
      content: "\e540"; }
    .material-icons.local_cafe:before {
      content: "\e541"; }
    .material-icons.local_car_wash:before {
      content: "\e542"; }
    .material-icons.local_convenience_store:before {
      content: "\e543"; }
    .material-icons.local_dining:before {
      content: "\e556"; }
    .material-icons.local_drink:before {
      content: "\e544"; }
    .material-icons.local_florist:before {
      content: "\e545"; }
    .material-icons.local_gas_station:before {
      content: "\e546"; }
    .material-icons.local_grocery_store:before {
      content: "\e547"; }
    .material-icons.local_hospital:before {
      content: "\e548"; }
    .material-icons.local_hotel:before {
      content: "\e549"; }
    .material-icons.local_laundry_service:before {
      content: "\e54a"; }
    .material-icons.local_library:before {
      content: "\e54b"; }
    .material-icons.local_mall:before {
      content: "\e54c"; }
    .material-icons.local_movies:before {
      content: "\e54d"; }
    .material-icons.local_offer:before {
      content: "\e54e"; }
    .material-icons.local_parking:before {
      content: "\e54f"; }
    .material-icons.local_pharmacy:before {
      content: "\e550"; }
    .material-icons.local_phone:before {
      content: "\e551"; }
    .material-icons.local_pizza:before {
      content: "\e552"; }
    .material-icons.local_play:before {
      content: "\e553"; }
    .material-icons.local_post_office:before {
      content: "\e554"; }
    .material-icons.local_print_shop:before {
      content: "\e555"; }
    .material-icons.local_printshop:before {
      content: "\e555"; }
    .material-icons.local_restaurant:before {
      content: "\e556"; }
    .material-icons.local_see:before {
      content: "\e557"; }
    .material-icons.local_shipping:before {
      content: "\e558"; }
    .material-icons.local_taxi:before {
      content: "\e559"; }
    .material-icons.location_city:before {
      content: "\e7f1"; }
    .material-icons.location_disabled:before {
      content: "\e1b6"; }
    .material-icons.location_history:before {
      content: "\e55a"; }
    .material-icons.location_off:before {
      content: "\e0c7"; }
    .material-icons.location_on:before {
      content: "\e0c8"; }
    .material-icons.location_searching:before {
      content: "\e1b7"; }
    .material-icons.lock:before {
      content: "\e897"; }
    .material-icons.lock_open:before {
      content: "\e898"; }
    .material-icons.lock_outline:before {
      content: "\e899"; }
    .material-icons.logout:before {
      content: "\e9ba"; }
    .material-icons.looks:before {
      content: "\e3fc"; }
    .material-icons.looks_3:before {
      content: "\e3fb"; }
    .material-icons.looks_4:before {
      content: "\e3fd"; }
    .material-icons.looks_5:before {
      content: "\e3fe"; }
    .material-icons.looks_6:before {
      content: "\e3ff"; }
    .material-icons.looks_one:before {
      content: "\e400"; }
    .material-icons.looks_two:before {
      content: "\e401"; }
    .material-icons.loop:before {
      content: "\e028"; }
    .material-icons.loupe:before {
      content: "\e402"; }
    .material-icons.low_priority:before {
      content: "\e16d"; }
    .material-icons.loyalty:before {
      content: "\e89a"; }
    .material-icons.lunch_dining:before {
      content: "\ea61"; }
    .material-icons.mail:before {
      content: "\e158"; }
    .material-icons.mail_outline:before {
      content: "\e0e1"; }
    .material-icons.map:before {
      content: "\e55b"; }
    .material-icons.margin:before {
      content: "\e9bb"; }
    .material-icons.mark_as_unread:before {
      content: "\e9bc"; }
    .material-icons.markunread:before {
      content: "\e159"; }
    .material-icons.markunread_mailbox:before {
      content: "\e89b"; }
    .material-icons.maximize:before {
      content: "\e930"; }
    .material-icons.meeting_room:before {
      content: "\eb4f"; }
    .material-icons.memory:before {
      content: "\e322"; }
    .material-icons.menu:before {
      content: "\e5d2"; }
    .material-icons.menu_book:before {
      content: "\ea19"; }
    .material-icons.menu_open:before {
      content: "\e9bd"; }
    .material-icons.merge_type:before {
      content: "\e252"; }
    .material-icons.message:before {
      content: "\e0c9"; }
    .material-icons.messenger:before {
      content: "\e0ca"; }
    .material-icons.messenger_outline:before {
      content: "\e0cb"; }
    .material-icons.mic:before {
      content: "\e029"; }
    .material-icons.mic_none:before {
      content: "\e02a"; }
    .material-icons.mic_off:before {
      content: "\e02b"; }
    .material-icons.minimize:before {
      content: "\e931"; }
    .material-icons.missed_video_call:before {
      content: "\e073"; }
    .material-icons.mms:before {
      content: "\e618"; }
    .material-icons.mobile_friendly:before {
      content: "\e200"; }
    .material-icons.mobile_off:before {
      content: "\e201"; }
    .material-icons.mobile_screen_share:before {
      content: "\e0e7"; }
    .material-icons.mode_comment:before {
      content: "\e253"; }
    .material-icons.mode_edit:before {
      content: "\e254"; }
    .material-icons.monetization_on:before {
      content: "\e263"; }
    .material-icons.money:before {
      content: "\e57d"; }
    .material-icons.money_off:before {
      content: "\e25c"; }
    .material-icons.monochrome_photos:before {
      content: "\e403"; }
    .material-icons.mood:before {
      content: "\e7f2"; }
    .material-icons.mood_bad:before {
      content: "\e7f3"; }
    .material-icons.more:before {
      content: "\e619"; }
    .material-icons.more_horiz:before {
      content: "\e5d3"; }
    .material-icons.more_vert:before {
      content: "\e5d4"; }
    .material-icons.motorcycle:before {
      content: "\e91b"; }
    .material-icons.mouse:before {
      content: "\e323"; }
    .material-icons.move_to_inbox:before {
      content: "\e168"; }
    .material-icons.movie:before {
      content: "\e02c"; }
    .material-icons.movie_creation:before {
      content: "\e404"; }
    .material-icons.movie_filter:before {
      content: "\e43a"; }
    .material-icons.mp:before {
      content: "\e9c3"; }
    .material-icons.multiline_chart:before {
      content: "\e6df"; }
    .material-icons.multitrack_audio:before {
      content: "\e1b8"; }
    .material-icons.museum:before {
      content: "\ea36"; }
    .material-icons.music_note:before {
      content: "\e405"; }
    .material-icons.music_off:before {
      content: "\e440"; }
    .material-icons.music_video:before {
      content: "\e063"; }
    .material-icons.my_library_add:before {
      content: "\e02e"; }
    .material-icons.my_library_books:before {
      content: "\e02f"; }
    .material-icons.my_library_music:before {
      content: "\e030"; }
    .material-icons.my_location:before {
      content: "\e55c"; }
    .material-icons.nature:before {
      content: "\e406"; }
    .material-icons.nature_people:before {
      content: "\e407"; }
    .material-icons.navigate_before:before {
      content: "\e408"; }
    .material-icons.navigate_next:before {
      content: "\e409"; }
    .material-icons.navigation:before {
      content: "\e55d"; }
    .material-icons.near_me:before {
      content: "\e569"; }
    .material-icons.network_cell:before {
      content: "\e1b9"; }
    .material-icons.network_check:before {
      content: "\e640"; }
    .material-icons.network_locked:before {
      content: "\e61a"; }
    .material-icons.network_wifi:before {
      content: "\e1ba"; }
    .material-icons.new_releases:before {
      content: "\e031"; }
    .material-icons.next_week:before {
      content: "\e16a"; }
    .material-icons.nfc:before {
      content: "\e1bb"; }
    .material-icons.nightlife:before {
      content: "\ea62"; }
    .material-icons.nights_stay:before {
      content: "\ea46"; }
    .material-icons.no_encryption:before {
      content: "\e641"; }
    .material-icons.no_meeting_room:before {
      content: "\eb4e"; }
    .material-icons.no_sim:before {
      content: "\e0cc"; }
    .material-icons.not_interested:before {
      content: "\e033"; }
    .material-icons.not_listed_location:before {
      content: "\e575"; }
    .material-icons.note:before {
      content: "\e06f"; }
    .material-icons.note_add:before {
      content: "\e89c"; }
    .material-icons.notes:before {
      content: "\e26c"; }
    .material-icons.notification_important:before {
      content: "\e004"; }
    .material-icons.notifications:before {
      content: "\e7f4"; }
    .material-icons.notifications_active:before {
      content: "\e7f7"; }
    .material-icons.notifications_none:before {
      content: "\e7f5"; }
    .material-icons.notifications_off:before {
      content: "\e7f6"; }
    .material-icons.notifications_on:before {
      content: "\e7f7"; }
    .material-icons.notifications_paused:before {
      content: "\e7f8"; }
    .material-icons.now_wallpaper:before {
      content: "\e1bc"; }
    .material-icons.now_widgets:before {
      content: "\e1bd"; }
    .material-icons.offline_bolt:before {
      content: "\e932"; }
    .material-icons.offline_pin:before {
      content: "\e90a"; }
    .material-icons.offline_share:before {
      content: "\e9c5"; }
    .material-icons.ondemand_video:before {
      content: "\e63a"; }
    .material-icons.opacity:before {
      content: "\e91c"; }
    .material-icons.open_in_browser:before {
      content: "\e89d"; }
    .material-icons.open_in_new:before {
      content: "\e89e"; }
    .material-icons.open_with:before {
      content: "\e89f"; }
    .material-icons.outdoor_grill:before {
      content: "\ea47"; }
    .material-icons.outlined_flag:before {
      content: "\e16e"; }
    .material-icons.padding:before {
      content: "\e9c8"; }
    .material-icons.pages:before {
      content: "\e7f9"; }
    .material-icons.pageview:before {
      content: "\e8a0"; }
    .material-icons.palette:before {
      content: "\e40a"; }
    .material-icons.pan_tool:before {
      content: "\e925"; }
    .material-icons.panorama:before {
      content: "\e40b"; }
    .material-icons.panorama_fish_eye:before {
      content: "\e40c"; }
    .material-icons.panorama_fisheye:before {
      content: "\e40c"; }
    .material-icons.panorama_horizontal:before {
      content: "\e40d"; }
    .material-icons.panorama_photosphere:before {
      content: "\e9c9"; }
    .material-icons.panorama_photosphere_select:before {
      content: "\e9ca"; }
    .material-icons.panorama_vertical:before {
      content: "\e40e"; }
    .material-icons.panorama_wide_angle:before {
      content: "\e40f"; }
    .material-icons.park:before {
      content: "\ea63"; }
    .material-icons.party_mode:before {
      content: "\e7fa"; }
    .material-icons.pause:before {
      content: "\e034"; }
    .material-icons.pause_circle_filled:before {
      content: "\e035"; }
    .material-icons.pause_circle_outline:before {
      content: "\e036"; }
    .material-icons.pause_presentation:before {
      content: "\e0ea"; }
    .material-icons.payment:before {
      content: "\e8a1"; }
    .material-icons.people:before {
      content: "\e7fb"; }
    .material-icons.people_alt:before {
      content: "\ea21"; }
    .material-icons.people_outline:before {
      content: "\e7fc"; }
    .material-icons.perm_camera_mic:before {
      content: "\e8a2"; }
    .material-icons.perm_contact_cal:before {
      content: "\e8a3"; }
    .material-icons.perm_contact_calendar:before {
      content: "\e8a3"; }
    .material-icons.perm_data_setting:before {
      content: "\e8a4"; }
    .material-icons.perm_device_info:before {
      content: "\e8a5"; }
    .material-icons.perm_device_information:before {
      content: "\e8a5"; }
    .material-icons.perm_identity:before {
      content: "\e8a6"; }
    .material-icons.perm_media:before {
      content: "\e8a7"; }
    .material-icons.perm_phone_msg:before {
      content: "\e8a8"; }
    .material-icons.perm_scan_wifi:before {
      content: "\e8a9"; }
    .material-icons.person:before {
      content: "\e7fd"; }
    .material-icons.person_add:before {
      content: "\e7fe"; }
    .material-icons.person_add_disabled:before {
      content: "\e9cb"; }
    .material-icons.person_outline:before {
      content: "\e7ff"; }
    .material-icons.person_pin:before {
      content: "\e55a"; }
    .material-icons.person_pin_circle:before {
      content: "\e56a"; }
    .material-icons.personal_video:before {
      content: "\e63b"; }
    .material-icons.pets:before {
      content: "\e91d"; }
    .material-icons.phone:before {
      content: "\e0cd"; }
    .material-icons.phone_android:before {
      content: "\e324"; }
    .material-icons.phone_bluetooth_speaker:before {
      content: "\e61b"; }
    .material-icons.phone_callback:before {
      content: "\e649"; }
    .material-icons.phone_disabled:before {
      content: "\e9cc"; }
    .material-icons.phone_enabled:before {
      content: "\e9cd"; }
    .material-icons.phone_forwarded:before {
      content: "\e61c"; }
    .material-icons.phone_in_talk:before {
      content: "\e61d"; }
    .material-icons.phone_iphone:before {
      content: "\e325"; }
    .material-icons.phone_locked:before {
      content: "\e61e"; }
    .material-icons.phone_missed:before {
      content: "\e61f"; }
    .material-icons.phone_paused:before {
      content: "\e620"; }
    .material-icons.phonelink:before {
      content: "\e326"; }
    .material-icons.phonelink_erase:before {
      content: "\e0db"; }
    .material-icons.phonelink_lock:before {
      content: "\e0dc"; }
    .material-icons.phonelink_off:before {
      content: "\e327"; }
    .material-icons.phonelink_ring:before {
      content: "\e0dd"; }
    .material-icons.phonelink_setup:before {
      content: "\e0de"; }
    .material-icons.photo:before {
      content: "\e410"; }
    .material-icons.photo_album:before {
      content: "\e411"; }
    .material-icons.photo_camera:before {
      content: "\e412"; }
    .material-icons.photo_filter:before {
      content: "\e43b"; }
    .material-icons.photo_library:before {
      content: "\e413"; }
    .material-icons.photo_size_select_actual:before {
      content: "\e432"; }
    .material-icons.photo_size_select_large:before {
      content: "\e433"; }
    .material-icons.photo_size_select_small:before {
      content: "\e434"; }
    .material-icons.picture_as_pdf:before {
      content: "\e415"; }
    .material-icons.picture_in_picture:before {
      content: "\e8aa"; }
    .material-icons.picture_in_picture_alt:before {
      content: "\e911"; }
    .material-icons.pie_chart:before {
      content: "\e6c4"; }
    .material-icons.pie_chart_outlined:before {
      content: "\e6c5"; }
    .material-icons.pin_drop:before {
      content: "\e55e"; }
    .material-icons.pivot_table_chart:before {
      content: "\e9ce"; }
    .material-icons.place:before {
      content: "\e55f"; }
    .material-icons.play_arrow:before {
      content: "\e037"; }
    .material-icons.play_circle_fill:before {
      content: "\e038"; }
    .material-icons.play_circle_filled:before {
      content: "\e038"; }
    .material-icons.play_circle_outline:before {
      content: "\e039"; }
    .material-icons.play_for_work:before {
      content: "\e906"; }
    .material-icons.playlist_add:before {
      content: "\e03b"; }
    .material-icons.playlist_add_check:before {
      content: "\e065"; }
    .material-icons.playlist_play:before {
      content: "\e05f"; }
    .material-icons.plus_one:before {
      content: "\e800"; }
    .material-icons.policy:before {
      content: "\ea17"; }
    .material-icons.poll:before {
      content: "\e801"; }
    .material-icons.polymer:before {
      content: "\e8ab"; }
    .material-icons.pool:before {
      content: "\eb48"; }
    .material-icons.portable_wifi_off:before {
      content: "\e0ce"; }
    .material-icons.portrait:before {
      content: "\e416"; }
    .material-icons.post_add:before {
      content: "\ea20"; }
    .material-icons.power:before {
      content: "\e63c"; }
    .material-icons.power_input:before {
      content: "\e336"; }
    .material-icons.power_off:before {
      content: "\e646"; }
    .material-icons.power_settings_new:before {
      content: "\e8ac"; }
    .material-icons.pregnant_woman:before {
      content: "\e91e"; }
    .material-icons.present_to_all:before {
      content: "\e0df"; }
    .material-icons.print:before {
      content: "\e8ad"; }
    .material-icons.print_disabled:before {
      content: "\e9cf"; }
    .material-icons.priority_high:before {
      content: "\e645"; }
    .material-icons.public:before {
      content: "\e80b"; }
    .material-icons.publish:before {
      content: "\e255"; }
    .material-icons.query_builder:before {
      content: "\e8ae"; }
    .material-icons.question_answer:before {
      content: "\e8af"; }
    .material-icons.queue:before {
      content: "\e03c"; }
    .material-icons.queue_music:before {
      content: "\e03d"; }
    .material-icons.queue_play_next:before {
      content: "\e066"; }
    .material-icons.quick_contacts_dialer:before {
      content: "\e0cf"; }
    .material-icons.quick_contacts_mail:before {
      content: "\e0d0"; }
    .material-icons.radio:before {
      content: "\e03e"; }
    .material-icons.radio_button_checked:before {
      content: "\e837"; }
    .material-icons.radio_button_off:before {
      content: "\e836"; }
    .material-icons.radio_button_on:before {
      content: "\e837"; }
    .material-icons.radio_button_unchecked:before {
      content: "\e836"; }
    .material-icons.railway_alert:before {
      content: "\e9d1"; }
    .material-icons.ramen_dining:before {
      content: "\ea64"; }
    .material-icons.rate_review:before {
      content: "\e560"; }
    .material-icons.receipt:before {
      content: "\e8b0"; }
    .material-icons.recent_actors:before {
      content: "\e03f"; }
    .material-icons.recommend:before {
      content: "\e9d2"; }
    .material-icons.record_voice_over:before {
      content: "\e91f"; }
    .material-icons.redeem:before {
      content: "\e8b1"; }
    .material-icons.redo:before {
      content: "\e15a"; }
    .material-icons.refresh:before {
      content: "\e5d5"; }
    .material-icons.remove:before {
      content: "\e15b"; }
    .material-icons.remove_circle:before {
      content: "\e15c"; }
    .material-icons.remove_circle_outline:before {
      content: "\e15d"; }
    .material-icons.remove_done:before {
      content: "\e9d3"; }
    .material-icons.remove_from_queue:before {
      content: "\e067"; }
    .material-icons.remove_moderator:before {
      content: "\e9d4"; }
    .material-icons.remove_red_eye:before {
      content: "\e417"; }
    .material-icons.remove_shopping_cart:before {
      content: "\e928"; }
    .material-icons.reorder:before {
      content: "\e8fe"; }
    .material-icons.repeat:before {
      content: "\e040"; }
    .material-icons.repeat_on:before {
      content: "\e9d6"; }
    .material-icons.repeat_one:before {
      content: "\e041"; }
    .material-icons.repeat_one_on:before {
      content: "\e9d7"; }
    .material-icons.replay:before {
      content: "\e042"; }
    .material-icons.replay_10:before {
      content: "\e059"; }
    .material-icons.replay_30:before {
      content: "\e05a"; }
    .material-icons.replay_5:before {
      content: "\e05b"; }
    .material-icons.replay_circle_filled:before {
      content: "\e9d8"; }
    .material-icons.reply:before {
      content: "\e15e"; }
    .material-icons.reply_all:before {
      content: "\e15f"; }
    .material-icons.report:before {
      content: "\e160"; }
    .material-icons.report_off:before {
      content: "\e170"; }
    .material-icons.report_problem:before {
      content: "\e8b2"; }
    .material-icons.reset_tv:before {
      content: "\e9d9"; }
    .material-icons.restaurant:before {
      content: "\e56c"; }
    .material-icons.restaurant_menu:before {
      content: "\e561"; }
    .material-icons.restore:before {
      content: "\e8b3"; }
    .material-icons.restore_from_trash:before {
      content: "\e938"; }
    .material-icons.restore_page:before {
      content: "\e929"; }
    .material-icons.ring_volume:before {
      content: "\e0d1"; }
    .material-icons.room:before {
      content: "\e8b4"; }
    .material-icons.room_service:before {
      content: "\eb49"; }
    .material-icons.rotate_90_degrees_ccw:before {
      content: "\e418"; }
    .material-icons.rotate_left:before {
      content: "\e419"; }
    .material-icons.rotate_right:before {
      content: "\e41a"; }
    .material-icons.rounded_corner:before {
      content: "\e920"; }
    .material-icons.router:before {
      content: "\e328"; }
    .material-icons.rowing:before {
      content: "\e921"; }
    .material-icons.rss_feed:before {
      content: "\e0e5"; }
    .material-icons.rtt:before {
      content: "\e9ad"; }
    .material-icons.rv_hookup:before {
      content: "\e642"; }
    .material-icons.satellite:before {
      content: "\e562"; }
    .material-icons.save:before {
      content: "\e161"; }
    .material-icons.save_alt:before {
      content: "\e171"; }
    .material-icons.saved_search:before {
      content: "\ea11"; }
    .material-icons.scanner:before {
      content: "\e329"; }
    .material-icons.scatter_plot:before {
      content: "\e268"; }
    .material-icons.schedule:before {
      content: "\e8b5"; }
    .material-icons.schedule_send:before {
      content: "\ea0a"; }
    .material-icons.school:before {
      content: "\e80c"; }
    .material-icons.score:before {
      content: "\e269"; }
    .material-icons.screen_lock_landscape:before {
      content: "\e1be"; }
    .material-icons.screen_lock_portrait:before {
      content: "\e1bf"; }
    .material-icons.screen_lock_rotation:before {
      content: "\e1c0"; }
    .material-icons.screen_rotation:before {
      content: "\e1c1"; }
    .material-icons.screen_share:before {
      content: "\e0e2"; }
    .material-icons.sd:before {
      content: "\e9dd"; }
    .material-icons.sd_card:before {
      content: "\e623"; }
    .material-icons.sd_storage:before {
      content: "\e1c2"; }
    .material-icons.search:before {
      content: "\e8b6"; }
    .material-icons.security:before {
      content: "\e32a"; }
    .material-icons.segment:before {
      content: "\e94b"; }
    .material-icons.select_all:before {
      content: "\e162"; }
    .material-icons.send:before {
      content: "\e163"; }
    .material-icons.send_and_archive:before {
      content: "\ea0c"; }
    .material-icons.sentiment_dissatisfied:before {
      content: "\e811"; }
    .material-icons.sentiment_neutral:before {
      content: "\e812"; }
    .material-icons.sentiment_satisfied:before {
      content: "\e813"; }
    .material-icons.sentiment_satisfied_alt:before {
      content: "\e0ed"; }
    .material-icons.sentiment_very_dissatisfied:before {
      content: "\e814"; }
    .material-icons.sentiment_very_satisfied:before {
      content: "\e815"; }
    .material-icons.settings:before {
      content: "\e8b8"; }
    .material-icons.settings_applications:before {
      content: "\e8b9"; }
    .material-icons.settings_backup_restore:before {
      content: "\e8ba"; }
    .material-icons.settings_bluetooth:before {
      content: "\e8bb"; }
    .material-icons.settings_brightness:before {
      content: "\e8bd"; }
    .material-icons.settings_cell:before {
      content: "\e8bc"; }
    .material-icons.settings_display:before {
      content: "\e8bd"; }
    .material-icons.settings_ethernet:before {
      content: "\e8be"; }
    .material-icons.settings_input_antenna:before {
      content: "\e8bf"; }
    .material-icons.settings_input_component:before {
      content: "\e8c0"; }
    .material-icons.settings_input_composite:before {
      content: "\e8c1"; }
    .material-icons.settings_input_hdmi:before {
      content: "\e8c2"; }
    .material-icons.settings_input_svideo:before {
      content: "\e8c3"; }
    .material-icons.settings_overscan:before {
      content: "\e8c4"; }
    .material-icons.settings_phone:before {
      content: "\e8c5"; }
    .material-icons.settings_power:before {
      content: "\e8c6"; }
    .material-icons.settings_remote:before {
      content: "\e8c7"; }
    .material-icons.settings_system_daydream:before {
      content: "\e1c3"; }
    .material-icons.settings_voice:before {
      content: "\e8c8"; }
    .material-icons.share:before {
      content: "\e80d"; }
    .material-icons.shield:before {
      content: "\e9e0"; }
    .material-icons.shop:before {
      content: "\e8c9"; }
    .material-icons.shop_two:before {
      content: "\e8ca"; }
    .material-icons.shopping_basket:before {
      content: "\e8cb"; }
    .material-icons.shopping_cart:before {
      content: "\e8cc"; }
    .material-icons.short_text:before {
      content: "\e261"; }
    .material-icons.show_chart:before {
      content: "\e6e1"; }
    .material-icons.shuffle:before {
      content: "\e043"; }
    .material-icons.shuffle_on:before {
      content: "\e9e1"; }
    .material-icons.shutter_speed:before {
      content: "\e43d"; }
    .material-icons.signal_cellular_4_bar:before {
      content: "\e1c8"; }
    .material-icons.signal_cellular_alt:before {
      content: "\e202"; }
    .material-icons.signal_cellular_connected_no_internet_4_bar:before {
      content: "\e1cd"; }
    .material-icons.signal_cellular_no_sim:before {
      content: "\e1ce"; }
    .material-icons.signal_cellular_null:before {
      content: "\e1cf"; }
    .material-icons.signal_cellular_off:before {
      content: "\e1d0"; }
    .material-icons.signal_wifi_4_bar:before {
      content: "\e1d8"; }
    .material-icons.signal_wifi_4_bar_lock:before {
      content: "\e1d9"; }
    .material-icons.signal_wifi_off:before {
      content: "\e1da"; }
    .material-icons.sim_card:before {
      content: "\e32b"; }
    .material-icons.sim_card_alert:before {
      content: "\e624"; }
    .material-icons.single_bed:before {
      content: "\ea48"; }
    .material-icons.skip_next:before {
      content: "\e044"; }
    .material-icons.skip_previous:before {
      content: "\e045"; }
    .material-icons.slideshow:before {
      content: "\e41b"; }
    .material-icons.slow_motion_video:before {
      content: "\e068"; }
    .material-icons.smartphone:before {
      content: "\e32c"; }
    .material-icons.smoke_free:before {
      content: "\eb4a"; }
    .material-icons.smoking_rooms:before {
      content: "\eb4b"; }
    .material-icons.sms:before {
      content: "\e625"; }
    .material-icons.sms_failed:before {
      content: "\e626"; }
    .material-icons.snooze:before {
      content: "\e046"; }
    .material-icons.sort:before {
      content: "\e164"; }
    .material-icons.sort_by_alpha:before {
      content: "\e053"; }
    .material-icons.spa:before {
      content: "\eb4c"; }
    .material-icons.space_bar:before {
      content: "\e256"; }
    .material-icons.speaker:before {
      content: "\e32d"; }
    .material-icons.speaker_group:before {
      content: "\e32e"; }
    .material-icons.speaker_notes:before {
      content: "\e8cd"; }
    .material-icons.speaker_notes_off:before {
      content: "\e92a"; }
    .material-icons.speaker_phone:before {
      content: "\e0d2"; }
    .material-icons.speed:before {
      content: "\e9e4"; }
    .material-icons.spellcheck:before {
      content: "\e8ce"; }
    .material-icons.sports:before {
      content: "\ea30"; }
    .material-icons.sports_baseball:before {
      content: "\ea51"; }
    .material-icons.sports_basketball:before {
      content: "\ea26"; }
    .material-icons.sports_cricket:before {
      content: "\ea27"; }
    .material-icons.sports_esports:before {
      content: "\ea28"; }
    .material-icons.sports_football:before {
      content: "\ea29"; }
    .material-icons.sports_golf:before {
      content: "\ea2a"; }
    .material-icons.sports_handball:before {
      content: "\ea33"; }
    .material-icons.sports_hockey:before {
      content: "\ea2b"; }
    .material-icons.sports_kabaddi:before {
      content: "\ea34"; }
    .material-icons.sports_mma:before {
      content: "\ea2c"; }
    .material-icons.sports_motorsports:before {
      content: "\ea2d"; }
    .material-icons.sports_rugby:before {
      content: "\ea2e"; }
    .material-icons.sports_soccer:before {
      content: "\ea2f"; }
    .material-icons.sports_tennis:before {
      content: "\ea32"; }
    .material-icons.sports_volleyball:before {
      content: "\ea31"; }
    .material-icons.square_foot:before {
      content: "\ea49"; }
    .material-icons.stacked_bar_chart:before {
      content: "\e9e6"; }
    .material-icons.star:before {
      content: "\e838"; }
    .material-icons.star_border:before {
      content: "\e83a"; }
    .material-icons.star_half:before {
      content: "\e839"; }
    .material-icons.star_outline:before {
      content: "\e83a"; }
    .material-icons.stars:before {
      content: "\e8d0"; }
    .material-icons.stay_current_landscape:before {
      content: "\e0d3"; }
    .material-icons.stay_current_portrait:before {
      content: "\e0d4"; }
    .material-icons.stay_primary_landscape:before {
      content: "\e0d5"; }
    .material-icons.stay_primary_portrait:before {
      content: "\e0d6"; }
    .material-icons.stop:before {
      content: "\e047"; }
    .material-icons.stop_screen_share:before {
      content: "\e0e3"; }
    .material-icons.storage:before {
      content: "\e1db"; }
    .material-icons.store:before {
      content: "\e8d1"; }
    .material-icons.store_mall_directory:before {
      content: "\e563"; }
    .material-icons.storefront:before {
      content: "\ea12"; }
    .material-icons.straighten:before {
      content: "\e41c"; }
    .material-icons.stream:before {
      content: "\e9e9"; }
    .material-icons.streetview:before {
      content: "\e56e"; }
    .material-icons.strikethrough_s:before {
      content: "\e257"; }
    .material-icons.style:before {
      content: "\e41d"; }
    .material-icons.subdirectory_arrow_left:before {
      content: "\e5d9"; }
    .material-icons.subdirectory_arrow_right:before {
      content: "\e5da"; }
    .material-icons.subject:before {
      content: "\e8d2"; }
    .material-icons.subscriptions:before {
      content: "\e064"; }
    .material-icons.subtitles:before {
      content: "\e048"; }
    .material-icons.subway:before {
      content: "\e56f"; }
    .material-icons.supervised_user_circle:before {
      content: "\e939"; }
    .material-icons.supervisor_account:before {
      content: "\e8d3"; }
    .material-icons.surround_sound:before {
      content: "\e049"; }
    .material-icons.swap_calls:before {
      content: "\e0d7"; }
    .material-icons.swap_horiz:before {
      content: "\e8d4"; }
    .material-icons.swap_horizontal_circle:before {
      content: "\e933"; }
    .material-icons.swap_vert:before {
      content: "\e8d5"; }
    .material-icons.swap_vert_circle:before {
      content: "\e8d6"; }
    .material-icons.swap_vertical_circle:before {
      content: "\e8d6"; }
    .material-icons.swipe:before {
      content: "\e9ec"; }
    .material-icons.switch_account:before {
      content: "\e9ed"; }
    .material-icons.switch_camera:before {
      content: "\e41e"; }
    .material-icons.switch_video:before {
      content: "\e41f"; }
    .material-icons.sync:before {
      content: "\e627"; }
    .material-icons.sync_alt:before {
      content: "\ea18"; }
    .material-icons.sync_disabled:before {
      content: "\e628"; }
    .material-icons.sync_problem:before {
      content: "\e629"; }
    .material-icons.system_update:before {
      content: "\e62a"; }
    .material-icons.system_update_alt:before {
      content: "\e8d7"; }
    .material-icons.system_update_tv:before {
      content: "\e8d7"; }
    .material-icons.tab:before {
      content: "\e8d8"; }
    .material-icons.tab_unselected:before {
      content: "\e8d9"; }
    .material-icons.table_chart:before {
      content: "\e265"; }
    .material-icons.tablet:before {
      content: "\e32f"; }
    .material-icons.tablet_android:before {
      content: "\e330"; }
    .material-icons.tablet_mac:before {
      content: "\e331"; }
    .material-icons.tag:before {
      content: "\e9ef"; }
    .material-icons.tag_faces:before {
      content: "\e420"; }
    .material-icons.takeout_dining:before {
      content: "\ea74"; }
    .material-icons.tap_and_play:before {
      content: "\e62b"; }
    .material-icons.terrain:before {
      content: "\e564"; }
    .material-icons.text_fields:before {
      content: "\e262"; }
    .material-icons.text_format:before {
      content: "\e165"; }
    .material-icons.text_rotate_up:before {
      content: "\e93a"; }
    .material-icons.text_rotate_vertical:before {
      content: "\e93b"; }
    .material-icons.text_rotation_angledown:before {
      content: "\e93c"; }
    .material-icons.text_rotation_angleup:before {
      content: "\e93d"; }
    .material-icons.text_rotation_down:before {
      content: "\e93e"; }
    .material-icons.text_rotation_none:before {
      content: "\e93f"; }
    .material-icons.textsms:before {
      content: "\e0d8"; }
    .material-icons.texture:before {
      content: "\e421"; }
    .material-icons.theater_comedy:before {
      content: "\ea66"; }
    .material-icons.theaters:before {
      content: "\e8da"; }
    .material-icons.thumb_down:before {
      content: "\e8db"; }
    .material-icons.thumb_down_alt:before {
      content: "\e816"; }
    .material-icons.thumb_down_off_alt:before {
      content: "\e9f2"; }
    .material-icons.thumb_up:before {
      content: "\e8dc"; }
    .material-icons.thumb_up_alt:before {
      content: "\e817"; }
    .material-icons.thumb_up_off_alt:before {
      content: "\e9f3"; }
    .material-icons.thumbs_up_down:before {
      content: "\e8dd"; }
    .material-icons.time_to_leave:before {
      content: "\e62c"; }
    .material-icons.timelapse:before {
      content: "\e422"; }
    .material-icons.timeline:before {
      content: "\e922"; }
    .material-icons.timer:before {
      content: "\e425"; }
    .material-icons.timer_10:before {
      content: "\e423"; }
    .material-icons.timer_3:before {
      content: "\e424"; }
    .material-icons.timer_off:before {
      content: "\e426"; }
    .material-icons.title:before {
      content: "\e264"; }
    .material-icons.toc:before {
      content: "\e8de"; }
    .material-icons.today:before {
      content: "\e8df"; }
    .material-icons.toggle_off:before {
      content: "\e9f5"; }
    .material-icons.toggle_on:before {
      content: "\e9f6"; }
    .material-icons.toll:before {
      content: "\e8e0"; }
    .material-icons.tonality:before {
      content: "\e427"; }
    .material-icons.touch_app:before {
      content: "\e913"; }
    .material-icons.toys:before {
      content: "\e332"; }
    .material-icons.track_changes:before {
      content: "\e8e1"; }
    .material-icons.traffic:before {
      content: "\e565"; }
    .material-icons.train:before {
      content: "\e570"; }
    .material-icons.tram:before {
      content: "\e571"; }
    .material-icons.transfer_within_a_station:before {
      content: "\e572"; }
    .material-icons.transform:before {
      content: "\e428"; }
    .material-icons.transit_enterexit:before {
      content: "\e579"; }
    .material-icons.translate:before {
      content: "\e8e2"; }
    .material-icons.trending_down:before {
      content: "\e8e3"; }
    .material-icons.trending_flat:before {
      content: "\e8e4"; }
    .material-icons.trending_neutral:before {
      content: "\e8e4"; }
    .material-icons.trending_up:before {
      content: "\e8e5"; }
    .material-icons.trip_origin:before {
      content: "\e57b"; }
    .material-icons.tune:before {
      content: "\e429"; }
    .material-icons.turned_in:before {
      content: "\e8e6"; }
    .material-icons.turned_in_not:before {
      content: "\e8e7"; }
    .material-icons.tv:before {
      content: "\e333"; }
    .material-icons.tv_off:before {
      content: "\e647"; }
    .material-icons.two_wheeler:before {
      content: "\e9f9"; }
    .material-icons.unarchive:before {
      content: "\e169"; }
    .material-icons.undo:before {
      content: "\e166"; }
    .material-icons.unfold_less:before {
      content: "\e5d6"; }
    .material-icons.unfold_more:before {
      content: "\e5d7"; }
    .material-icons.unsubscribe:before {
      content: "\e0eb"; }
    .material-icons.update:before {
      content: "\e923"; }
    .material-icons.upload_file:before {
      content: "\e9fc"; }
    .material-icons.usb:before {
      content: "\e1e0"; }
    .material-icons.verified_user:before {
      content: "\e8e8"; }
    .material-icons.vertical_align_bottom:before {
      content: "\e258"; }
    .material-icons.vertical_align_center:before {
      content: "\e259"; }
    .material-icons.vertical_align_top:before {
      content: "\e25a"; }
    .material-icons.vertical_split:before {
      content: "\e949"; }
    .material-icons.vibration:before {
      content: "\e62d"; }
    .material-icons.video_call:before {
      content: "\e070"; }
    .material-icons.video_collection:before {
      content: "\e04a"; }
    .material-icons.video_label:before {
      content: "\e071"; }
    .material-icons.video_library:before {
      content: "\e04a"; }
    .material-icons.videocam:before {
      content: "\e04b"; }
    .material-icons.videocam_off:before {
      content: "\e04c"; }
    .material-icons.videogame_asset:before {
      content: "\e338"; }
    .material-icons.view_agenda:before {
      content: "\e8e9"; }
    .material-icons.view_array:before {
      content: "\e8ea"; }
    .material-icons.view_carousel:before {
      content: "\e8eb"; }
    .material-icons.view_column:before {
      content: "\e8ec"; }
    .material-icons.view_comfortable:before {
      content: "\e42a"; }
    .material-icons.view_comfy:before {
      content: "\e42a"; }
    .material-icons.view_compact:before {
      content: "\e42b"; }
    .material-icons.view_day:before {
      content: "\e8ed"; }
    .material-icons.view_headline:before {
      content: "\e8ee"; }
    .material-icons.view_in_ar:before {
      content: "\e9fe"; }
    .material-icons.view_list:before {
      content: "\e8ef"; }
    .material-icons.view_module:before {
      content: "\e8f0"; }
    .material-icons.view_quilt:before {
      content: "\e8f1"; }
    .material-icons.view_stream:before {
      content: "\e8f2"; }
    .material-icons.view_week:before {
      content: "\e8f3"; }
    .material-icons.vignette:before {
      content: "\e435"; }
    .material-icons.visibility:before {
      content: "\e8f4"; }
    .material-icons.visibility_off:before {
      content: "\e8f5"; }
    .material-icons.voice_chat:before {
      content: "\e62e"; }
    .material-icons.voice_over_off:before {
      content: "\e94a"; }
    .material-icons.voicemail:before {
      content: "\e0d9"; }
    .material-icons.volume_down:before {
      content: "\e04d"; }
    .material-icons.volume_mute:before {
      content: "\e04e"; }
    .material-icons.volume_off:before {
      content: "\e04f"; }
    .material-icons.volume_up:before {
      content: "\e050"; }
    .material-icons.volunteer_activism:before {
      content: "\ea70"; }
    .material-icons.vpn_key:before {
      content: "\e0da"; }
    .material-icons.vpn_lock:before {
      content: "\e62f"; }
    .material-icons.wallet_giftcard:before {
      content: "\e8f6"; }
    .material-icons.wallet_membership:before {
      content: "\e8f7"; }
    .material-icons.wallet_travel:before {
      content: "\e8f8"; }
    .material-icons.wallpaper:before {
      content: "\e1bc"; }
    .material-icons.warning:before {
      content: "\e002"; }
    .material-icons.watch:before {
      content: "\e334"; }
    .material-icons.watch_later:before {
      content: "\e924"; }
    .material-icons.waterfall_chart:before {
      content: "\ea00"; }
    .material-icons.waves:before {
      content: "\e176"; }
    .material-icons.wb_auto:before {
      content: "\e42c"; }
    .material-icons.wb_cloudy:before {
      content: "\e42d"; }
    .material-icons.wb_incandescent:before {
      content: "\e42e"; }
    .material-icons.wb_iridescent:before {
      content: "\e436"; }
    .material-icons.wb_shade:before {
      content: "\ea01"; }
    .material-icons.wb_sunny:before {
      content: "\e430"; }
    .material-icons.wb_twighlight:before {
      content: "\ea02"; }
    .material-icons.wc:before {
      content: "\e63d"; }
    .material-icons.web:before {
      content: "\e051"; }
    .material-icons.web_asset:before {
      content: "\e069"; }
    .material-icons.weekend:before {
      content: "\e16b"; }
    .material-icons.whatshot:before {
      content: "\e80e"; }
    .material-icons.where_to_vote:before {
      content: "\e177"; }
    .material-icons.widgets:before {
      content: "\e1bd"; }
    .material-icons.wifi:before {
      content: "\e63e"; }
    .material-icons.wifi_lock:before {
      content: "\e1e1"; }
    .material-icons.wifi_off:before {
      content: "\e648"; }
    .material-icons.wifi_tethering:before {
      content: "\e1e2"; }
    .material-icons.work:before {
      content: "\e8f9"; }
    .material-icons.work_off:before {
      content: "\e942"; }
    .material-icons.work_outline:before {
      content: "\e943"; }
    .material-icons.workspaces_filled:before {
      content: "\ea0d"; }
    .material-icons.workspaces_outline:before {
      content: "\ea0f"; }
    .material-icons.wrap_text:before {
      content: "\e25b"; }
    .material-icons.youtube_searched_for:before {
      content: "\e8fa"; }
    .material-icons.zoom_in:before {
      content: "\e8ff"; }
    .material-icons.zoom_out:before {
      content: "\e900"; }
    .material-icons.zoom_out_map:before {
      content: "\e56b"; }
`
export default css;