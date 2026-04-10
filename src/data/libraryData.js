const rows = ['A', 'B', 'C', 'D']
const seatsPerRow = 10

export const FIXED_SEATS = rows.flatMap((row) =>
  Array.from({ length: seatsPerRow }, (_, index) => {
    const seatNumber = index + 1
    return {
      id: `${row}${seatNumber}`,
      row,
      number: seatNumber,
      label: `${row}${seatNumber}`,
    }
  }),
)

export const TERM_OPTIONS = [
  { value: '1', label: '1 Month' },
  { value: '2', label: '2 Months' },
]

export const DUMMY_BOOKINGS = [
  {
    id: 'B-1001',
    seatId: 'A2',
    user: 'Neha',
    startDate: '2026-04-15',
    endDate: '2026-05-14',
  },
  {
    id: 'B-1002',
    seatId: 'A8',
    user: 'Arjun',
    startDate: '2026-05-01',
    endDate: '2026-06-30',
  },
  {
    id: 'B-1003',
    seatId: 'B4',
    user: 'Kiran',
    startDate: '2026-04-20',
    endDate: '2026-06-19',
  },
  {
    id: 'B-1004',
    seatId: 'C7',
    user: 'Maya',
    startDate: '2026-04-11',
    endDate: '2026-05-10',
  },
]
