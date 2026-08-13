// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// HEADER AO ROLAR
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 9, 13, 0.94)";
    } else {
        header.style.background = "rgba(8, 9, 13, 0.78)";
    }

});


// =========================
// TABS DO EDITOR
// =========================

const tabs = document.querySelectorAll(".tab");

const codeExamples = {
    HTML: `
<span class="tag">&lt;h1&gt;</span>
    Hello, World!
<span class="tag">&lt;/h1&gt;</span>

<span class="tag">&lt;p&gt;</span>
    Meu primeiro site.
<span class="tag">&lt;/p&gt;</span>
`,

    CSS: `
<span class="tag">body</span> {
    background: #08090d;
    color: white;
}

<span class="tag">h1</span> {
    font-size: 40px;
}
`,

    JS: `
<span class="tag">const</span> mensagem =
    "Hello, World!";

<span class="tag">console</span>.log(
    mensagem
);
`
};

const codeArea = document.querySelector(".code-area pre code");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const language = tab.textContent.trim();

        if (codeExamples[language]) {
            codeArea.innerHTML = codeExamples[language];
        }

    });

});


// =========================
// ANIMAÇÃO DE ENTRADA
// =========================

const animatedElements = document.querySelectorAll(
    ".section, .card, .download-box, .final-cta"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================
// DOWNLOAD APK
// =========================

const downloadButtons = document.querySelectorAll(
    'a[href="SimpleInterpreter.apk"]'
);

downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log(
            "Download do Simple Interpreter iniciado."
        );

    });

});


// =========================
// ANO AUTOMÁTICO
// =========================

const footerText = document.querySelector(".footer-bottom span");

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Simple Interpreter`;

}


// =========================
// EFEITO DO MOCKUP
// =========================

const editor = document.querySelector(".editor-preview");

if (editor) {

    document.addEventListener("mousemove", event => {

        const x =
            (window.innerWidth / 2 - event.clientX) / 80;

        const y =
            (window.innerHeight / 2 - event.clientY) / 80;

        if (window.innerWidth > 850) {

            editor.style.transform =
                `rotateY(${x}deg) rotateX(${y}deg)`;

        }

    });

}