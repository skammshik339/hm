export const postDataFunction = async (url, nameobj, urlobj, idobj) => {
  const postData = async (url, obj) => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    const json = await res.json()
    return json
  }

  try {
    let currentDate = new Date()
    const obj = { name: nameobj, url: urlobj, id: idobj }
    const data = await postData(url, obj)
    console.log('пользователь изменен')
    return data

  } catch (error) {
    console.log(`Произошла ошибка в postData, ${error.message}`)
  }
}
export default postDataFunction