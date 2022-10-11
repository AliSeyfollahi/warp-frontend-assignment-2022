export const pruneData = (data) => ({
  ...data,
  available: !!data.available,
  employeeId: +data.employeeId
})