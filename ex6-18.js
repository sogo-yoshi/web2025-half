<script>
function changeImg() {
  document.getElementById("photo").src = "image/banana_peel.png";

  setTimeout(function () {
    document.getElementById("photo").src = "image/banana.png";
  }, 3000);
}
</script>
