
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id=a.getAttribute('href').slice(1);
      const el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });
  // modal
  const m=document.getElementById('modal');
  document.querySelectorAll('[data-modal-open]').forEach(b=> b.addEventListener('click', ()=>{ m.classList.add('open'); document.body.style.overflow='hidden'; }));
  document.querySelectorAll('[data-modal-close]').forEach(b=> b.addEventListener('click', ()=>{ m.classList.remove('open'); document.body.style.overflow='auto'; }));
  m.addEventListener('click', e=>{ if(e.target===m) { m.classList.remove('open'); document.body.style.overflow='auto'; } });
  // form
  const form=document.getElementById('leadForm'); const status=document.getElementById('leadStatus');
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const d=Object.fromEntries(new FormData(form).entries());
    const to=window.LEADS_EMAIL||'you@example.com';
    const subj=encodeURIComponent('Запрос презентации — ' + (d.name||''));
    const body=encodeURIComponent(`Имя: ${d.name}\nТелефон: ${d.phone}\nEmail: ${d.email}`);
    location.href=`mailto:${to}?subject=${subj}&body=${body}`;
    status.textContent='Открылся почтовый клиент для отправки.';
  });
});
window.LEADS_EMAIL='you@example.com';
