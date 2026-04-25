let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById("hamburger").classList.toggle("open", menuOpen);
  document.getElementById("mobMenu").classList.toggle("open", menuOpen);
  document.body.style.overflow = menuOpen ? "hidden" : "";
}

function closeMenu() {
  menuOpen = false;
  document.getElementById("hamburger").classList.remove("open");
  document.getElementById("mobMenu").classList.remove("open");
  document.body.style.overflow = "";
}

const secs = document.querySelectorAll("section[id]");
const nls = document.querySelectorAll(".nav-links a, .mob-nav-item");

secs.forEach((s) => {
  new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting)
          nls.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === "#" + e.target.id,
            ),
          );
      });
    },
    { threshold: 0.3 },
  ).observe(s);
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && menuOpen) closeMenu();
});

(function () {
  let startX = 0;
  const mob = document.getElementById("mobMenu");
  mob.addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  mob.addEventListener(
    "touchend",
    function (e) {
      if (e.changedTouches[0].clientX - startX > 60) closeMenu();
    },
    { passive: true },
  );
})();

const T = {
  id: {
    roles: ["Pengembang Web Full Stack", "Dukungan TI", "Musisi Kamar"],
    about_me: "tentang_saya",
    experience: "pengalaman",
    projects: "proyek",
    contact: "kontak",
    nav_status: "tersedia",
    status: "terbuka untuk bekerja",
    tag_dev: "pengembang-full-stack",
    tag_support: "dukungan-ti",
    meta_loc: "lokasi: ",
    meta_stat: "status: ",
    btn_contact: "$ hubungi_saya",
    btn_proj: "$ lihat_proyek",
    jk_name: "nama",
    jk_location: "lokasi",
    jv_region: "Kalimantan Selatan",
    jk_skills: "kemampuan",
    jv_skill1: "pengembangan web full stack",
    jv_skill2: "dukungan ti",
    jk_open_to_work: "terbuka_untuk_bekerja",
    about_bio:
      "Lulusan baru S1 Informatika Universitas Muhammadiyah Malang yang memiliki minat kuat di bidang teknologi. Merupakan pribadi yang teliti dalam mengerjakan tugas dan sangat senang dalam belajar hal-hal baru untuk pengembangan diri. Berpengalaman di beberapa organisasi kemahasiswaan sehingga memiliki kemampuan yang baik dalam berkolaborasi dengan banyak orang di lingkungan kerja.",
    exp_role1: "IT Support & Programmer (Magang)",
    exp_date1: "2 Feb 2026 — Sekarang",
    exp1_desc:
      "Melakukan instalasi, konfigurasi, dan troubleshooting perangkat keras maupun perangkat lunak kepada pengguna. Membantu mengembangkan plugin aplikasi SIMRS dan melakukan pembaruan konten website rumah sakit.",
    proj1_name: "Solusi LeetCode Bahasa Indonesia",
    proj1_desc:
      "Latihan harian di platform LeetCode untuk meningkatkan kemampuan pemrograman. Setiap baris kode diberi komentar agar penyelesaian masalah dapat mudah dipahami.",
    blog1: "Cerita di Balik Website Ini",
    blog_date1: "4 Apr 2026",
    contact_intro:
      "Tertarik berkolaborasi atau punya project menarik? Jangan ragu untuk menghubungi saya. Saya terbuka untuk freelance, penuh waktu, paruh waktu, maupun diskusi teknis.",
    contact_loc: "Banjarbaru, Kalimantan Selatan, Indonesia",
    form_name: "nama_kamu",
    form_name_ph: "masukkan nama kamu...",
    form_email: "alamat_email",
    form_email_ph: "masukkan email kamu...",
    form_msg: "pesan",
    form_msg_ph: "ceritakan tentang proyek kamu...",
    form_send: "$ kirim_pesan",
    form_sending: "$ mengirim...",
    form_success: "Pesan terkirim! Saya akan membalas secepatnya.",
    form_error: "Gagal mengirim. Silakan coba lagi.",
    footer_copyright: "Hak cipta dilindungi undang-undang.",
  },
  en: {
    roles: ["Full Stack Web Developer", "IT Support", "Bedroom Musician"],
    about_me: "about_me",
    experience: "experience",
    projects: "projects",
    contact: "contact",
    nav_status: "available",
    status: "open to work",
    tag_dev: "full-stack-dev",
    tag_support: "it-support",
    meta_loc: "location: ",
    meta_stat: "status: ",
    btn_contact: "$ get_in_touch",
    btn_proj: "$ view_projects",
    jk_name: "name",
    jk_location: "location",
    jv_region: "South Kalimantan",
    jk_skills: "skills",
    jv_skill1: "full stack web development",
    jv_skill2: "it support",
    jk_open_to_work: "open_to_work",
    about_bio:
      "A fresh graduate with a Bachelor's degree in Informatics from Universitas Muhammadiyah Malang with a strong passion for technology. A detail-oriented person who enjoys learning new things for personal growth and development. Experienced in various student organizations, which has helped build strong teamwork and collaboration skills in diverse working environments.",
    exp_role1: "IT Support & Programmer (Internship)",
    exp_date1: "2 Feb 2026 — Present",
    exp1_desc:
      "Responsible for installing, configuring, and troubleshooting of hardware and software for users. Assist in developing plugins for the SIMRS application, and managed content updates for the hospital website.",
    proj1_name: "LeetCode Solution in Bahasa Indonesia",
    proj1_desc:
      "Daily practice on the LeetCode platform to improve programming skills. Each line of code is accompanied by comments so that the problem-solving process can be easily understood.",
    blog1: "The Story Behind This Website",
    blog_date1: "4 Apr 2026",
    contact_intro:
      "Interested in collaborating or have an exciting project? Feel free to reach out. I am open to freelance, full-time, part-time, or technical discussions.",
    contact_loc: "Banjarbaru, South Kalimantan, Indonesia",
    form_name: "your_name",
    form_name_ph: "enter your name...",
    form_email: "email_address",
    form_email_ph: "enter your email...",
    form_msg: "message",
    form_msg_ph: "tell me about your project...",
    form_send: "$ send_message",
    form_sending: "$ sending...",
    form_success: "Message sent! I\'ll reply as soon as possible.",
    form_error: "Failed to send. Please try again.",
    footer_copyright: "All rights reserved.",
  },
};

