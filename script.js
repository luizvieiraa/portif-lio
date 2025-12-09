const tabs = Array.from(document.querySelectorAll('.tab'));
    const panels = Array.from(document.querySelectorAll('main > section'));

    function showPanel(index){
      tabs.forEach((t,i)=>{
        const selected = i===index;
        t.setAttribute('aria-selected', selected);
        panels[i].hidden = !selected;
      });
    }

    tabs.forEach((t, i)=>{
      t.addEventListener('click', ()=> showPanel(i));
      t.addEventListener('keydown', (e)=>{
        if(e.key === 'ArrowRight') showPanel((i+1)%tabs.length);
        if(e.key === 'ArrowLeft') showPanel((i-1+tabs.length)%tabs.length);
      });
    });


    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    function showToast(text){
      toast.textContent = text;
      toast.style.display = 'block';
      setTimeout(()=> toast.style.display = 'none', 5000);
    }

    form.addEventListener('submit', (e)=>{
      e.preventDefault();

      if(!form.checkValidity()){
      
        form.reportValidity();
        return;
      }

      const data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        message: form.message.value.trim()
      };

      console.log('Dados do formulário:', data);
      showToast('Mensagem enviada! Obrigado.');
      form.reset();
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    showPanel(0);