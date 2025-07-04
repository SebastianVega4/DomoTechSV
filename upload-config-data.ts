import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';
import { environment } from './src/environments/environment';

const firebaseConfig = environment.firebase;

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadConfigData() {
  try {
    // Datos para "Sobre Nosotros"
    await setDoc(doc(db, 'configuracion', 'general'), {
      nombreEmpresa: "DomoTechSV",
      mision: "Ofrecer soluciones tecnológicas innovadoras para el hogar",
      vision: "Ser líderes en domótica en El Salvador",
      telefono: "+503 1234 5678",
      email: "info@domotechsv.com",
      direccion: "San Salvador, El Salvador",
      fundacion: 2020,
      equipo: [
        { nombre: "Juan Pérez", puesto: "CEO" },
        { nombre: "María Gómez", puesto: "CTO" }
      ]
    });

    // Datos para "Logros"
    await setDoc(doc(db, 'logros', 'estadisticas'), {
      clientes: 1250,
      proyectos: 320,
      productosVendidos: 5800,
      satisfaccion: 98, // %
      reconocimientos: [
        "Mejor Startup Tecnológica 2022",
        "Innovación en Domótica 2023"
      ]
    });

    console.log('Datos de configuración subidos exitosamente!');
  } catch (error) {
    console.error('Error al subir datos:', error);
  }
}

uploadConfigData();