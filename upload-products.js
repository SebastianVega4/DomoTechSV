"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("firebase/app");
var firestore_1 = require("firebase/firestore");
var environment_1 = require("./src/environments/environment");
// Configuración de Firebase
var firebaseConfig = environment_1.environment.firebase;
// Inicializar Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, firestore_1.getFirestore)(app);
// Datos de productos genéricos
var sampleProducts = [
    {
        nombre: "Kit de Inicio Domótico Inteligente",
        descripcion: "Controla tu hogar desde cualquier lugar con este kit completo de domótica.",
        caracteristicas: [
            "Control por voz con Alexa y Google Assistant",
            "App móvil para iOS y Android",
            "Compatibilidad con IFTTT"
        ],
        paquete: [
            "1 Hub central",
            "2 Enchufes inteligentes",
            "1 Sensor de puerta",
            "Manual de usuario"
        ],
        descuento: 0.15,
        precio: 129.99,
        estado: "nuevo",
        nicho: "domotica",
        categoria: "kits",
        stock: 50,
        imagenes: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
        ],
        marca: "SmartHome",
        modelo: "SH-KIT01",
        url_video_review: "https://youtube.com/watch?v=example",
        fecha_publicacion: new Date(),
        destacado: true,
        link: "kit-inicio-domotico"
    },
    {
        nombre: "Bombilla LED Inteligente RGB",
        descripcion: "Bombilla inteligente con 16 millones de colores y control por voz.",
        caracteristicas: [
            "16 millones de colores",
            "Ajuste de brillo 1-100%",
            "Programación horaria"
        ],
        paquete: [
            "1 Bombilla LED",
            "Base E27",
            "Manual rápido"
        ],
        descuento: 0.10,
        precio: 24.99,
        estado: "nuevo",
        nicho: "domotica",
        categoria: "iluminacion",
        stock: 100,
        imagenes: [
            "https://example.com/bombilla1.jpg",
            "https://example.com/bombilla2.jpg"
        ],
        marca: "LuzSmart",
        modelo: "LS-RGB01",
        fecha_publicacion: new Date(),
        destacado: true,
        link: "bombilla-led-rgb"
    },
    {
        nombre: "Smartwatch X200",
        descripcion: "Reloj inteligente con monitor de ritmo cardíaco y notificaciones.",
        caracteristicas: [
            "Pantalla AMOLED 1.4\"",
            "Resistente al agua IP68",
            "Batería de 7 días"
        ],
        paquete: [
            "1 Smartwatch",
            "Correa adicional",
            "Cargador magnético",
            "Manual de usuario"
        ],
        descuento: 0.20,
        precio: 89.99,
        estado: "nuevo",
        nicho: "tecnologia",
        categoria: "wearables",
        stock: 30,
        imagenes: [
            "https://example.com/smartwatch1.jpg",
            "https://example.com/smartwatch2.jpg"
        ],
        marca: "TechWear",
        modelo: "TW-X200",
        fecha_publicacion: new Date(),
        destacado: true,
        link: "smartwatch-x200"
    },
    {
        nombre: "Teclado Mecánico Gaming",
        descripcion: "Teclado mecánico para gaming con retroiluminación RGB.",
        caracteristicas: [
            "Switches Red mecánicos",
            "Anti-ghosting",
            "Reposa muñecas magnético"
        ],
        paquete: [
            "1 Teclado",
            "Reposa muñecas",
            "Extractor de switches"
        ],
        descuento: 0.0,
        precio: 59.99,
        estado: "segunda-mano",
        nicho: "segunda-mano",
        categoria: "perifericos",
        stock: 5,
        imagenes: [
            "https://example.com/teclado1.jpg",
            "https://example.com/teclado2.jpg"
        ],
        marca: "GameGear",
        modelo: "GG-KB02",
        fecha_publicacion: new Date(),
        destacado: false,
        link: "teclado-mecanico-gaming"
    }
];
// Función para subir productos
function uploadProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var productsCollection, _i, sampleProducts_1, product, docRef, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    productsCollection = (0, firestore_1.collection)(db, 'productos');
                    _i = 0, sampleProducts_1 = sampleProducts;
                    _a.label = 1;
                case 1:
                    if (!(_i < sampleProducts_1.length)) return [3 /*break*/, 4];
                    product = sampleProducts_1[_i];
                    return [4 /*yield*/, (0, firestore_1.addDoc)(productsCollection, product)];
                case 2:
                    docRef = _a.sent();
                    console.log("Producto a\u00F1adido con ID: ".concat(docRef.id));
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('Todos los productos han sido subidos exitosamente!');
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('Error al subir productos:', error_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
// Ejecutar la función
uploadProducts();
