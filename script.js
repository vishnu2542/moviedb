function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

function searchFunction() {
    var searchInputMain = document.getElementById('searchInputMain').value;
    fetchMovies(searchInputMain, 'moviesSection2');
    scrollToSection('moviesSection2');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function handleSearch(event) {
    if (event.key === "Enter") {
        searchFunction();
    }
}


async function fetchMovies(searchTerm, targetElementId) {
    const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&page=1&apikey=59681e06`);
    const data = await response.json();
    const movies = data.Search;
    const moviesSection = document.getElementById(targetElementId);

    moviesSection.innerHTML = ``;

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const truncatedTitle = movie.Title.length > 13 ? movie.Title.substring(0, 13) + '...' : movie.Title;

        movieCard.innerHTML = `
            
            <img src="${movie.Poster}" alt="${movie.Title}" height="60%" width="100%" style="border-radius: 5px">
            <h3 style="padding-left: 10px">${truncatedTitle}</h3>
            <p style="padding-left: 10px">${movie.Year}</p>
            <button style="border:0px; background-color:var(--best); margin-top:5px; border-radius: 10px; height:30px" onclick="showReviewForm('${movie.Title}')">Add Review</button>
            <i class="far fa-solid fa-heart favorite-icon" onclick="toggleFavorite(this)"></i>
            <div class="rating">
                <span class="star" onclick="addRating(1, this.parentNode.parentNode)">★</span>
                <span class="star" onclick="addRating(2, this.parentNode.parentNode)">★</span>
                <span class="star" onclick="addRating(3, this.parentNode.parentNode)">★</span>
                <span class="star" onclick="addRating(4, this.parentNode.parentNode)">★</span>
                <span class="star" onclick="addRating(5, this.parentNode.parentNode)">★</span>
            </div>
            <div class="watch-1" style="width: 100%;">
                <button style="width:100%;margin-top:15px;height:28px;background-color: rgba(35, 35, 35, 0.795);color:white;">
                    <a href="watch.html?poster=${movie.Poster}&title=${encodeURIComponent(movie.Title)}&year=${movie.Year}" style="text-decoration:none;color:white">watch now</a>
                </button>
            </div>
            
        `;
        moviesSection.appendChild(movieCard);
    });
}

function showReviewForm(movieTitle) {
    var review = prompt('Enter your review:');
    if (review !== null && review.trim() !== "") {
        addReviewCard(movieTitle, review);
        alert('Review added successfully!');
    }
}

function addReviewCard(movieTitle, reviewContent) {
    const reviewSection = document.getElementById('reviewSection');
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `
        <h3>${movieTitle}</h3>
        <p>${reviewContent}</p>
        <button class="delete-review-btn" onclick="deleteReview(this)">Delete</button>
    `;
    reviewSection.appendChild(reviewCard);
}


function addRating(starIndex, card) {
    const stars = card.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < starIndex) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

function toggleFavorite(icon) {
    icon.classList.toggle('active');
}



function deleteReview(deleteButton) {
    const reviewCard = deleteButton.parentElement;
    reviewCard.remove();
}


//////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://wallpapercave.com/wp/wp1851925.jpg",
        "https://th.bing.com/th/id/R.b75ee6edfc1c479fa096d37805169071?rik=XLreWgJRO43iEQ&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f8%2f8%2f529635.jpg&ehk=lkXQwx%2bk5jS%2fs0%2fU88H54hwltHjnGNHIl%2bURmFf8b88%3d&risl=&pid=ImgRaw&r=0",
        "https://www.filmibeat.com/wimgm/1366x70/desktop/2023/01/pathaan_1.jpg",
        "https://wallpapercave.com/wp/wp10317862.jpg",
        "https://wallpapercave.com/wp/24t2Yct.jpg",
    ];

    const slider = document.querySelector(".image");
    let currentIndex = 0;

    function changeImage() {
        slider.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    changeImage();

    setInterval(changeImage, 3000);
});

setTimeout(function () {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('fullcontent').classList.remove('hidden');
}, 1500);

document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    }, { rootMargin: '0px', threshold: 0.5 });

    var cards = document.querySelectorAll('.movie-card');
    cards.forEach(function (card) {
        observer.observe(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { rootMargin: '0px', threshold: 0.5 });

    var cards = document.querySelectorAll('.social-media');
    cards.forEach(function (img) {
        observer.observe(img);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, { rootMargin: '0px', threshold: 0.5 });

    var cards = document.querySelectorAll('.imp');
    cards.forEach(function (img) {
        observer.observe(img);
    });
});










