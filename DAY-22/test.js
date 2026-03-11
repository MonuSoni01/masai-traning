async function makeRequest() {
  let res = await fetch('https://reqres.in/api/users?page=2')
  let data = await res.json()
  console.log('data:', data.data)
}
makeRequest()
