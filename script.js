/* ==========================================================================
   LOOPZ FRONTEND LOGIC
   Este archivo manejará el algoritmo del Feed.
   ========================================================================== */

console.log("Sistema Loopz inicializado. Esperando conexión al backend...");
/* ==========================================================================
   AUTENTIFICACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica del Error de Validación ("Shake") ---
    const joinBtn = document.getElementById('join-now-btn');
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');

    joinBtn.addEventListener('click', () => {
        // Verifica si los campos de la derecha están vacíos
        if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
            // Añade la clase que hace temblar el botón central
            joinBtn.classList.add('error-shake');
            
            // También hacemos temblar los inputs vacíos a la derecha para guiar el ojo del usuario
            if(usernameInput.value.trim() === '') usernameInput.classList.add('error-shake');
            if(passwordInput.value.trim() === '') passwordInput.classList.add('error-shake');

            // Quita la clase después de 400ms para que pueda volver a reproducirse si hace click otra vez
            setTimeout(() => {
                joinBtn.classList.remove('error-shake');
                usernameInput.classList.remove('error-shake');
                passwordInput.classList.remove('error-shake');
            }, 400);
        } else {
            // Aquí iría el código futuro para conectar con Pockethost e iniciar sesión
            alert('¡Datos ingresados! Preparando backend...');
        }
    });

    // --- 2. Lógica del Selector de Idioma ---
    const langSelector = document.getElementById('lang-selector');
    const langDropdown = document.getElementById('lang-dropdown');
    const currentLangText = document.getElementById('current-lang');

    // Diccionario de traducciones
    const translations = {
        es: {
            flagText: "🇪🇸 Español",
            centerTitle: "¡Crea tu cuenta y haz cosas increíbles!",
            rightTitle: "Es tan fácil cómo ingresar estos datos.",
            joinBtn: "Únete ahora",
            userPlaceholder: "Nombre de usuario, teléfono o correo",
            passPlaceholder: "Contraseña",
            forgot: "¿Olvidaste tu contraseña?"
        },
        en: {
            flagText: "🇺🇸 English",
            centerTitle: "Create your account and do cool things!",
            rightTitle: "It's as easy as entering this data.",
            joinBtn: "Join Now",
            userPlaceholder: "Username, phone or email",
            passPlaceholder: "Password",
            forgot: "Forgot your password?"
        }
    };

    // Alternar menú de idiomas
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
    });

    // Cerrar menú si clickeas fuera
    window.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });

    // Cambiar idioma
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            const t = translations[lang];

            // Actualizar textos en la pantalla
            currentLangText.textContent = t.flagText;
            document.getElementById('center-title').textContent = t.centerTitle;
            document.getElementById('right-title').textContent = t.rightTitle;
            joinBtn.textContent = t.joinBtn;
            usernameInput.placeholder = t.userPlaceholder;
            passwordInput.placeholder = t.passPlaceholder;
            document.getElementById('forgot-link').textContent = t.forgot;
        });
    });
});