let lang = "id",
  theme = "dark",
  fabOpen = false;

function applyLang(l) {
  lang = l;
  const t = T[l];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (t[k] != null) el.textContent = t[k];
  });
  const inpName = document.getElementById("inp-name");
  if (inpName) inpName.placeholder = t.form_name_ph;
  const inpEmail = document.getElementById("inp-email");
  if (inpEmail) inpEmail.placeholder = t.form_email_ph;
  const inpMsg = document.getElementById("inp-msg");
  if (inpMsg) inpMsg.placeholder = t.form_msg_ph;
  document.documentElement.lang = l;
  // swap flags
  document.getElementById("flagID").style.display =
    l === "id" ? "none" : "block";
  document.getElementById("flagUK").style.display =
    l === "en" ? "none" : "block";
}

function toggleLang() {
  applyLang(lang === "id" ? "en" : "id");
}

function applyTheme(th) {
  theme = th;
  document.documentElement.setAttribute("data-theme", th);
  document.getElementById("iconSun").style.display =
    th === "dark" ? "block" : "none";
  document.getElementById("iconMoon").style.display =
    th === "light" ? "block" : "none";
}

function toggleTheme() {
  applyTheme(theme === "dark" ? "light" : "dark");
}

function toggleFab() {
  fabOpen = !fabOpen;
  document.getElementById("fabWrap").classList.toggle("open", fabOpen);
}

document.addEventListener("click", function (e) {
  if (fabOpen && !document.getElementById("fabWrap").contains(e.target)) {
    fabOpen = false;
    document.getElementById("fabWrap").classList.remove("open");
  }
});

applyLang("id");
applyTheme("dark");

(function () {
  const el = document.getElementById("tw-text");
  if (!el) return;
  let roleIdx = 0,
    charIdx = 0,
    deleting = false,
    currentWordLang = lang;
  const typeSpeed = 70,
    deleteSpeed = 38,
    pauseType = 1800,
    pauseDelete = 400;
  function tick() {
    if (charIdx === 0 && !deleting) {
      currentWordLang = lang;
    }
    const currentRoles = T[currentWordLang].roles;
    const word = currentRoles[roleIdx % currentRoles.length];
    if (!deleting) {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        deleting = true;
        setTimeout(tick, pauseType);
        return;
      }
      setTimeout(tick, typeSpeed);
    } else {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx++;
        setTimeout(tick, pauseDelete);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }
  setTimeout(tick, 900);
})();

(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    var btn = document.getElementById("form-btn");
    var status = document.getElementById("form-status");
    var t = T[lang];

    btn.disabled = true;
    btn.textContent = t.form_sending;
    status.textContent = "";
    status.className = "form-status";

    try {
      var res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        status.textContent = t.form_success;
        status.className = "form-status success";
        form.reset();
      } else {
        var data = await res.json();
        throw new Error(data.error || "Error");
      }
    } catch (err) {
      status.textContent = t.form_error;
      status.className = "form-status error";
    } finally {
      btn.disabled = false;
      btn.textContent = t.form_send;
      setTimeout(() => {
        status.textContent = "";
        status.className = "form-status";
      }, 5000);
    }
  });
})();

(function year() {
  document.getElementById("year").textContent = new Date().getFullYear();
})();
