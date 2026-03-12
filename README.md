# Calculadora Interactiva - v2.0

Una calculadora web moderna y funcional construida con **React** y **Vite**. Cuenta con una interfaz intuitiva, animaciones visuales fluidas, manejo automático de operaciones complejas y un diseño elegante con colores pasteles en armonía.

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Uso](#instalación-y-uso)
- [Funcionalidades principales](#funcionalidades-principales)
- [Guía de Estilos](#guía-de-estilos)
- [Autor](#autor)

---

## ✨ Características

- ✅ **Operaciones aritméticas básicas**: suma, resta, multiplicación y división
- ✅ **Paréntesis**: soporte completo para operaciones con paréntesis
- ✅ **Botón % (Porcentaje)**: calcula el porcentaje del resultado actual
- ✅ **Botón DE (Delete)**: borra el último carácter sin limpiar todo el display
- ✅ **Botón C (Clear)**: limpia completamente la pantalla
- ✅ **Manejo automático de multiplicación**: `4(5*6)` se convierte automáticamente a `4*(5*6)`
- ✅ **Diseño elegante**: paleta armónica de colores pasteles
- ✅ **Interfaz responsiva**: adaptada para diferentes tamaños de pantalla
- ✅ **Animaciones suaves**: efectos hover y click fluidos
- ✅ **Validación de errores**: manejo inteligente de expresiones inválidas

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción | Versión |
|-----------|------------|----------|
| **React** | Librería para construir interfaces de usuario | ^18.0 |
| **Vite** | Herramienta de construcción y bundler moderno | ^4.0 |
| **CSS3** | Estilos visuales, animaciones y diseño responsivo | Nativo |
| **JavaScript ES6+** | Lógica de cálculo e interactividad | Moderno |

---

## 📁 Estructura del Proyecto

```
Calculator/v2_React_Vite/
├── src/
│   ├── App.jsx                 # Componente principal de React
│   ├── Calculator.jsx          # Componente de la calculadora
│   ├── App.css                 # Estilos globales
│   ├── StyleCalculador.css     # Estilos específicos de la calculadora
│   ├── index.css               # Reset de estilos
│   ├── main.jsx                # Punto de entrada de React
│   └── assets/                 # Recursos estáticos
├── index.html                  # Archivo HTML principal
├── package.json                # Configuración de dependencias
├── vite.config.js              # Configuración de Vite
├── eslint.config.js            # Configuración de linting
└── README.md                   # Este archivo
```

---

## 🚀 Instalación y Uso

### Clonar el repositorio

```bash
git clone https://github.com/AnaLauDB/Calculator.git
cd Calculator/v2_React_Vite
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:5173`

### Compilar para producción

```bash
npm run build
```

Esto genera una build optimizada en la carpeta `dist/`

### Vista previa de la build

```bash
npm run preview
```

---

## 🧮 Funcionalidades Principales

### 1. **Operaciones Básicas**
Realiza suma (+), resta (−), multiplicación (×) y división (/) entre números.

```
Ejemplo: 10 + 5 = 15
Ejemplo: 20 * 3 = 60
```

### 2. **Operaciones con Paréntesis**
La calculadora soporta paréntesis para establecer el orden de operaciones.

```
Ejemplo: 4(5*6) → se convierte a → 4*(5*6) = 120
Ejemplo: (10+5)*2 = 30
Ejemplo: ((3+2)*4) = 20
```

### 3. **Multiplicación Implícita**
Estos casos se convierten automáticamente:
- `4(5)` → `4*(5)` = 20
- `)2` → `)*2`
- `(3)(4)` → `(3)*(4)` = 12

### 4. **Números Decimales**
Usa el botón punto (.) para trabajar con decimales.

```
Ejemplo: 3.5 × 2 = 7
Ejemplo: 10.5 + 5.25 = 15.75
```

### 5. **Porcentaje (%)**
Calcula el porcentaje de la expresión actual.

```
Ejemplo: 50 % = 0.5
Ejemplo: (100+50) % = 1.5
```

### 6. **Borrar Último Carácter (DE)**
Elimina solo el último carácter sin limpiar todo.

```
Ejemplo: Si escribes "123" y presionas DE, queda "12"
```

### 7. **Limpiar Pantalla (C)**
El botón C borra todos los datos y reinicia la calculadora.

```
Ejemplo: Cualquier expresión → Presionar C → Pantalla vacía
```

---

## 🎨 Guía de Estilos

### Paleta de Colores (Armonía v2.0)

| Elemento | Color | Código | Descripción |
|----------|-------|--------|-------------|
| **Fondo Principal** | Amarillo Pastel | `#fffad8` | Fondo cálido y acogedor |
| **Botones Números** | Amarillo Claro | `#ece68d` | Números primarios |
| **Botones Operadores** | Menta Pastel | `#c7e8df` | Operaciones aritméticas (C, DE, ), /, *, -) |
| **Botón Suma (+)** | Naranja Pastel | `#f99f6d` | Suma destacada |
| **Botón Igual (=)** | Rosa Pastel | `#fd4f99` | Resultado principal |
| **Título** | Rosa Pastel | `#fd4f99` | Identidad visual |
| **Display** | Blanco | `#ffffff` | Contraste para lectura |

### Diseño Visual

- **Bordes**: 2px con color suave que combina con cada sección
- **Sombras**: Sombras suaves con opacidad combinada con la paleta
- **Esquinas**: Border-radius de 10-16px para estilo moderno
- **Animaciones**: 
  - Hover: Levantamiento y cambio de sombra
  - Click: Escala 0.95 para feedback visual
  - Transiciones: 0.3s ease para fluidez

---

## 📝 Funciones React Principales

### `appendToDisplay(value)`
Agrega un valor (número u operador) a la pantalla

```javascript
appendToDisplay('5');   // Muestra "5" en la pantalla
appendToDisplay('+');   // Agrega "+" a la pantalla
```

### `clearDisplay()`
Limpia completamente la pantalla y reinicia la calculadora

```javascript
clearDisplay();  // Pantalla queda vacía
```

### `deleteLastChar()`
Elimina solo el último carácter de la pantalla

```javascript
deleteLastChar();  // Si había "123", ahora muestra "12"
```

### `calculatePercentage()`
Calcula el porcentaje del resultado actual

```javascript
calculatePercentage();  // 50 → 0.5
```

### `calculate()`
Realiza el cálculo de la expresión matemática
- Convierte multiplicaciones implícitas
- Evalúa la expresión
- Muestra el resultado o "Error" si hay problemas

```javascript
calculate();  // Calcula la expresión actual
```

---

## 🐛 Manejo de Errores

Si escribes una expresión inválida, la calculadora mostrará `Error`:

```
Ejemplo: 5 + + 8 → Error
Ejemplo: (5* → Error
Ejemplo: 10 / 0 → Infinity (límite de JavaScript)
```

---

## 💡 Tips de Uso

1. **Operaciones rápidas**: Puedes seguir escribiendo sin presionar C entre operaciones
2. **Correcciones**: Usa DE para borrar solo el último dígito o carácter
3. **Paréntesis anidados**: Puedes usar múltiples niveles: `((5+3)*2)` = 16
4. **Decimales**: Asegúrate de escribir bien: `3.14`, no `3..14`
5. **Porcentaje**: Calcula porcentajes rápidamente: `100 %` = 1
6. **Multiplicación implícita**: No necesitas escribir `*` siempre: `5(3)` = 15 automáticamente

---

## 🔮 Mejoras Futuras

- [ ] Historial de operaciones
- [ ] Tema oscuro
- [ ] Operaciones adicionales (potencia, raíz cuadrada, logaritmo)
- [ ] Teclado físico compatible (Enter para = y Backspace para DE)
- [ ] Almacenamiento de historial en localStorage
- [ ] Notación científica
- [ ] Modo básico y avanzado
- [ ] Internacionalización (i18n)

---

## 👨‍💻 Autor

**Ana Lau** - [@AnaLauDB](https://github.com/AnaLauDB)

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo libremente en tus propios proyectos.

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras bugs o tienes ideas de mejora:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/MejoraNueva`)
3. Haz commit (`git commit -m 'feat: agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/MejoraNueva`)
5. Abre un Pull Request

---

**Última actualización**: 12 de marzo de 2026  
**Versión**: 2.0.0 (React + Vite)  
**Rama actual**: v2_Calculator
