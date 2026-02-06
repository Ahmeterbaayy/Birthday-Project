# 🎉 Doğum Günü Kutlama Sitesi

Arkadaşınızın doğum gününü kutlamak için özel olarak tasarlanmış interaktif web sitesi!

## ✨ Özellikler

- 🎵 **Arka Plan Müziği**: Otomatik çalan doğum günü şarkısı
- 🎊 **Konfeti Efektleri**: Sürekli düşen renkli konfetiler
- 🎈 **Uçan Balonlar**: Yukarı doğru uçuşan animasyonlu balonlar
- 🕯️ **Doğum Günü Mumları**: Tıklayarak veya Space tuşuyla söndürebilirsiniz
- 📸 **Fotoğraf Carousel**: Otomatik dönen sinematik fotoğraf gösterisi
- 💝 **Dilek Kutusu**: Kişiye özel kutlama mesajı yazabileceğiniz alan
- 🌈 **Renkli Animasyonlar**: Canlı ve hoş renk geçişleri

## 🚀 Kurulum ve Kullanım

### 1. Müzik Linkini Ekleyin
`index.html` dosyasını açın ve **10. satırdaki** `MUSIC_URL_HERE` kısmına doğum günü şarkısının linkini yapıştırın:

```html
<source src="BURAYA_MÜZİK_LİNKİNİ_YAPIŞTIRIN" type="audio/mpeg">
```

### 2. Fotoğrafları Ekleyin
`index.html` dosyasında **21-24. satırlarda** placeholder fotoğrafları kendi fotoğraflarınızla değiştirin:

```html
<img src="foto1.jpg" alt="Foto 1" class="carousel-image active">
<img src="foto2.jpg" alt="Foto 2" class="carousel-image">
<img src="foto3.jpg" alt="Foto 3" class="carousel-image">
<img src="foto4.jpg" alt="Foto 4" class="carousel-image">
```

Fotoğrafları `birthday-celebration` klasörüne koyun veya direkt URL kullanın.

### 3. Siteyi Başlatın

**Seçenek 1: Python ile (Önerilen)**
```powershell
cd C:\birthday-celebration
python -m http.server 8000
```
Sonra tarayıcınızda: `http://localhost:8000`

**Seçenek 2: Node.js ile**
```powershell
npx http-server C:\birthday-celebration -p 8000
```

**Seçenek 3: Doğrudan Tarayıcıda**
`index.html` dosyasına çift tıklayın (müzik otomatik çalmayabilir)

## 🎮 Nasıl Kullanılır?

- 🔊 **Müzik Butonu**: Sağ üstteki butona tıklayarak müziği açıp kapatabilirsiniz
- ⬅️ ➡️ **Fotoğraf Geçişi**: Carousel'deki ok butonlarıyla fotoğraflar arasında gezinebilirsiniz
- 🕯️ **Mum Söndürme**: Mumlara tıklayın veya **Space tuşu**na basın
- 💝 **Dilek Yazma**: Kutlama mesajınızı yazıp gönderin

## 🎨 Özelleştirme

### Renkleri Değiştirmek
`style.css` dosyasında gradient renklerini değiştirebilirsiniz (5. satır):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
```

### Balon Sayısını Artırmak/Azaltmak
`script.js` dosyasında 143. satırdaki sayıyı değiştirin:
```javascript
setInterval(createBalloon, 2000); // 2000ms = 2 saniye
```

### Konfeti Sayısını Değiştirmek
`script.js` dosyasında 88. satırdaki sayıyı değiştirin:
```javascript
for (let i = 0; i < 150; i++) { // 150 konfeti
```

## 📱 Mobil Uyumlu

Site tüm cihazlarda düzgün çalışacak şekilde responsive tasarlanmıştır!

## 🎁 İpuçları

- Siteyi tam ekran modunda açın (F11) daha etkileyici olur
- Müziğin otomatik çalması için sayfayla etkileşime geçin
- Tüm mumları söndürdüğünüzde sürpriz bir mesaj gelir!

---

💝 **İyi eğlenceler ve mutlu doğum günleri!** 🎂