const nav=document.querySelector(".nav");const toggle=document.querySelector(".nav-toggle");const links=document.querySelectorAll(".nav-links a");toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});links.forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));
// Footer year
document.getElementById("year").textContent=new Date().getFullYear();
// Simple mailto submit for the demo site
const form=document.getElementById("catering-form");form.addEventListener("submit",e=>{e.preventDefault();const name=form.name.value.trim();const email=form.email.value.trim();const phone=form.phone.value.trim();const message=form.message.value.trim();const subject=`Catering inquiry from ${name}`;const body=`Name: ${name}
Email: ${email}
Phone: ${phone}

${message}`;window.location.href=`mailto:hello@lomitobonito.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;});
