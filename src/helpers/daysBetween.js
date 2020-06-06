function treatAsUTC(date) {
  let result = new Date()
  if (date) {
    result = new Date(date)
  }

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
  return result
}

module.exports = (startDate) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.floor((treatAsUTC() - treatAsUTC(startDate)) / millisecondsPerDay)
}
