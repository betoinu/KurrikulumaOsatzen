// config.js
// Configuración para Supabase en producción (GitHub Pages)

// URL y clave de tu proyecto Supabase
window.SUPABASE_URL = "https://rthjrzmkozvungmiiikt.supabase.co";
window.SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aGpyem1rb3p2dW5nbWlpaWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMTEwMTQsImV4cCI6MjA3OTg4NzAxNH0.cWWo4Pi6dURT3kdg_1E4Ujn1pG5bZhZTaFy0tcWZn6g";

// URL pública de tu aplicación en GitHub Pages
// IMPORTANTE: debe coincidir exactamente con la URL configurada en Supabase → Authentication → URL Configuration
window.REDIRECT_URI = "https://betoinu.github.io/Curriculum-Data-Store/";

// Verificación en consola
console.log("Supabase URL:", window.SUPABASE_URL);
console.log("Redirect URI:", window.REDIRECT_URI);

// Si tienes variables de entorno para producción, las puedes sobreescribir aquí
if (window.ENV && window.ENV.SUPABASE_URL) {
  window.SUPABASE_URL = window.ENV.SUPABASE_URL;
  window.SUPABASE_KEY = window.ENV.SUPABASE_KEY;
  window.REDIRECT_URI = window.ENV.REDIRECT_URI;
}



