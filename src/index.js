const input = document.querySelector('input');
const msg = document.getElementById('msg');
const remove = document.getElementById('remove');
const save = document.getElementById('save');
let data = '';

const readFile = (file) => new Promise((resolve, reject) => {
  const newFile = new FileReader();
  newFile.onload = () => resolve(newFile.result);
  newFile.readAsText(file);
});

async function read() {
  console.log(readFile(input.files[0]));
  await readFile(input.files[0])
    .then((result) => {
      save.removeAttribute('disabled', 'disabled');
      remove.removeAttribute('disabled', 'disabled');
      new Function(result);
      data = result;
    })
    .catch((error) => {
      save.setAttribute('disabled', 'disabled');
      remove.setAttribute('disabled', 'disabled');
      data = error;
    });
  msg.innerHTML = data;
}

const removeAllComments = (str) => {
  let newStr = '';
  newStr = str.replace(/((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/gm, '');
  data = newStr.replace(/\n{3,}/gm, '\n');
  msg.innerHTML = data;
};

const download = (filename, text) => {
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();
  document.body.removeChild(element);
};

input.addEventListener('change', () => read(this), false);
remove.addEventListener('click', () => removeAllComments(data), false);
save.addEventListener('click', () => {
  const text = data;
  const filename = input.files[0].name;

  download(filename, text);
}, false);
