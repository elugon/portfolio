# Implementación de Scrollbar Personalizado con Tailwind CSS

Guía paso a paso para implementar un scrollbar personalizado usando `tailwind-scrollbar` v4.

## 1. Instalación

```bash
npm install tailwind-scrollbar
```

## 2. Configuración de Tailwind

Agregar el plugin a `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  plugins: [
    require('tailwind-scrollbar'),
  ],
  // ... resto de configuración
};
```

## 3. Implementación en Layout/HTML

### En el elemento body (o contenedor principal):

```html
<body class="scrollbar scrollbar-track-slate-800 scrollbar-thumb-amber-500 scrollbar-hover:scrollbar-thumb-amber-400 scrollbar-w-3">
```

### CSS adicional requerido:

```css
/* Evitar doble scrollbar */
html {
  overflow-y: hidden;
}

body {
  overflow-y: scroll;
  height: 100vh;
}
```

## 4. Clases Disponibles

### Básicas:
- `scrollbar` - Habilita el scrollbar personalizado
- `scrollbar-thin` - Scrollbar delgado
- `scrollbar-w-{size}` - Ancho personalizado (1, 2, 3, 4, etc.)

### Colores:
- `scrollbar-track-{color}` - Color del track
- `scrollbar-thumb-{color}` - Color del thumb

### Estados (v4 syntax):
- `scrollbar-hover:scrollbar-thumb-{color}` - Color en hover
- `scrollbar-active:scrollbar-thumb-{color}` - Color en active

## 5. Problemas Comunes y Soluciones

### ❌ Scrollbar no visible
**Causa**: El contenido no es suficientemente largo o el navegador oculta scrollbars.
**Solución**: Agregar `overflow-y: scroll` al elemento contenedor.

### ❌ Doble scrollbar
**Causa**: Tanto `html` como `body` tienen scroll habilitado.
**Solución**: 
- `html { overflow-y: hidden; }`
- `body { overflow-y: scroll; }`

### ❌ Clases no se aplican
**Causa**: Plugin no configurado correctamente.
**Solución**: Verificar que `require('tailwind-scrollbar')` esté en `plugins` array.

### ❌ Hover no funciona
**Causa**: Usando sintaxis v3 (`hover:scrollbar-thumb-{color}`).
**Solución**: Usar sintaxis v4 (`scrollbar-hover:scrollbar-thumb-{color}`).

## 6. Ejemplo Completo

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    html {
      overflow-y: hidden;
    }
    body {
      overflow-y: scroll;
      height: 100vh;
    }
  </style>
</head>
<body class="scrollbar scrollbar-track-slate-800 scrollbar-thumb-amber-500 scrollbar-hover:scrollbar-thumb-amber-400 scrollbar-w-3">
  <!-- Contenido de la página -->
</body>
</html>
```

## 7. Colores Recomendados

Para tema oscuro:
- Track: `slate-800`, `gray-800`, `neutral-800`
- Thumb: `amber-500`, `blue-500`, `emerald-500`
- Hover: `amber-400`, `blue-400`, `emerald-400`

Para tema claro:
- Track: `gray-200`, `slate-200`
- Thumb: `gray-400`, `slate-400`
- Hover: `gray-500`, `slate-500`

## 8. Compatibilidad

- ✅ Chrome/Edge (Webkit)
- ✅ Firefox (con `scrollbar-color` fallback)
- ✅ Safari
- ⚠️ Firefox no soporta todas las variantes de hover

---

**Nota**: Esta guía es para `tailwind-scrollbar` v4.x con Tailwind CSS v4.x. Para versiones anteriores, la sintaxis puede variar.