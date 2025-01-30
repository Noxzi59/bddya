// References to DOM Elements
const book = document.querySelector("#book");

const papers = [];
for (let i = 1; i <= 8; i++) {
    papers.push(document.querySelector(`#p${i}`));
}

// Event Listener
papers.forEach(paper => paper.addEventListener("click", handlePageClick));

// Business Logic
let currentLocation = 1; // Start at the first page
let numOfPapers = 8;     // Total number of pages
let maxLocation = numOfPapers + 1; // End when the book is fully flipped

function openBook() {
    book.style.transform = "translateX(50%)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        if (currentLocation === 1) openBook(); // Open the book on the first page
        if (currentLocation === numOfPapers) closeBook(false); // Close the book on the last page

        // Flip the current page
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.add("flipped");
        currentPaper.style.zIndex = currentLocation;

        currentLocation++; // Move to the next page
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        currentLocation--; // Move to the previous page

        if (currentLocation === 1) closeBook(true); // Close the book at the beginning
        if (currentLocation === numOfPapers) openBook(); // Open the book when flipping back

        // Unflip the current page
        const currentPaper = papers[currentLocation - 1];
        currentPaper.classList.remove("flipped");
        currentPaper.style.zIndex = numOfPapers - currentLocation + 1;
    }
}

function handlePageClick(event) {
    const paper = event.currentTarget;
    if (paper.classList.contains("flipped")) {
        goPrevPage();
    } else {
        goNextPage();
    }
}
// creating navigation buttons for changing pages
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);

// shoe thing 
function chnageImgSrc(src) {
    const mainImage = document.querySelector('.pic');
    if (mainImage) {
        mainImage.src = src;
    }
}

