const m=document.getElementById('menu'),n=document.getElementById('nav');m.addEventListener('click',()=>n.classList.toggle('open'));n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));document.getElementById('quoteForm').addEventListener('submit',function(e){e.preventDefault();const d=new FormData(this);const s=encodeURIComponent('Website quote request - '+(d.get('reg')||'vehicle'));const b=encodeURIComponent(`Name: ${d.get('name')}
Phone: ${d.get('phone')}
Registration: ${d.get('reg')}
Make/model: ${d.get('car')}
Postcode: ${d.get('postcode')}
Garage/mobile: ${d.get('type')}

Work required:
${d.get('message')}`);location.href=`mailto:lks.autoservice123@gmail.com?subject=${s}&body=${b}`});