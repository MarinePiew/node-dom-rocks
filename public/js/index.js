
/**
 * Things to do when document is ready
 */
document.addEventListener('DOMContentLoaded', () => {
  getAllAlbums().then(albums => {
    fillAlbumsTable(albums);    
  }).catch(err => {
    alert(err);
  });
});

/**
 * Retrieve all albums from server
 */
function getAllAlbums() {
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
    xhr.open('GET', '/albums');
    xhr.send();
  });
}

/**
 * Get the requested album from server
 * @param {*} id 
 */
function getAlbum(id) {
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
    xhr.open('GET', `/albums/${id}`);
    xhr.send();
  });
}

/**
 * Handle click on an album
 * @param {*} evt 
 */
function clickDetailsHandler(evt) {
  if (evt && evt.currentTarget) {
    let old = document.getElementsByClassName('active');
    if (old.length) {
      old[0].classList.remove('active');
    }
    evt.currentTarget.classList.add('active');
    getAlbum(evt.currentTarget.id).then(recp => {
      fillAlbumDetails(recp);
    }).catch(err => {
      alert(err);
    });
  }
};

/**
 * Fill the album table with the albums table received from the server
 * @param {object array} albums 
 */
function fillAlbumsTable(albums) {

  let tbody = document.getElementById('list');

  for (let album of albums) {

    let tr = document.createElement('tr');

    let markup = `<td class="image"><img src='${album.image}' alt='image'></td>`;
    markup += `<td><table>`;
    markup += `<tr><td class="artist">${album.artist ? album.artist.name : ''}</td></tr>`;
    markup += `<tr><td class="title">${album.title}</td></tr>`;
    markup += `</table></td>`;
    
    tr.onclick = clickDetailsHandler;
    tr.innerHTML = markup;
    tr.id = album.id;

    tbody.appendChild(tr);
  }
}

/**
 * Fill the album pane the the album details received from the server
 * @param {object} album 
 */
function fillAlbumDetails(album) {
  for (let key in album) {
    let item = document.getElementById(`album_${key}`);
    if (item) {
      if (key === 'image') {
        item.src = album[key];        
      } else {
        item.textContent = album[key];
      }
    }
  }
}
