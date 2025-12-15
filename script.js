// ============================================
// AÇILIŞ EKRANI VE KARARTMA KONTROLÜ
// ============================================
const splashScreen = document.getElementById('splashScreen');
const darkOverlay = document.getElementById('darkOverlay');
const candlesSection = document.getElementById('candlesSection');
const blowText = document.getElementById('blowText');
let musicStarted = false;

// Açılış ekranına tıklanınca ana sayfaya geç
splashScreen.addEventListener('click', () => {
    // Açılış ekranını kapat
    splashScreen.classList.add('hidden');
    
    // 1 saniye sonra mumlar bölümüne kaydır ve karart
    setTimeout(() => {
        // Mumlar bölümüne kaydır
        candlesSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
        
        // 1 saniye sonra karartmayı başlat
        setTimeout(() => {
            darkOverlay.classList.add('active');
            
            // Karartma tamamlandıktan sonra "Üfle" yazısını göster
            setTimeout(() => {
                blowText.classList.add('visible');
            }, 2000);
        }, 1000);
    }, 1000);
});

// ============================================
// MÜZİK KONTROLÜ
// ============================================
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

// Müzik yükleme durumunu kontrol et
bgMusic.addEventListener('canplay', () => {
    console.log('Müzik yüklendi ve çalmaya hazır');
});

bgMusic.addEventListener('error', (e) => {
    console.error('Müzik yükleme hatası:', e);
    musicToggle.textContent = '❌ Hata';
});

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '🔇 Müzik';
        musicToggle.classList.add('muted');
        isMusicPlaying = false;
    } else {
        bgMusic.play().then(() => {
            musicToggle.textContent = '🔊 Müzik';
            musicToggle.classList.remove('muted');
            isMusicPlaying = true;
            console.log('Müzik çalıyor');
        }).catch((error) => {
            console.error('Müzik çalma hatası:', error);
            alert('Müzik çalınamadı. Lütfen tekrar deneyin.');
        });
    }
});

// ============================================
// FOTO CAROUSEL
// ============================================
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Otomatik geçiş
setInterval(nextImage, 4000);

// ============================================
// KONFETİ ANİMASYONU
// ============================================
const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const confettiColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8', '#fdcb6e'];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

const confettiArray = [];
for (let i = 0; i < 80; i++) {
    confettiArray.push(new Confetti());
}

function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiArray.forEach(confetti => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animateConfetti);
}

animateConfetti();

// ============================================
// UÇAN BALONLAR
// ============================================
const balloonContainer = document.getElementById('balloons');
const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#a29bfe', '#fd79a8', '#ff6348', '#1dd1a1'];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + '%';
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = (Math.random() * 4 + 6) + 's';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    
    balloonContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 12000);
}

// Her 2 saniyede bir balon oluştur
setInterval(createBalloon, 2000);

// Başlangıçta birkaç balon oluştur
for (let i = 0; i < 5; i++) {
    setTimeout(createBalloon, i * 400);
}

// ============================================
// DİLEK KUTUSU
// ============================================
const wishText = document.getElementById('wishText');
const submitWish = document.getElementById('submitWish');
const wishMessage = document.getElementById('wishMessage');
const specialMessage = document.getElementById('specialMessage');
const closeMessage = document.getElementById('closeMessage');

submitWish.addEventListener('click', () => {
    const wish = wishText.value.trim();
    
    if (wish === '') {
        wishMessage.textContent = 'Lütfen bir dilek yaz! 💭';
        wishMessage.classList.add('show');
        setTimeout(() => {
            wishMessage.classList.remove('show');
        }, 3000);
        return;
    }

    // Büyük konfeti patlaması efekti
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            confettiArray.push(new Confetti());
        }, i * 20);
    }

    // Özel mesajı göster
    setTimeout(() => {
        specialMessage.classList.add('show');
    }, 500);

    wishText.value = '';
});

// Kapat butonu
closeMessage.addEventListener('click', () => {
    specialMessage.classList.remove('show');
});

// ============================================
// MUMLAR - TIKLAYINCA VEYA ÜFLEYEREK SÖNDÜRME
// ============================================
const flames = document.querySelectorAll('.flame');
let extinguishedCount = 0;
let audioContext;
let microphone;
let analyser;
let isListening = false;

