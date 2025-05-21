document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("bg-music")) {
      const audio = document.createElement("audio");
      audio.src = "interstellar-piano-157094.mp3"; // Adjust the path as needed
      audio.id = "bg-music";
      audio.loop = true;
      audio.autoplay = true;
      audio.volume = 0.2;
      audio.style.display = "none";
      document.body.appendChild(audio);
    }
  });