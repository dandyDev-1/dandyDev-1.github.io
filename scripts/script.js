const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const dropdownContent = document.getElementById(`${index + 1}`);
    const allDropdownContents = document.querySelectorAll('.dropdown-content');

    allDropdownContents.forEach(content => {
      if (content !== dropdownContent) {
        content.style.maxHeight = '0';
        content.classList.remove('show');
      }
    });

    btn.classList.toggle('active');
    if (dropdownContent.style.maxHeight) {
      dropdownContent.style.maxHeight = null;
      setTimeout(() => {
        dropdownContent.classList.remove('show');
      }, 50);
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
      setTimeout(() => {
        dropdownContent.classList.add('show');
      }, 50);
    }
  });
});

function toggleContent(index) {
  const dropdownContent = document.getElementById(`${index}`);
  const allDropdownContents = document.querySelectorAll('.dropdown-content');

  allDropdownContents.forEach(content => {
    if (content !== dropdownContent) {
      content.style.maxHeight = '0';
      content.classList.remove('show');
    }
  });

  dropdownContent.classList.toggle('show');
}

function showPopup(skillId) {
  const popup = document.getElementById(skillId);
  popup.style.display = 'block';
  setTimeout(() => {
    popup.classList.add('show');
  }, 10);
}

function hidePopup(skillId) {
  const popup = document.getElementById(skillId);
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}
