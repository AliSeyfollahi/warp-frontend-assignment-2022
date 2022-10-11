const removeEmptyValues = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v?.length))

const objectHelper = {
  removeEmptyValues
}

export default objectHelper