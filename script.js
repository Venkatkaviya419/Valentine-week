document.addEventListener("DOMContentLoaded", () => {

  // ===== PASSWORD LOGIC =====
  const PASSWORD = "only_us"; // Change to your secret
  const lockScreen = document.getElementById("lock-screen");
  const mainScreen = document.getElementById("main-screen");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error");

  function unlock() {
    const input = passwordInput.value;
    if(input === PASSWORD) {
      lockScreen.classList.remove("active");
      mainScreen.classList.add("active");
    } else {
      errorMsg.innerText = "Wrong password ❤️";
    }
  }

  window.unlock = unlock; // Make it accessible for onclick in HTML

  // ===== DAY MESSAGES =====
  const dayMessages = {
    1: `
🌹 Rose Day

Panni kutty,

If love had a shape,
it would look like the calm I feel when I think of you.

You make ordinary days softer,
and my loud thoughts quieter.

You’re not just someone I love —
you’re someone I feel at home with.
`,

    2: `
💌 Propose Day

Panni kutty,

I don’t need big moments or perfect timing.
I just need you.

I choose you in small ways,
in quiet moments,
and in everything that matters.

Today, tomorrow —
I choose you.
`,

    3: `
🍫 Chocolate Day

Panni kutty,

There’s a sweetness in the way you care,
in the way you smile without trying,
in the way you make things feel lighter.

Being with you feels like comfort
wrapped in happiness.

Life is simply sweeter with you.
`,

    4: `
🧸 Teddy Day

Panni kutty,

This is for the days you feel tired,
for the moments you doubt yourself,
for the times you just need warmth.

If I were there,
I’d hold you and remind you —

You don’t have to be strong all the time.
I’m here.
`,

    5: `
💍 Promise Day

Panni kutty,

I promise patience when things are hard.
I promise honesty, even when it’s not easy.
I promise effort, every single day.

I don’t promise perfection.
I promise love that stays.
`,

    6: `
🤗 Hug Day

Panni kutty,

Imagine this hug —
not rushed,
not tight,
just safe.

A hug that says,
“You’re okay.
You’re loved.
I’ve got you.”
`,

    7: `
💋 Kiss Day

Panni kutty,

If I could kiss you right now,
it would be slow and gentle,
full of everything I feel but can’t always say.

This week ends here,
but my love for you doesn’t.

Always.
`
  };

  // ===== MODAL LOGIC =====
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");

  function typeWriter(text, element, speed = 30, callback) {
    element.innerHTML = "";
    let i = 0;
    function write() {
      if(i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(write, speed);
      } else {
        if(callback) callback();
      }
    }
    write();
  }

  function closeModal() {
    modal.style.display = "none";
    modalText.innerHTML = "";
  }

  window.closeModal = closeModal; // For onclick in HTML

  // ===== DAY BUTTONS =====
  document.querySelectorAll(".day").forEach(day => {
    day.onclick = () => {
      const d = day.dataset.day;
      modal.style.display = "flex";

      typeWriter(dayMessages[d], modalText, 30, () => {
        if(d == 7) {
          const btn = document.createElement("button");
          btn.innerText = "Replay the week, Panni kutty ❤️";
          btn.className = "replay-btn";
          btn.onclick = () => location.reload();
          modalText.appendChild(btn);
        }
      });
    };
  });

  // ===== FLOATING HEARTS =====
  const floatContainer = document.getElementById("floating-elements");
  const symbols = ["❤️", "🌹", "✨"];

  function createFloat() {
    const el = document.createElement("div");
    el.classList.add("float");
    el.innerText = symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left = Math.random()*100 + "vw";
    el.style.animationDuration = 6 + Math.random()*5 + "s";
    el.style.fontSize = 16 + Math.random()*20 + "px";
    floatContainer.appendChild(el);
    setTimeout(() => el.remove(), 10000);
  }

  setInterval(createFloat, 800);

  // ===== MUSIC PLAY/PAUSE =====
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  musicBtn.onclick = () => {
    if(music.paused) {
      music.play().catch(() => console.log("Tap required for audio"));
      musicBtn.innerText = "🔇 Pause Music";
    } else {
      music.pause();
      musicBtn.innerText = "🎵 Play Music";
    }
  };

});

