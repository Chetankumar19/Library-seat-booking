function HeaderBanner({ totalSeats, availableSeats, unavailableSeats }) {
  return (
    <section className="hero-banner">
      <header className="topbar">
        <div>
          <p className="eyebrow">Central Library</p>
          <h1>Seat Booking </h1>
        </div>
        <div className="status-pill">Dummy backend mode</div>
      </header>

      <div className="hero-content">
        <div className="hero-copy">

          <div className="stat-grid">
            <article className="stat-card">
              <span>{totalSeats}</span>
              <p>Total seats</p>
            </article>
            <article className="stat-card">
              <span>{availableSeats}</span>
              <p>Available now</p>
            </article>
            <article className="stat-card">
              <span>{unavailableSeats}</span>
              <p>Already booked</p>
            </article>
          </div>
        </div>

       
      </div>
    </section>
  )
}

export default HeaderBanner
