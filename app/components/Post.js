export const Post = (props) => {
  const {
    content: { rendered: content },
    date,
    title: { rendered: title },
  } = props;
  const newDate = new Date(date).toLocaleString();
  return `
  <section class="post-page">
    <aside>
      <h2>${title}</h2>
      <time datetime="2022-01-01">${newDate}</time>
    </aside>
    <hr />
    <article>${content}</article>
  </section>
  `;
};
