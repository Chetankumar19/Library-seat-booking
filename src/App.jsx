import { useMemo, useState } from 'react'
import './App.css'
import BookingPanel from './components/BookingPanel'
import HeaderBanner from './components/HeaderBanner'
import SearchPanel from './components/SearchPanel'
import SeatGrid from './components/SeatGrid'
import { DUMMY_BOOKINGS, FIXED_SEATS, TERM_OPTIONS } from './data/libraryData'
import { buildSearchRange, formatDate, rangesOverlap, toIsoDate } from './utils/dateRange'

const todayIso = toIsoDate(new Date())

function App() {
  const [bookings, setBookings] = useState(DUMMY_BOOKINGS)
  const [startDate, setStartDate] = useState(todayIso)
  const [selectedTerm, setSelectedTerm] = useState('1')
  const [activeSearch, setActiveSearch] = useState({
    startDate: todayIso,
    term: '1',
  })
  const [selectedSeatId, setSelectedSeatId] = useState('')
  const [bookingMessage, setBookingMessage] = useState('')

  const searchRange = useMemo(
    () => buildSearchRange(activeSearch.startDate, activeSearch.term),
    [activeSearch],
  )

  const activeRangeLabel = `${formatDate(searchRange.startDate)} - ${formatDate(searchRange.endDate)}`

  const seatView = useMemo(
    () =>
      FIXED_SEATS.map((seat) => {
        const conflictBooking = bookings.find(
          (booking) =>
            booking.seatId === seat.id &&
            rangesOverlap(
              booking.startDate,
              booking.endDate,
              searchRange.startDate,
              searchRange.endDate,
            ),
        )

        return {
          ...seat,
          isBooked: Boolean(conflictBooking),
          bookedBy: conflictBooking?.user ?? '',
        }
      }),
    [bookings, searchRange.endDate, searchRange.startDate],
  )

  const selectedSeat =
    seatView.find((seat) => seat.id === selectedSeatId && !seat.isBooked) ?? null

  const handleSearch = () => {
    if (!startDate) {
      return
    }

    setActiveSearch({
      startDate,
      term: selectedTerm,
    })
    setSelectedSeatId('')
    setBookingMessage('')
  }

  const handleSelectSeat = (seat) => {
    if (seat.isBooked) {
      return
    }

    setSelectedSeatId(seat.id)
    setBookingMessage('')
  }

  const handleConfirmBooking = () => {
    if (!selectedSeat) {
      return
    }

    const newBooking = {
      id: `B-${Date.now()}`,
      seatId: selectedSeat.id,
      user: 'You',
      startDate: searchRange.startDate,
      endDate: searchRange.endDate,
    }

    setBookings((current) => [...current, newBooking])
    setSelectedSeatId('')
    setBookingMessage(`${selectedSeat.label} booked for ${activeRangeLabel}.`)
  }

  const availableSeatsCount = seatView.filter((seat) => !seat.isBooked).length

  return (
    <main className="app-shell">
      <HeaderBanner
        totalSeats={FIXED_SEATS.length}
        availableSeats={availableSeatsCount}
        unavailableSeats={FIXED_SEATS.length - availableSeatsCount}
      />

      <section className="workspace">
        <div className="workspace-main">
          <SearchPanel
            startDate={startDate}
            onStartDateChange={setStartDate}
            termOptions={TERM_OPTIONS}
            selectedTerm={selectedTerm}
            onTermChange={setSelectedTerm}
            onSearch={handleSearch}
            activeRangeLabel={activeRangeLabel}
          />

          <SeatGrid
            seats={seatView}
            selectedSeatId={selectedSeatId}
            onSelectSeat={handleSelectSeat}
          />
        </div>

        <BookingPanel
          selectedSeat={selectedSeat}
          activeRangeLabel={activeRangeLabel}
          onConfirm={handleConfirmBooking}
          bookingMessage={bookingMessage}
        />
      </section>
    </main>
  )
}

export default App
