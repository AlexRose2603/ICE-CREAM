const e=document.querySelector(".read-backdrop"),s=document.getElementById("read"),t=document.querySelector(".read-more-btn"),d=document.querySelector(".read-more-close-btn"),c=()=>{e.classList.remove("is-visible"),s.classList.remove("is-visible"),document.body.classList.remove("modal-open")};e.addEventListener("click",(function(s){s.target===e&&c()})),t.addEventListener("click",(()=>{e.classList.add("is-visible"),s.classList.add("is-visible"),document.body.classList.add("modal-open")})),d.addEventListener("click",c);
//# sourceMappingURL=index.bc04b46b.js.map