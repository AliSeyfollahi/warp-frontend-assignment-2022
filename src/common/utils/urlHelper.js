const objectToQueryParams = (obj) => new URLSearchParams(obj).toString()

const urlHelper = {
  objectToQueryParams
}

export default urlHelper