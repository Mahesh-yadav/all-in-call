const chatBtn = document.getElementById('allincall-chatbox-btn');
const chatPopup = document.getElementById('allincall-popup');

chatBtn.addEventListener('click', () => {
  chatPopup.classList.add('show');
  chatBtn.classList.add('hide');
});
