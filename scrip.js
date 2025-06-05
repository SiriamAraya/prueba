/* const firebaseConfig = {
  apiKey: "AIzaSyBMbS03YXelxtImddYi954A2CIT_IRlnUE",
  authDomain: "programa-27166.firebaseapp.com",
  databaseURL: "https://programa-27166-default-rtdb.firebaseio.com",
  projectId: "programa-27166",
  storageBucket: "programa-27166.firebasestorage.app",
  messagingSenderId: "672184644976",
  appId: "1:672184644976:web:f4eb4b9ab4e49cc4138bb5",
  measurementId: "G-5ZG0TRNC2E"
};

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const formulario = document.getElementById('formulario');
    const mensaje = document.getElementById('mensaje');
    const tablaUsuarios = document.getElementById('tablaUsuarios').querySelector('tbody');

    // Guardar usuario en Firestore
    formulario.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value.trim();
      const correo = document.getElementById('correo').value.trim();

      if (!nombre || !correo) {
        mensaje.textContent = "Por favor, rellena ambos campos.";
        return;
      }

      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          nombre,
          correo,
          creado: new Date()
        });
        mensaje.textContent = "✅ Usuario guardado con ID: " + docRef.id;
        formulario.reset();
      } catch (error) {
        mensaje.textContent = "❌ Error al guardar: " + error.message;
      }
    });

    // Mostrar usuarios en tiempo real
    onSnapshot(collection(db, "usuarios"), (snapshot) => {
      tablaUsuarios.innerHTML = ""; // Limpiar tabla
      snapshot.forEach((doc) => {
        const usuario = doc.data();
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${usuario.nombre}</td>
          <td>${usuario.correo}</td>
        `;
        tablaUsuarios.appendChild(fila);
      });
    }); */