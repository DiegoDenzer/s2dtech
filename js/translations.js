import translations from './translations.json';

export function setLanguage(lang) {
    console.log(`Changing language to: ${lang}`);
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
    } else {
        console.warn(`Translation missing for key: ${key} in language: ${lang}`);
    }
    });
}

document.querySelectorAll(".language-flag").forEach(flag => {
    flag.addEventListener("click", () => {
        const lang = flag.getAttribute("data-lang");
        setLanguage(lang);
    });
});
