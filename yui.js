
const surahs = [
    ["الفاتحة", "lfatiha.html"],
    ["البقرة", "albaqara.html"],
    ["آل عمران", "alimran.html"],
    ["النساء", "annisa.html"],
    ["المائدة", "almaida.html"],
    ["الأنعام", "alanam.html"],
    ["الأعراف", "alaraf.html"],
    ["الأنفال", "alanfal.html"],
    ["التوبة", "altawba.html"],
    ["يونس", "yunus.html"],
    ["هود", "hud.html"],
    ["يوسف", "yusuf.html"],
    ["الرعد", "arrad.html"],
    ["إبراهيم", "ibrahim.html"],
    ["الحجر", "alhijr.html"],
    ["النحل", "annahl.html"],
    ["الإسراء", "alisra.html"],
    ["الكهف", "alkahf.html"],
    ["مريم", "maryam.html"],
    ["طه", "ta-ha.html"],
    ["الأنبياء", "alanbiya.html"],
    ["الحج", "alhajj.html"],
    ["المؤمنون", "almuminun.html"],
    ["النور", "annur.html"],
    ["الفرقان", "alfurqan.html"],
    ["الشعراء", "ashshuara.html"],
    ["النمل", "annaml.html"],
    ["القصص", "alqasas.html"],
    ["العنكبوت", "alankabut.html"],
    ["الروم", "arrum.html"],
    ["لقمان", "luqman.html"],
    ["السجدة", "assajda.html"],
    ["الأحزاب", "alahzab.html"],
    ["سبأ", "saba.html"],
    ["فاطر", "fatir.html"],
    ["يس", "yasin.html"],
    ["الصافات", "assaffat.html"],
    ["ص", "sad.html"],
    ["الزمر", "azzumar.html"],
    ["غافر", "ghafir.html"],
    ["فصلت", "fussilat.html"],
    ["الشورى", "ashshura.html"],
    ["الزخرف", "azzukhruf.html"],
    ["الدخان", "addukhan.html"],
    ["الجاثية", "aljathiya.html"],
    ["الأحقاف", "alahqaf.html"],
    ["محمد", "muhammad.html"],
    ["الفتح", "alfath.html"],
    ["الحجرات", "alhujurat.html"],
    ["ق", "qaf.html"],
    ["الذاريات", "adhdhariyat.html"],
    ["الطور", "attur.html"],
    ["النجم", "annajm.html"],
    ["القمر", "alqamar.html"],
    ["الرحمن", "arrahman.html"],
    ["الواقعة", "alwaqia.html"],
    ["الحديد", "alhadid.html"],
    ["المجادلة", "almujadila.html"],
    ["الحشر", "alhashr.html"],
    ["الممتحنة", "almumtahana.html"],
    ["الصف", "assaff.html"],
    ["الجمعة", "aljumuah.html"],
    ["المنافقون", "almunafiqun.html"],
    ["التغابن", "attaghabun.html"],
    ["الطلاق", "attalaq.html"],
    ["التحريم", "attahrim.html"],
    ["الملك", "almulk.html"],
    ["القلم", "alqalam.html"],
    ["الحاقة", "alhaqqa.html"],
    ["المعارج", "almaarij.html"],
    ["نوح", "nuh.html"],
    ["الجن", "aljinn.html"],
    ["المزمل", "almuzzammil.html"],
    ["المدثر", "almuddaththir.html"],
    ["القيامة", "alqiyama.html"],
    ["الإنسان", "alinsan.html"],
    ["المرسلات", "almursalat.html"],
    ["النبأ", "annaba.html"],
    ["النازعات", "annaziat.html"],
    ["عبس", "abasa.html"],
    ["التكوير", "attakwir.html"],
    ["الانفطار", "alinfitar.html"],
    ["المطففين", "almutaffifin.html"],
    ["الانشقاق", "alinshiqaq.html"],
    ["البروج", "alburuj.html"],
    ["الطارق", "attariq.html"],
    ["الأعلى", "alala.html"],
    ["الغاشية", "alghashiya.html"],
    ["الفجر", "alfajr.html"],
    ["البلد", "albalad.html"],
    ["الشمس", "ashshams.html"],
    ["الليل", "allayl.html"],
    ["الضحى", "adduha.html"],
    ["الشرح", "ashsharh.html"],
    ["التين", "attin.html"],
    ["العلق", "alaq.html"],
    ["القدر", "alqadr.html"],
    ["البينة", "albayyina.html"],
    ["الزلزلة", "azzalzala.html"],
    ["العاديات", "aladiyat.html"],
    ["القارعة", "alqaria.html"],
    ["التكاثر", "attakathur.html"],
    ["العصر", "alasr.html"],
    ["الهمزة", "alhumaza.html"],
    ["الفيل", "alfil.html"],
    ["قريش", "quraysh.html"],
    ["الماعون", "almaun.html"],
    ["الكوثر", "alkawthar.html"],
    ["الكافرون", "alkafirun.html"],
    ["النصر", "annasr.html"],
    ["المسد", "almasad.html"],
    ["الإخلاص", "alikhlas.html"],
    ["الفلق", "alfalaq.html"],
    ["الناس", "annas.html"]
];

// عناصر البحث
const input = document.getElementById("quranSearch");
const button = document.getElementById("searchBtn");
const results = document.getElementById("results");

// توحيد الحروف لتسهيل البحث
function normalize(text) {
    return text
        .replace(/[أإآٱ]/g, "ا")
        .replace(/ة/g, "ه")
        .replace(/ى/g, "ي")
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .replace(/سورة/g, "")
        .trim();
}

// إظهار الاقتراحات
function showResults() {
    const text = normalize(input.value);

    results.innerHTML = "";

    if (text === "") {
        return;
    }

    const found = surahs.filter(surah =>
        normalize(surah[0]).includes(text)
    );

    if (found.length === 0) {
        results.innerHTML =
            '<div class="no-result">لا توجد نتائج</div>';
        return;
    }

    found.forEach(surah => {
        const item = document.createElement("button");

        item.className = "search-result";
        item.textContent = "۞ سورة " + surah[0];

        item.addEventListener("click", function () {
            window.location.href = surah[1];
        });

        results.appendChild(item);
    });
}

// البحث المباشر
function searchSurah() {
    const text = normalize(input.value);

    if (text === "") {
        results.innerHTML =
            '<div class="no-result">اكتب اسم السورة أولاً</div>';
        return;
    }

    const found = surahs.filter(surah =>
        normalize(surah[0]).includes(text)
    );

    if (found.length > 0) {
        // إذا كان الاسم مطابقا تماما نعتمد عليه
        const exact = found.find(surah =>
            normalize(surah[0]) === text
        );

        window.location.href =
            (exact || found[0])[1];
    } else {
        results.innerHTML =
            '<div class="no-result">السورة غير موجودة</div>';
    }
}

// اقتراحات أثناء الكتابة
input.addEventListener("input", showResults);

// الضغط على زر البحث
button.addEventListener("click", searchSurah);

// الضغط على Enter
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchSurah();
    }
});

// قائمة السور القديمة
const buttonc = document.getElementById("myButton");
const butona = document.getElementById("myDiv");

buttonc.addEventListener("click", function() {
    butona.style.display = "block";
});

const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function() {
    butona.style.display = "none";
});
const freeDiv = document.querySelector(".free");

input.addEventListener("input", function () {
    freeDiv.classList.toggle("searched", input.value.trim().length > 0);
});