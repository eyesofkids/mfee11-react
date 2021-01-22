import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorld text="你好" name="Amy" />
      <HelloWorldClass text="你好" name="Amy" />
    </>
  )
}

export default App
