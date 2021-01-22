import HelloWorld from './components/HelloWorld'
import HelloWorldClass from './components/HelloWorldClass'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorld
        name={1}
        text={true}
        clickMethod={() => {
          alert('Test')
        }}
      />
      <HelloWorldClass />
    </>
  )
}

export default App
