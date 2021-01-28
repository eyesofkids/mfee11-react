export default async function requestToServer(
  url,
  method = 'GET',
  bodyData = '', //bodyData 必需為 json 字串
  verify = () => true,
  successCallback = () => {},
  failCallback = () => {},
  debug = false
) {
  // GET方法不有body，先設定出樣版物件
  const requestTemplate = new Request(url, {
    method: method,
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }),
  })

  let request = requestTemplate

  // 如果不是GET再加上body
  if (method !== 'GET')
    request = new Request(requestTemplate, { body: bodyData })

  try {
    if (debug) console.log('request', request)

    const response = await fetch(request)

    if (debug) console.log('response', response)

    const data = await response.json()

    if (debug) console.log('data', data)

    if (debug) console.log('response.ok', response.ok)

    if (verify(data) && response.ok) {
      successCallback(data)
    } else {
      failCallback(data)
    }
  } catch (error) {
    console.log('Fetch Error', error)
  }
}
