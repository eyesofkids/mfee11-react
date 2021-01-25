import Child from './Child'

function Parent() {
  const innerData = '父母元件內部資料'
  return <Child data={innerData} />
}

export default Parent
