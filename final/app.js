const form = document.getElementById('registrar');
const input = document.querySelector('input');
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul);

function createLI(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const label = document.createElement('label');
  label.textContent = 'Confirmed';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  label.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(removeButton);

  return li;
}

filterCheckbox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;
  const list = ul.children;
  if (isChecked) {
    for (let i = 0; i < list.length; i++) {
      const li = list[i];
      if (li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      const li = list[i];
      li.style.display = '';
    }
  }
});

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
      const span = li.firstElementChild;

      const input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;

      li.insertBefore(input, span);
      li.removeChild(span);

      button.textContent = 'Save';
    } else if (button.textContent === 'Save') {
      const input = li.firstElementChild;
      const span = document.createElement('span');
      span.textContent = input.value;

      li.insertBefore(span, input);
      li.removeChild(input);

      button.textContent = 'Edit';
    }
  }
});