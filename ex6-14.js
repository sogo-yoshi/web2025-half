function changeToSecond() {
  const img = document.getElementById('photo');
  if (!img) return;
  img.src = './image/magao.jpg';
  img.alt = '目を閉じた笑顔の写真';
}

function resetToFirst() {
  const img = document.getElementById('photo');
  if (!img) return;
  img.src = './image/egao.jpg';
  img.alt = '真顔の写真';
}
