
function saveDemo(type, data){
  const key = 'demo_dental_data';
  const list = JSON.parse(localStorage.getItem(key) || '[]');
  list.push({ _type:type, _ts:new Date().toISOString(), ...data });
  localStorage.setItem(key, JSON.stringify(list));
}

function handleRegister(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  if(data.password !== data.password2){
    alert('Пароли не совпадают');
    return false;
  }
  saveDemo('register', {name:data.name, email:data.email});
  window.location.href = e.target.action;
  return false;
}

function handleLogin(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  saveDemo('login', {email:data.email});
  window.location.href = e.target.action;
  return false;
}

function handleAppointment(e){
  e.preventDefault();
  const fd = new FormData(e.target);
  const data = Object.fromEntries(fd.entries());
  saveDemo('appointment', data);
  window.location.href = e.target.action;
  return false;
}
