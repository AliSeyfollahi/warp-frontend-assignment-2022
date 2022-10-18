export const pruneData = (data) => ({
  ...data,
  ...(data.available ? { available: !!data.available } : {}),
  ...(!!data.employeeId ? { employeeId: +data.employeeId } : {})
})