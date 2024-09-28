document.addEventListener('DOMContentLoaded', function() {
    const movieSelect = document.getElementById('movie');
    const showtimeSelect = document.getElementById('showtime');
    const seatsInput = document.getElementById('seats');
    const bookButton = document.getElementById('book-button');
    const bookingSummary = document.getElementById('booking-summary');

    const showtimes = {
        'Movie 1': ['10:00 AM', '1:00 PM', '4:00 PM'],
        'Movie 2': ['11:00 AM', '2:00 PM', '5:00 PM'],
        'Movie 3': ['12:00 PM', '3:00 PM', '6:00 PM']
    };

    // Update showtimes based on selected movie
    movieSelect.addEventListener('change', function() {
        const selectedMovie = movieSelect.value;
        showtimeSelect.innerHTML = '<option value="">Select a showtime</option>';
        if (selectedMovie) {
            showtimes[selectedMovie].forEach(function(showtime) {
                const option = document.createElement('option');
                option.value = showtime;
                option.textContent = showtime;
                showtimeSelect.appendChild(option);
            });
        }
    });

    // Handle booking
    bookButton.addEventListener('click', function() {
        const movie = movieSelect.value;
        const showtime = showtimeSelect.value;
        const seats = seatsInput.value;

        if (!movie || !showtime || seats <= 0) {
            bookingSummary.textContent = 'Please select a movie, showtime, and number of seats.';
            return;
        }

        bookingSummary.textContent = `Booking Confirmed:
        Movie: ${movie}
        Showtime: ${showtime}
        Number of Seats: ${seats}`;
    });
});
