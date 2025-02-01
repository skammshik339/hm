export const patchDataFunction = async (url, id, name) => {
  const patchData = async (url, id, name) => {
    console.log(`${url}/${id}`)
    const res = await fetch(`${url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ name }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })

    if (!res.ok) throw new Error(`Ошибка при запросе ${res.name}`)

    const text = await res.text()
    try {
      return JSON.parse(text)
    } catch (err) {
      throw new Error('сервер вернул не JSON')
    }
  }

  try {
    const data = await patchData(url, id, name)
    console.log('Пользователь изменён')
    return data
  } catch (error) {
    console.log(`Произошла ошибка в patchData, ${error.message}`)
  }
}
export default patchDataFunction