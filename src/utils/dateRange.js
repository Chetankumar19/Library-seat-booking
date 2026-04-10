export const toIsoDate = (date) => date.toISOString().slice(0, 10)

export const addMonths = (isoDate, months) => {
  const current = new Date(`${isoDate}T00:00:00`)
  const next = new Date(current)
  next.setMonth(next.getMonth() + Number(months))
  return toIsoDate(next)
}

export const addDays = (isoDate, days) => {
  const current = new Date(`${isoDate}T00:00:00`)
  current.setDate(current.getDate() + Number(days))
  return toIsoDate(current)
}

export const buildSearchRange = (startDate, months) => {
  const rangeStart = startDate
  const oneDayBeforeEnd = addDays(addMonths(startDate, months), -1)

  return {
    startDate: rangeStart,
    endDate: oneDayBeforeEnd,
  }
}

export const rangesOverlap = (aStart, aEnd, bStart, bEnd) =>
  aStart <= bEnd && bStart <= aEnd

export const formatDate = (isoDate) => {
  const date = new Date(`${isoDate}T00:00:00`)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
