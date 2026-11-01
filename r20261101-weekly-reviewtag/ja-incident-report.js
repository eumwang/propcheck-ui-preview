(()=>{
  const form=document.querySelector('[data-incident-report-form]');
  if(!form)return;
  const enhanced=form.querySelector('[data-incident-enhanced]');
  const message=form.querySelector('[data-incident-message]');
  enhanced.hidden=false;
  message.name='message';

  const companyId=new URLSearchParams(location.search).get('company');
  const company=form.elements.namedItem('name');
  const category=form.elements.namedItem('category');
  if(companyId){
    const option=[...company.options].find((item)=>item.dataset.companyId===companyId);
    if(option)company.value=option.value;
  }

  const value=(selector)=>form.querySelector(selector)?.value.trim()||'未入力';
  form.addEventListener('submit',()=>{
    const categoryLabel=category.options[category.selectedIndex]?.textContent.trim()||category.value;
    message.value=[
      `会社: ${company.value}`,
      `事例の種類: ${categoryLabel}`,
      `発生日または月: ${value('[data-incident-date]')}`,
      `本人・第三者: ${value('[data-incident-relation]')}`,
      '',
      '経緯:',
      value('[data-incident-description]'),
      '',
      '出金申請・対象利益・口座状況:',
      value('[data-incident-request]'),
      '',
      '会社からの回答:',
      value('[data-incident-response]'),
      '',
      'その後の経過:',
      value('[data-incident-aftermath]')
    ].join('\n');
  });
})();
