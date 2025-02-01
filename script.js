import postDataFunction from "./modulePost.js"
import getDataFunction from "./moduleGet.js"
import deleteDataFunction from "./maduleDelete.js"
import patchDataFunction from "./modulePatch.js"
let buttonGet = document.querySelector('.buttonGet')
let buttonSort = document.querySelector('.buttonSort')
let buttonPost = document.querySelector('.buttonPost')
let buttonRandom = document.querySelector('.buttonRandom')
let inputName = document.querySelector('.inputName')
let inputUrl = document.querySelector('.inputUrl')
const list = document.querySelector('.list')


buttonPost.addEventListener('click', async () => {
  const nameobj = inputName.value
  const urlobj = inputUrl.value
  const idobj = 'image-' + Date.now()
  await postDataFunction('http://localhost:3000/IMAGES', nameobj, urlobj, idobj)

})


buttonGet.addEventListener('click', async () => {

  let images = await getDataFunction('http://localhost:3000/IMAGES')
  images.forEach(image => {
    list.insertAdjacentHTML(
      `beforeend`,
      `<li id = "${image.id}"><p>${image.name}</p><img src = "${image.url}"></li>`

    )
  })

})

list.addEventListener('click', function () {
  let li = document.querySelector('li')
  li.addEventListener('click', async () => {
    if (inputName.value == '') {
      await deleteDataFunction(li.id)
    }
    else {
      li.addEventListener('click', async () => {
        let id = li.id
        let name = inputName.value
        await patchDataFunction('http://localhost:3000/IMAGES', id, name)
      })
    }
  })
})