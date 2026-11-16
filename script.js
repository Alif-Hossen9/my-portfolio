document.addEventListener('DOMContentLoaded',()=>{
 const more=document.getElementById('extended-games');
 const button=document.getElementById('toggle-games-btn');
 const label=document.getElementById('toggle-games-text');
 const icon=document.getElementById('toggle-games-icon');
 if(button&&more){button.addEventListener('click',()=>{const opening=more.classList.contains('hidden');more.classList.toggle('hidden');button.setAttribute('aria-expanded',String(opening));if(label)label.textContent=opening?'Show Less Titles':'Show More Titles';if(icon)icon.style.transform=opening?'rotate(180deg)':'rotate(0deg)';});}
 const menuButton=document.querySelector('.mobile-menu-toggle');const nav=document.getElementById('primary-nav');
 if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuButton.setAttribute('aria-expanded',String(open));const icon=menuButton.querySelector('.material-symbols-outlined');if(icon)icon.textContent=open?'close':'menu';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menuButton.setAttribute('aria-expanded','false');const icon=menuButton.querySelector('.material-symbols-outlined');if(icon)icon.textContent='menu';}));}
});
