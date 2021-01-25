function Child(props) {
  // 利用props得到由父母元件傳遞過來的資料
  return <h1>{props.data}</h1>
}

export default Child
