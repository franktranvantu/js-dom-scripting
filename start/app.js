const form = document.getElementById('registrar');
const input = document.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) {
  const li = document.createElement('li');
  li.textContent = text;

  const label = document.createElement('label');
  label.textContent = 'Confirmed';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  label.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(removeButton);

  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value;
  input.value = '';

  const li = createLI(text);

  ul.appendChild(li);
});

ul.addEventListener('change', (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;

  if (checked) {
    listItem.className = 'responded';
  } else {
    listItem.className = '';
  }
});

ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'Remove') {
      ul.removeChild(li);
    } else if (button.textContent === 'Edit') {

    }
  }
});