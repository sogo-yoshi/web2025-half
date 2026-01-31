<script>
function changeImg() {
  document.getElementById("bananaPhoto").src = "image/banana_peel.png";

  setTimeout(function () {
    document.getElementById("bananaPhoto").src = "image/banana.png";
  }, 3000);
}
</script>
