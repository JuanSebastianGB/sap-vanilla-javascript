export const PostCard = (props) => {
  let { title, date, slug, _embedded, id } = props;
  let dateFormat = new Date(date).toLocaleString(),
    urlPosterImage = _embedded['wp:featuredmedia']
      ? _embedded['wp:featuredmedia'][0].source_url
      : 'app/assets/favicon.ico';

  document.addEventListener('click', (e) => {
    if (!e.target.matches('.post-card a')) return false;
    console.log(e.target.dataset.id);
    localStorage.setItem('postDataId', e.target.dataset.id);
  });
  //https://placeimg.com/200/200/any
  return `
  <article class="post-card">
    <img src="${urlPosterImage}" alt="" />
    <h2>${title.rendered}</h2>
    <p>
      <time datetime="${dateFormat}">${dateFormat}</time>
      <a href="#/${slug}" data-id="${id}">Look at the Post</a>
    </p>
  </article>
  `;
};
