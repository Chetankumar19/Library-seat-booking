function SeatGrid({ seats, selectedSeatId, onSelectSeat, currencySymbol }) {
  const seatRows = seats.reduce((accumulator, seat) => {
    if (!accumulator[seat.row]) {
      accumulator[seat.row] = [];
    }
    accumulator[seat.row].push(seat);
    return accumulator;
  }, {});

  return (
    <div className="panel">
      <div className="panel-head">
        <div>
          <h2>A1 to D10 seat layout</h2>
        </div>
      </div>
      <div className="rows-wrap">
        {Object.entries(seatRows).map(([row, rowSeats]) => (
          <section key={row} className="row-block">
            <h3 className="row-title">Row {row}</h3>

            <div className="seat-grid">
              {rowSeats.map((seat) => (
                <button
                  key={seat.id}
                  type="button"
                  className={[
                    "seat-card",
                    seat.id === selectedSeatId ? "selected" : "",
                    seat.isBooked ? "booked" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => onSelectSeat(seat)}
                  disabled={seat.isBooked}
                >
                  <div>
                    <span className="seat-id">{seat.label}</span>
                    <span className="seat-price">
                      {currencySymbol} {seat.price}
                    </span>
                  </div>

                  {seat.isBooked ? (
                    <span className="booked-tag">Already Booked</span>
                  ) : (
                    <span className="available-tag">Available</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default SeatGrid;
