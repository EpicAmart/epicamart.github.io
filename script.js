const toggleCheckbox = document.getElementById('darkToggle');
toggleCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggleCheckbox.checked);
});

const backupProfiles = ['assets/photos/portfolio.jpg', 'assets/photos/portrait.jpeg', 'assets/photos/saja.jpeg', 'assets/photos/cyberpunk.jpeg', 'assets/photos/disney.jpeg'];
const profileImage = document.getElementById('profilePhoto');
// Profile photo hover swap (ordered)
let backupIndex = 0;
if (profileImage) {
  profileImage.addEventListener('mouseenter', () => {
    // Advance to next image in array, wrap around
    backupIndex = (backupIndex + 1) % backupProfiles.length;
    profileImage.src = backupProfiles[backupIndex];
  });
  profileImage.addEventListener('mouseleave', () => {
    profileImage.src = originalImage;
  });
}
