export const pruneData = (data) => {
  if (data.available === "on")
    data.available = true
  return data
}