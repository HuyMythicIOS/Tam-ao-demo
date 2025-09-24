const crosshair = document.getElementById('crosshair');
const btn = document.getElementById('toggleBtn');
let visible = false;

btn.addEventListener('click', () => {
  visible = !visible;
  crosshair.style.display = visible ? 'block' : 'none';
  btn.textContent = visible ? 'Tắt tâm ảo' : 'Bật tâm ảo';
});