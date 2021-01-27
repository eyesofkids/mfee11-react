# React Bootstrap使用說明

> https://react-bootstrap.github.io/

本範例中使用了數個套件模組，這些套件彼此可獨立運作。它們分別的功用如下所示:

- React Bootstrap: 應用程式的排版，跳出視窗、表單、按鈕等操作介面
- react-icons: 免費授權的圖示icon

註：本章中將以Bootstrap 4的樣式為主，更多相關資訊可到以下網站觀看 - [Bootstrap4官方網站](https://getbootstrap.com/docs/4.1/getting-started/introduction/)

註：有另一個專案名稱為[reactstrap](https://reactstrap.github.io/)的專案，也是以Bootstrap4的React元件庫，用法很類似，但本範例中並不是使用這個。

## React Bootstrap部份

### 安裝 react-bootstrap 模組

在終端機裡，對應專案的根目錄，輸入以下的指令(選擇其中一種即可，如果已經有安裝 yarn 建議使用上面這個):

```
yarn add react-bootstrap
```

或

```
npm install react-bootstrap
```

### 修改 index.html

> 如果沒有使用bootstrap模組與scss的話，才需要此步驟

因為 React Bootstrap 雖然並沒有依賴任一個 Bootstrap 的版本中的css，但有些樣式仍然是需要使用 Bootstrap 中的css檔案，所以你還是得要加入到你的 index.html檔案之中。

打開專案中的 public 資料夾中的 index.html 檔案，將以下的程式碼加入到<title>標記的前一行即可：

```
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
```

註：上面這行樣式的程式碼，可到 [Bootstrap4官方網站](https://getbootstrap.com/docs/4.1/getting-started/introduction/) 找到。如果不想使用cdn的方式來引用，可以到官方網站下載已編譯過的css樣式檔案。

### 撰寫測試用程式碼

```js
import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

const BootstrapTest = props => (
  <>
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>React Bootstrap</h1>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
        </Col>
      </Row>
    </Container>
  </>
)

export default BootstrapTest
```

### 注意 

React Bootstrap可相容於任何以Bootstrap所製作的樣版佈景樣式，但因為並沒有使用Bootstrap的JavaScript功能部份，所以並不能支援樣版佈景中有使用原本Bootsrap的一些動態特效的樣式。

React Bootstrap目前支援的是Bootstrap4的版本，相關文件：

- https://react-bootstrap.netlify.com/

舊版的React Bootstrap支援的是Bootstrap3版本，相關文件：

- https://react-bootstrap.github.io/

## react-icons部份

由於 React Bootstrap 目前已不再內建圖示功能，圖示需要另外安裝[react-icons](https://github.com/react-icons/react-icons)模組。

### 安裝模組

在終端機裡，對應專案的根目錄，輸入以下的指令(選擇其中一種即可，如果已經有安裝 yarn 建議使用上面這個):

```
yarn add react-icons
```

或

```
npm install react-icons --save
```

### 使用圖示範例

react-icons支援了10種以上免費(商業授權也免費)的圖示，使用上非常簡單。

首先在已安裝好的專案程式碼檔案上引入，然後在JSX語法中作為元件來使用即可，如下面的程式碼範例：

```js
import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Button } from 'react-bootstrap'

const IconButton = props => (
  <>
    <Button variant="primary">
      <FaReact /> React v16
    </Button>
  </>
)

export default IconButton
```

註：圖示清單，或是其它種類的圖示如何引用，請至[react-icons官網](https://react-icons.netlify.com/)觀看詳細說明。


