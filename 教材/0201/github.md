# Github操作教學

## 1. 註冊GitHub

連上GitHub網站，然後點擊右上角的Sign In直接登入。

> 需要有email帳號，而且要確定收到的註冊啟動信件

> 在GitHub裡面放的預設所有東西都是公開的(open)，如果在GitHub裡面放的資料要不公開的話，就要在建立儲存庫時選擇私有的(private)，但最多只能3個協作者，專案付費方案從每月$7塊美金起。

## 2. 建立Repo  (Repositories)

然後點進Repositories，點擊右邊的「New」來建立一個新的程式庫。

2-1. 新增 `.gitignore` 排除不需要上傳的東西

```text
node_modules/
.DS_Store
db.json
package-lock.json
thumbs.db
```

2-2. 新增README.md

Markdown語法參考：

- https://tiida54.github.io/2018/01/03/3%E5%88%86%E9%90%98%E5%AD%B8%E6%9C%83Markdown%E5%B8%B8%E7%94%A8%E8%AA%9E%E6%B3%95/
- https://ithelp.ithome.com.tw/articles/10203758

## 3. 安裝Github Desktop

在桌面作業系統中的GitHub的檔案管理功能軟體

3-1. clone or download
3-2. push/ pull

## 4. 參與專案

### Fork 專案

如果你想要參與一個你沒有推送權限的專案，你可以「fork」一份。這代表說 GitHub 會複製一份這個專案的副本給你，並且你對這副本有全部的權限。這副本會存在於你的帳號下，你可以對它進行推送。

去到專案頁面，點下右上角的「Fork」鍵，就可以 fork 專案。

> fork後只會保留當下的專案副本，可以參考[這裡的fork的說明](https://gitbook.tw/chapters/github/pull-request.html)

> 註：fork 與 pull request 通常是參與其它已存在專案需要學習的技能

### GitHub 流程

GitHub 是基於一個以 Pull Request 為中心的特別合作流程而設計出來的。 這個流程，不論是你在一個緊密連結的團隊裡共同在單一倉儲上合作；或是一個由散布全球的陌生人們構成的合作網路或是公司，透過大量的 fork 專案來對專案做出貢獻，都能運作。 這一切都是基於我們在 使用 Git 分支 這章所講過的 主題分支 的工作流程。

一般情況下就是照著下面的程序運作的：

- 從 master 建立一個主題分支。
- 加入一些變更來改善這個專案。
- 把這個分支推送到你的 GitHub 專案。
- 在 GitHub 上建立一個 Pull Request。
- 討論，並在需要的時候加入新的變更。
- 專案擁有者視情況決定要把這個 Pull Request 合併進原始專案，或是關閉它。

> 參考[官方的中文流程文件](https://git-scm.com/book/zh-tw/v2/GitHub-%E5%8F%83%E8%88%87%E4%B8%80%E5%80%8B%E5%B0%88%E6%A1%88)

## 5. 建立協同的專案

Git 儲存庫並沒有什麼「權限控管」的概念，因為他是一個分散式的版本控管系統，當你執行 git clone 之後就會把整份擁有完整版本歷史的儲存庫下載回來，接著你就可以在本地離線的進行開發與建立版本，最後再將變更推送到遠端儲存庫。

不過，如果我們只有一份遠端儲存庫的話，這代表大家都有權限將變更推送到遠端儲存庫。GitHub 採用了 forks 加上 pull request 的流程，讓你可以做到基本的權限控管。

### 5.1 設定專案的權限控管 - 個人帳號

在 GitHub 的個人帳戶下，並沒有甚麼權限控管的機制，所以只要你授權特定人為協同開發人員 (Collaborators)，他就能自由的 Push 與 Pull 專案原始碼。

### 5.2 設定 GitHub 專案的權限控管 - 組織帳號

在 GitHub 的組織帳戶下，就可以設定人員群組(Teams)，你就可以在群組上設定更細的權限，其中包括三種權限：

* Pull Only (唯讀)
* Push & Pull (可讀可寫)
* Push, Pull & Administrative (可讀可寫以及專案管理權限)

> 註：參考網路上的[圖解教學](https://ithelp.ithome.com.tw/articles/10140305)

> 組織帳號的管理會較為複雜

## 6. 其它進階學習

- 分支與合併(branch/merge)
- 差異比較(diff)
- 解決衝突

## 其它指令或術語

- Revert this commit(還原提交)
- git remote 指令跟遠端有關的操作
- add 指令是指要加入一個遠端的節點
- upstream 另一個分支的名字。在 Git 裡，每個分支可以設定一個「上游」。

## 參考

- https://git-scm.com/book/zh-tw/v2/GitHub-%E5%8F%83%E8%88%87%E4%B8%80%E5%80%8B%E5%B0%88%E6%A1%88
- https://progressbar.tw/posts/3
- https://gitbook.tw/
- https://ithelp.ithome.com.tw/articles/10140305
- https://guides.github.com/activities/hello-world/
