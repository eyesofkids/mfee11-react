import HelloWorld from './components/HelloWorld'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorld text="你好" name="Amy" />
    </>
  )
}

export default App
