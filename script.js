let orderType = '';

function openForm(type) {
  orderType = type;
  const form = document.getElementById('orderForm');
  form.classList.remove('hidden');
  setTimeout(() => form.classList.add('active'), 10);
  document.getElementById('formTitle').innerText = `${type} Request`;
}

function closeForm() {
  const form = document.getElementById('orderForm');
  form.classList.remove('active');
  setTimeout(() => form.classList.add('hidden'), 300);
}

async function submitOrder() {
  const msg = document.getElementById('orderText').value.trim();
  if (!msg) return alert('Please describe your request.');

  const webhookURL = "https://discord.com/api/webhooks/1428049744080408678/pWEGNhZmhEZGm1Y_sQs5jabzJtng4aApFLgrR2jH9nWHfkuV31jNADRtqS4BGbNihnGu"; // replace this
  const payload = { content: `**New ${orderType} Order!**\n${msg}` };

  await fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  alert('Your request has been sent to NFService!');
  closeForm();
}

function startExperience() {
  const audio = new Audio("https://cdn.pixabay.com/download/audio/2023/04/13/audio_4f6b3a7b13.mp3?filename=phonk-background.mp3");
  audio.loop = true;
  audio.volume = 0.6;
  audio.play();
  document.getElementById('startBtn').style.display = 'none';
}
