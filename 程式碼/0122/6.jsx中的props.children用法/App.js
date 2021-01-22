import HelloWorldList from './components/HelloWorldList'
import MyLink from './components/MyLink'

function App() {
  return (
    <>
      {/* 利用props屬性傳資料給子女元件 */}
      <HelloWorldList names={['Bob', 'Amy', 'Tom']} />
      
      <MyLink href="http://google.com.tw">Google</MyLink>
    </>
  )
}

export default App
