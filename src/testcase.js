

export const createArray = (no, type) => {
  let Obj = { name: 'Some Title ', someString: '', Obj: {}, disable: false, type: type }
  let newArray = Array.from({ length: no }, () => Object.assign({}, Obj))
  let id = 0
  let finalArray = newArray.map(item => {
    id = id + 1
    return { ...item, id: id }
  })
  return finalArray
}