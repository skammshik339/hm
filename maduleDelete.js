export const deleteDataFunction = async (id) => {
  try {
    await fetch(`http://localhost:3000/IMAGES/${id}`, {
      method: 'DELETE'
    })
    console.log('пользователь удалён')
  }
  catch (err) {
    console.log(err)
  }
}
export default deleteDataFunction