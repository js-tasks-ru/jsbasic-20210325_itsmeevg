function toggleText() {
  document.querySelector('.toggle-text-button').addEventListener('click', function () {
    document.getElementById('text').toggleAttribute('hidden');
  });
}
