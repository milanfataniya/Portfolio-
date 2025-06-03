function onScroll() {
            document.querySelectorAll("section:not(.hero)").forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
                    section.classList.add("visible");
                }
            });

            document.querySelectorAll(".card").forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    card.classList.add("visible");
                }
            });

            // Fade in contact form
            const form = document.getElementById("contactForm");
            const formRect = form.getBoundingClientRect();
            if (formRect.top < window.innerHeight * 0.9 && formRect.bottom > 0) {
                form.classList.add("visible");
            }
        }
        window.addEventListener("scroll", onScroll);
        window.addEventListener("load", onScroll);

       
       

     
     
    const topBtn = document.getElementById("topBtn");

    window.onscroll = () => {
        topBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
            ? "block" : "none";
    };

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


