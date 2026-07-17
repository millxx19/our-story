// ==========================================
// 1. PENGATURAN TANGGAL MEMORI (TIME ELAPSED)
// ==========================================
// Diset ke 16 Juni 2026 agar pas menghasilkan jarak 31 hari saat ini.
const startDate = new Date('2026-06-16T15:47:00'); 

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    // Menghitung konversi matematika waktu dasar
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Memasukkan angka ke elemen HTML jika elemen tersebut ada di halaman
    if (document.getElementById('days')) {
        document.getElementById('days').innerText = days;
    }
    if (document.getElementById('hours')) {
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    }
    if (document.getElementById('minutes')) {
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    }
    if (document.getElementById('seconds')) {
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }
}

// Menjalankan hitungan waktu setiap 1 detik secara real-time
setInterval(updateTimer, 1000);
updateTimer(); // Panggil di awal agar langsung muncul tanpa delay


// ==========================================
// 2. SISTEM NAVIGASI PENGGANTIAN HALAMAN (TABS)
// ==========================================
function switchPage(pageId) {
    // 1. Sembunyikan semua halaman terlebih dahulu
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // 3. Update style link menu aktif di desktop (termasuk halaman video baru)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('text-white');
            link.classList.remove('text-stone-400');
        } else {
            link.classList.remove('text-white');
            link.classList.add('text-stone-400');
        }
    });

    // 4. Otomatis scroll ke atas halaman saat berganti menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// ==========================================
// 3. FITUR DRAWER MENU MOBILE (RESPONSIF HP)
// ==========================================
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    if (mobileMenu) {
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
            if (menuIcon) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            }
        } else {
            mobileMenu.classList.add('hidden');
            if (menuIcon) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        }
    }
}


// ==========================================
// 4. INTERAKSI DECRYPT AMPLOP (LOVE LETTER)
// ==========================================
function openLetter() {
    const closedView = document.getElementById('letter-closed');
    const openedView = document.getElementById('letter-opened');

    if (closedView && openedView) {
        closedView.classList.add('hidden');
        openedView.classList.remove('hidden');
    }
}

function closeLetter() {
    const closedView = document.getElementById('letter-closed');
    const openedView = document.getElementById('letter-opened');

    if (closedView && openedView) {
        openedView.classList.add('hidden');
        closedView.classList.remove('hidden');
    }
function switchPage(targetPageId) {
    // 1. Ambil semua halaman yang memiliki class 'page-content'
    const pages = document.querySelectorAll('.page-content');

    pages.forEach(page => {
        if (page.id === targetPageId) {
            // 2. Tampilkan halaman target secara instan strukturnya dulu
            page.classList.remove('hidden');
            
            // 3. Berikan jeda super mikro (10ms) agar efek transisi opacity berjalan mulus
            setTimeout(() => {
                page.classList.remove('opacity-0');
                page.classList.add('opacity-100');
            }, 10);
        } else {
            // 4. Sembunyikan halaman lain dengan memudarkannya terlebih dahulu
            page.classList.remove('opacity-100');
            page.classList.add('opacity-0');
            
            // 5. Setelah animasi pudar selesai (500ms), baru berikan class hidden
            setTimeout(() => {
                page.classList.add('hidden');
            }, 500); // durasi ini harus sama dengan duration-500 di HTML
        }
    });
}

// Contoh cara memanggil fungsinya saat menu diklik:
// document.getElementById('menu-gallery').addEventListener('click', () => switchPage('page-gallery'));
}