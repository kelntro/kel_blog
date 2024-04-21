// JavaScript for the Mindfulness and Meditation Blog

// Toggle visibility of read more section
function toggleReadMore() {
    const readMoreSection = document.querySelector('.read-more-section');
    readMoreSection.style.display = 'block';
  }
  
  // Close read more section
  function closeReadMore() {
    const readMoreSection = document.querySelector('.read-more-section');
    readMoreSection.style.display = 'none';
  }
  document.addEventListener('DOMContentLoaded', function () {
    const topicCards = document.querySelectorAll('.topic-card');
  
    topicCards.forEach(function (card) {
      card.addEventListener('click', function () {
        // Toggle the 'expanded' class to expand or collapse the card content
        this.classList.toggle('expanded');
      });
    });
  });
  
  // Event listeners
  const readMoreLink = document.querySelector('.read-more');
  readMoreLink.addEventListener('click', toggleReadMore);
  
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeReadMore);
  