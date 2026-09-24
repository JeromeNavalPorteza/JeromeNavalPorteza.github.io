const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('show'); });
  }, {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.navlinks a').forEach(a => a.addEventListener('click', () => {
    document.querySelector('.navlinks').classList.remove('open');
  }));

  function sendMail(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:Jeyenpeev2@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  }

// ===== Enhanced portfolio interactions =====
document.addEventListener("DOMContentLoaded", () => {
  // Add a subtle active state to the navigation based on the visible section.
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".navlinks a[href^='#']")];

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.remove("active"));
      const active = links.find(link => link.getAttribute("href") === `#${entry.target.id}`);
      if (active) active.classList.add("active");
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });

  sections.forEach(section => navObserver.observe(section));

  // Close the mobile menu when clicking outside it.
  document.addEventListener("click", (event) => {
    const nav = document.querySelector(".navlinks");
    const menu = document.querySelector(".menu");
    if (!nav || !menu) return;
    if (nav.classList.contains("open") && !nav.contains(event.target) && !menu.contains(event.target)) {
      nav.classList.remove("open");
    }
  });

  // Escape key closes the mobile navigation.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.querySelector(".navlinks")?.classList.remove("open");
    }
  });
});
