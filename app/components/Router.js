import { ajax } from '../helpers/ajax.js';
import api from '../helpers/connection_api.js';
import { Post } from './Post.js';
import { PostCard } from './PostCard.js';

export const Router = async () => {
  let { hash } = location;
  const $main = document.getElementById('main');
  $main.innerHTML = null;

  if (!hash || hash === '#/') {
    await ajax({
      url: api.POSTS,
      cbSuccess: (main) => {
        let html = '';
        main.map((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes('#/search')) {
    $main.innerHTML = '<h2>Going inside search</h2>';
  } else if (hash === '#/contact') {
    $main.innerHTML = '<h2>Going inside contact</h2>';
  } else {
    console.log(`${api.POST}/${localStorage.getItem('postDataId')}`);
    await ajax({
      url: `${api.POST}/${localStorage.getItem('postDataId')}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
  }
  document.querySelector('.loader').style.display = 'none';
};
