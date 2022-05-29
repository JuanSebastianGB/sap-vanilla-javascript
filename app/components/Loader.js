export const Loader = () => {
  const $loader = document.createElement('img');
  $loader.src = 'app/public/loader.svg';
  $loader.alt = 'Loading...';
  $loader.classList.add('loader');

  return $loader;
};
