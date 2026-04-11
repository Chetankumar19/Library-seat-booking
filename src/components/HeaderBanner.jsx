function HeaderBanner({ totalSeats, availableSeats, unavailableSeats }) {
  return (
    <section className="hero-banner">
      <header className="topbar">
        <div>
          <h1>Central Library</h1>
          <h2>Select the seat and procced for the payment</h2>
        </div>
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
