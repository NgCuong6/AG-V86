// Danh sách đầy đủ 25 ảnh đã gửi
const images = [
    'IMG_20260204_225211_633.jpg',
    'IMG_20260204_225204_540.jpg',
    'IMG_20260204_225158_475.jpg',
    'IMG_20260204_225155_011.jpg',
    'IMG_20260204_225148_927.jpg',
    'IMG_20260204_225145_604.jpg',
    'IMG_20260204_225141_563.jpg',
    'IMG_20260204_225138_068.jpg',
    'IMG_20260204_225134_452.jpg',
    'IMG_20260204_225130_544.jpg',
    'IMG_20260204_225126_202.jpg',
    'IMG_20260204_225121_125.jpg',
    'IMG_20260204_225118_380.jpg',
    'IMG_20260204_225114_944.jpg',
    'IMG_20260204_225111_024.jpg',
    'IMG_20260204_225107_805.jpg',
    'IMG_20260204_225104_077.jpg',
    'IMG_20260204_225100_733.jpg',
    'IMG_20260204_225056_868.jpg',
    'IMG_20260204_225053_814.jpg',
    'IMG_20260204_225050_223.jpg',
    'IMG_20260204_225046_726.jpg',
    'IMG_20260204_225043_018.jpg',
    'IMG_20260204_225039_621.jpg',
    'IMG_20260204_225034_355.jpg'
];

const gallery = document.getElementById('gallery');

function loadImages() {
    if (!gallery) return;

    images.forEach(fileName => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = fileName; 
        img.alt = "Ảnh khay nhựa";
        img.loading = "lazy"; 

        // Xử lý khi không tìm thấy file ảnh trong thư mục
        img.onerror = function() {
            console.warn("Lỗi: Không tìm thấy file " + fileName + " trong thư mục.");
            this.parentElement.style.display = 'none'; 
        };

        item.appendChild(img);
        gallery.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', loadImages);
