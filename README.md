# Calculadora Interactiva

Una calculadora web moderna y funcional construida con HTML, CSS y JavaScript puro. Cuenta con una interfaz intuitiva, animaciones visuales y manejo automático de operaciones complejas.

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
- ✅ **Módulo (%)**: cálculo de porcentaje
- ✅ **Manejo automático de multiplicación**: `4(5*6)` se convierte automáticamente a `4*(5*6)`
- ✅ **Interfaz colorida**: diseño moderno con colores diferenciados por función
- ✅ **Animaciones interactivas**: efecto visual al hacer click en números
- ✅ **Validación de errores**: manejo de expresiones inválidas
- ✅ **Diseño responsivo**: interfaz clara y fácil de usar
- ✅ **Botón limpiar**: resetea la pantalla al instante

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|------------|
| **HTML5** | Estructura y marcado de la aplicación |
| **CSS3** | Estilos visuales y animaciones |
| **JavaScript** | Lógica de cálculo y interactividad |

---

## 📁 Estructura del Proyecto

```
Calculator/
├── index.html          # Archivo HTML principal
├── script.js           # Lógica de JavaScript
├── style.css           # Estilos CSS
└── README.md           # Este archivo
```

### Descripción de archivos

- **index.html**: Contiene la estructura de la calculadora con 20 botones distribuidos en 4 filas y 4 columnas
- **script.js**: Implementa las funciones de cálculo con soporte para paréntesis automáticos
- **style.css**: Define el diseño visual, colores y animaciones

---

## 🚀 Instalación y Uso

### Clonar el repositorio

```bash
git clone https://github.com/AnaLauDB/Calculator.git
cd Calculator
```

### Ejecutar la aplicación

1. **Opción 1**: Abrir el archivo directamente
   - Haz doble click en `index.html` o arrastralo a tu navegador

2. **Opción 2**: Usar un servidor local (recomendado)
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Python 2
   python -m SimpleHTTPServer 8000
   ```
   Luego visita: `http://localhost:8000`

3. **Opción 3**: Usar Live Server en VS Code
   - Instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

---

## 🧮 Funcionalidades Principales

### 1. **Operaciones Básicas**
Realiza suma (+), resta (−), multiplicación (×) y división (/) entre números.

```
Ejemplo: 10 + 5 = 15
```

### 2. **Operaciones con Paréntesis**
La calculadora soporta paréntesis para establecer el orden de operaciones.

```
Ejemplo: 4(5*6) → se convierte a → 4*(5*6) = 120
Ejemplo: (10+5)*2 = 30
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
```

### 5. **Módulo/Porcentaje**
Calcula el módulo de dos números.

```
Ejemplo: 10 % 3 = 1
```

### 6. **Limpiar Pantalla**
El botón C borra todos los datos y reinicia la calculadora.

---

## 🎨 Guía de Estilos

### Paleta de Colores

| Elemento | Color | Código |
|----------|-------|--------|
| **Fondo Principal** | Beige Claro | `#ECE7D0` |
| **Números** | Gris Claro | `#e0e0e0` |
| **Operadores** (+, −, ×, /) | Rosa Pastel | `#FA7AA9` |
| **Botón Igual (=)** | Amarillo Verdoso | `#C9CD46` |
| **Botón Limpiar (C)** | Naranja | `#FF9800` |
| **Paréntesis** | Gris Claro | `#e0e0e0` |

### Animaciones

**Click en Números**: Los números se comprimen al hacer click, creando un efecto visual de presión
```css
@keyframes clickNumber {
    0% { transform: scale(1); }
    50% { transform: scale(0.95); }
    100% { transform: scale(1); }
}
```

---

## 📝 Funciones JavaScript Principales

### `appendToDisplay(value)`
Agrega un valor (número u operador) a la pantalla

```javascript
appendToDisplay('5');  // Muestra "5" en la pantalla
```

### `clearDisplay()`
Limpia la pantalla y reinicia la calculadora

```javascript
clearDisplay();  // Pantalla queda vacía
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
2. **Correcciones**: Actualmente no hay botón de borrar último dígito, usa C para empezar de nuevo
3. **Paréntesis anidados**: Puedes usar múltiples niveles: `((5+3)*2)` = 16
4. **Decimales**: Asegúrate de escribir bien: `3.14`, no `3..14`

---

## 🔮 Mejoras Futuras

- [ ] Agregar botón de retroceso (backspace)
- [ ] Historial de operaciones
- [ ] Tema oscuro
- [ ] Operaciones adicionales (potencia, raíz cuadrada, logaritmo)
- [ ] Teclado físico compatible
- [ ] Almacenamiento de historial en localStorage

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

**Última actualización**: 4 de marzo de 2026  
**Versión**: 1.0.0
