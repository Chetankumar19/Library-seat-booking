function BookingPanel({ selectedSeat, activeRangeLabel, onConfirm, bookingMessage }) {
  return (
    <aside className="panel booking-panel">
      <div className="panel-head">
        <div>
          <p className="section-label">Booking Summary</p>
          <h2>Proceed with seat</h2>
        </div>
      </div>

      <div className="selected-seat-card">
        <div className="selected-seat-header">
          <span>Selected seat</span>
          <strong>{selectedSeat ? selectedSeat.label : 'None selected'}</strong>
        </div>

        {selectedSeat ? (
          <p>Seat {selectedSeat.label} is available for this selected time range.</p>
        ) : (
          <p>
            Pick an available seat from the matrix. Already booked seats are
            disabled for proceed.
          </p>
        )}
      </div>

      <div className="info-stack">
        <article>
          <span>Time range</span>
          <strong>{activeRangeLabel}</strong>
        </article>
      </div>

      <button
        type="button"
        className="primary-button"
        disabled={!selectedSeat}
        onClick={onConfirm}
      >
        Proceed Booking
      </button>

      {bookingMessage ? (
        <p className="booking-message">{bookingMessage}</p>
      ) : (
        <p className="booking-hint">
          Seats marked "Already Booked" cannot be selected for this range.
        </p>
      )}
    </aside>
  )
}

export default BookingPanel
