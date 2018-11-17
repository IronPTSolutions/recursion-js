document.addEventListener('DOMContentLoaded', function() {
  var deleteBox = document.querySelectorAll('.delete-box');
  deleteBox.addEventListener('click', onClickDeleteBtn);
});


function onClickDeleteBtn(event) {
  // Get btn tag
  var btn = event.target;

  // Find box
  var box = findParent(btn, 'box');

  // Delete box
  var boxContainer = document.querySelector('.box-container');
  boxContainer.removeChild(box);
}

function findParent(element, classSelector) {
  if (!element || element.classList.contains(classSelector)) {
    return element;
  } else {
    return findParent(element.parentNode, classSelector);
  }
}



