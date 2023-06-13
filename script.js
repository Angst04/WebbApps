let tg = window.Telegram.WebApp;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


tg.MainButton.show()
tg.MainButton.text = "Отправить"; 
tg.MainButton.textColor = "#ffffff"; 
tg.MainButton.color = "#4e4e4e"; 


let theme = document.getElementById('theme');
if (prefersDarkMode) {
   theme.href = 'dark-mode.css'
} else {
   theme.href = 'light-mode.css'
};


function outputUpdate(vol) {
   var output = document.querySelector('#volume');
   output.value = vol;

   if (vol < 45) {
      output.style.left = vol - 35 + 'px';
   };
   if (vol > 45) {
      output.style.left = vol - 17 + 'px';
   }
};


Telegram.WebApp.onEvent('mainButtonClicked', function() {
   let age = document.getElementById("fader").value;

   tg.sendData(age); 
   tg.close();
});
