var readBackdrop=document.querySelector(".read-backdrop"),readMoreModal=document.getElementById("read"),readMoreButton=document.querySelector(".read-more-btn"),readMoreCloseButton=document.querySelector(".read-more-close-btn"),openReadMoreModal=function(){readBackdrop.classList.remove("is-hidden"),readMoreModal.classList.remove("is-hidden"),document.body.classList.add("modal-open")},closeReadMoreModal=function(){readBackdrop.classList.add("is-hidden"),readMoreModal.classList.add("is-hidden"),document.body.classList.remove("modal-open")};readBackdrop.addEventListener("click",(function(e){e.target===readBackdrop&&closeReadMoreModal()})),readMoreButton.addEventListener("click",openReadMoreModal),readMoreCloseButton.addEventListener("click",closeReadMoreModal);
//# sourceMappingURL=index.ba41d907.js.map
