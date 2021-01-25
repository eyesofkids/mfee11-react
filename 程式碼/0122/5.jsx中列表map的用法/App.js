import HelloWorldList from './components/HelloWorldList'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorldList names={['Bob', 'Amy', 'Tom']} />
    </>
  )
}

export default App
