
/**
 * Things to do when document is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  getAllGenres().then(genres => {
    fillGenres(genres);
  }).catch(err => {
    alert(err);
  });
});

/**
 * Request genres list
 */
function getAllGenres() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (err) {
            reject(new Error(err));
          }
        }
      }
    };
    xhr.open('GET', '/genres');
    xhr.send();
  });
}

/**
 * Fill the genres dropdown list with the genres received from the server
 * @param {object array} genres 
 */
function fillGenres(genres) {

  let select = document.getElementById('genres');

  for (let genre of genres) {

    let option = document.createElement('option');

    option.text = genre.name;
    option.value = genre.id;

    select.appendChild(option);
  }
}