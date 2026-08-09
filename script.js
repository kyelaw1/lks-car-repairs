const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d = new FormData(this);
  const subject = encodeURIComponent('Website quote request - ' + (d.get('reg') || 'vehicle'));
  const body = encodeURIComponent(
`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Registration: ${d.get('reg')}
Make/model: ${d.get('car')}
Postcode: ${d.get('postcode')}
Garage/mobile: ${d.get('type')}

Work required:
${d.get('message')}`
  );
  window.location.href = `mailto:lks.autoservice123@gmail.com?subject=${subject}&body=${body}`;
});