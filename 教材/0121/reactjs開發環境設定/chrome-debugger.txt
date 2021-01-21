## 步驟一：安裝 VS Code 擴充

安裝以下 VS Code 擴充:

- Chrome Debugger

## 步驟二：新增 launch.json

新增一個 `launch.json` 檔案在 .vscode 資料夾中(位於你的專案的根目錄中)
或是由除錯區域新增一個 `launch.json` 組態

> launch.json 檔案的內容如下

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "webRoot": "${workspaceRoot}/src",
      "sourceMapPathOverrides": {
        "webpack:///src/*": "${webRoot}/*"
      }
    }
  ]
}
```

注意: URL 可能會因為你有改變 HOST 或 PORT 環境變數而隨著改變

## 步驟三：進行除錯

可以在VS Code的程式碼撰寫區域設定中斷點。

使用 npm start 啟動你的應用，然後可以在VS Code中按下F5，或點按綠色除錯按鈕進行除錯。
