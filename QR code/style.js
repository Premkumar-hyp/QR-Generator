
const input = document.getElementById('qr-input');
const genBtn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qr-code');
const downloadLink = document.getElementById('download-btn');

genBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) {
    alert('Please enter some text or a URL');
    return;
  }

  qrContainer.innerHTML = '';
  new QRCode(qrContainer, {
    text,
    width: 180,
    height: 180,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });

    qrContainer.style.display = 'block';
  setTimeout(() => {
    const img = qrContainer.querySelector('img');
    const canvas = qrContainer.querySelector('canvas');
    let dataURL = '';

    if (img) {
      dataURL = img.src;
    } else if (canvas) {
      dataURL = canvas.toDataURL('image/png');
    }

    if (dataURL) {
      downloadLink.href = dataURL;
      downloadLink.style.display = 'inline-block';
    }
  }, 300);
});