// Mikrofon ile üfleme algılama
async function startBlowDetection() {
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        microphone = audioContext.createMediaStreamSource(stream);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        microphone.connect(analyser);
        
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        isListening = true;
        
        function detectBlow() {
            if (!isListening) return;
            
            analyser.getByteFrequencyData(dataArray);
            const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
            
            // Üfleme algılandı (ses seviyesi yüksek)
            if (average > 50) {
                // Müziği üfleme ile başlat
                if (!musicStarted) {
                    bgMusic.play().then(() => {
                        isMusicPlaying = true;
                        musicToggle.textContent = '🔊 Müzik';
                        musicStarted = true;
                        console.log('Müzik üfleme ile başlatıldı');
                    }).catch((error) => {
                        console.log('Müzik henüz başlamadı:', error);
                    });
                }
                extinguishAllCandles();
            }
            
            requestAnimationFrame(detectBlow);
        }
        
        detectBlow();
        console.log('🎤 Mikrofon aktif - Mumları üfleyebilirsiniz!');
    } catch (error) {
        console.log('Mikrofon erişimi reddedildi. Tıklayarak söndürebilirsiniz.');
    }
}

// Tüm mumları söndür
function extinguishAllCandles() {
    if (extinguishedCount === flames.length) return;
    
    flames.forEach(flame => {
        if (!flame.classList.contains('extinguished')) {
            flame.style.animation = 'flicker-out 0.3s ease forwards';
            setTimeout(() => {
                flame.style.opacity = '0';
                flame.classList.add('extinguished');
            }, 300);
        }
    });
    
    extinguishedCount = flames.length;
    
    setTimeout(() => {
        // Üfle yazısını gizle
        blowText.classList.remove('visible');
        
        // Karartmayı kaldır
        darkOverlay.classList.remove('active');
        
        // Konfeti patlaması
        for (let i = 0; i < 80; i++) {
            setTimeout(() => confettiArray.push(new Confetti()), i * 15);
        }
        
        alert('🎉 Tüm mumları üfledin! Dileğin kabul olsun! 🎂');
        
        // Mumları yeniden yak
        setTimeout(() => {
            flames.forEach(f => {
                f.style.animation = '';
                f.style.opacity = '1';
                f.classList.remove('extinguished');
            });
            extinguishedCount = 0;
        }, 2000);
    }, 500);
}

// Tek tek tıklayarak mum söndürme
flames.forEach((flame, index) => {
    flame.addEventListener('click', () => {
        // Müziği kullanıcı etkileşimi sırasında başlat (mobil için)
        if (!musicStarted) {
            bgMusic.play().then(() => {
                isMusicPlaying = true;
                musicToggle.textContent = '🔊 Müzik';
                musicStarted = true;
                console.log('Müzik tıklama ile başlatıldı');
            }).catch((error) => {
                console.log('Müzik henüz başlamadı:', error);
            });
        }
        
        if (!flame.classList.contains('extinguished')) {
            flame.style.animation = 'flicker-out 0.3s ease forwards';
            setTimeout(() => {
                flame.style.opacity = '0';
                flame.classList.add('extinguished');
            }, 300);
            extinguishedCount++;

            // Tüm mumlar söndüğünde
            if (extinguishedCount === flames.length) {
                setTimeout(() => {
                    // Üfle yazısını gizle
                    blowText.classList.remove('visible');
                    
                    // Karartmayı kaldır
                    darkOverlay.classList.remove('active');
                    
                    // Konfeti patlaması
                    for (let i = 0; i < 80; i++) {
                        setTimeout(() => confettiArray.push(new Confetti()), i * 15);
                    }
                    
                    alert('🎉 Tüm mumları söndürdün! Dileğin kabul olsun! 🎂');
                    
                    // Mumları yeniden yak
                    flames.forEach(f => {
                        f.style.animation = '';
                        f.style.opacity = '1';
                        f.classList.remove('extinguished');
                    });
                    extinguishedCount = 0;
                }, 500);
            }
        }
    });
    
    // Hover efekti
    flame.addEventListener('mouseenter', () => {
        if (!flame.classList.contains('extinguished')) {
            flame.style.transform = 'scale(1.2)';
        }
    });
    
    flame.addEventListener('mouseleave', () => {
        if (!flame.classList.contains('extinguished')) {
            flame.style.transform = 'scale(1)';
        }
    });
});

// Sayfa yüklendiğinde mikrofon iznini iste
setTimeout(() => {
    if (confirm('🎤 Mumları üfleyerek söndürmek ister misin? (Mikrofon izni gerekir)\n\nHayır derseniz tıklayarak söndürebilirsiniz.')) {
        startBlowDetection();
    }
}, 3000);

console.log('🎉 Doğum günü kutlaması başladı! 🎂');