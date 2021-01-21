# Visual Studio Code 中的 CRA 專案 ESLint 與 Prettier 設定方式

- 註: 以下 Create-React-App 簡稱為 CRA
- 註: 以下 Visual Studio Code 簡稱為 VS Code
- 註: [yarn](https://yarnpkg.com/) 需要額外安裝，Yarn 是 Facebook 提供的替代 npm 的工具，可以加速 node 模組的下載，推薦使用。

<!-- TOC -->

- [Visual Studio Code 中的 CRA 專案 ESLint 與 Prettier 設定方式](#visual-studio-code-中的-cra-專案-eslint-與-prettier-設定方式)
  - [CRA 專案部份](#cra-專案部份)
    - [第 1 步: 建立新的專案](#第-1-步-建立新的專案)
    - [第 2 步: 安裝 ESLint 與 Prettier 模組](#第-2-步-安裝-eslint-與-prettier-模組)
    - [第 3 步: 加入 eslint 與 prettier 設定檔案](#第-3-步-加入-eslint-與-prettier-設定檔案)
  - [VS Code 開發工具部份](#vs-code-開發工具部份)
    - [第 1 步: 安裝 VS Code 中的 ESLint 與 Prettier 擴充](#第-1-步-安裝-vs-code-中的-eslint-與-prettier-擴充)
    - [第 2 步: 更新 VS Code 設定](#第-2-步-更新-vs-code-設定)

<!-- /TOC -->

## CRA 專案部份

### 第 1 步: 建立新的專案

```sh
create-react-app myapp
```

或

```sh
npx create-react-app my-app
```

### 第 2 步: 安裝 ESLint 與 Prettier 模組

在終端機裡，對應專案的根目錄，輸入以下的指令:

yarn 使用:

```sh
yarn add eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

npm 使用:

```sh
npm install --save-dev eslint-plugin-prettier prettier eslint-config-react-app eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

### 第 3 步: 加入 eslint 與 prettier 設定檔案

下載 `.eslintrc` 與 `.prettierrc` 與 `.eslintignore` 的設定檔，拷貝到專案的根目錄。

---

## VS Code 開發工具部份

### 第 1 步: 安裝 VS Code 中的 ESLint 與 Prettier 擴充

安裝以下兩個 VS Code 擴充 (使用擴充套件搜尋名稱即可，安裝下載量最多的。):

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### 第 2 步: 更新 VS Code 設定

請將以下的設定加到你的 VSCode 使用者設定之中(選單->喜好設定)：

```json
    "editor.formatOnSave": true,
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "prettier.disableLanguages": [
        "js"
    ],
    "eslint.alwaysShowStatus": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
```
