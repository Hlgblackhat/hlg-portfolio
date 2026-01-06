# hlgcodes Portfolio 🚀

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)

Portafolio profesional y sitio web de servicios digitales para **hlgcodes**. Diseñado para mostrar habilidades de desarrollo Full Stack, ofrecer servicios de desarrollo web y menús digitales, y presentar certificaciones profesionales.

## 🌟 Características

*   **Diseño Premium**: Interfaz moderna inspirada en la estética Apple, con modo oscuro profundo y animaciones fluidas.
*   **Bento Grid Layout**: Sección "Sobre Mí" organizada en una cuadrícula dinámica y responsiva.
*   **Servicios Modulares**: Páginas de aterrizaje dedicadas para:
    *   Desarrollo Web Personalizado (`/services/custom-dev`)
    *   Sitios WordPress (`/services/wordpress`)
    *   Menús Digitales QR (SaaS) (`/services/qr-menus`)
*   **Certificaciones Interactivas**: Integración con Credly para validación de insignias (AWS, GitHub).
*   **Arquitectura Escalable**: Construido sobre Next.js App Router y optimizado para producción.
*   **Docker Ready**: Configuración lista para desplegar en cualquier contenedor (Dokploy, Portainer, etc.) con soporte `standalone`.

## 🛠️ Stack Tecnológico

*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
*   **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
*   **Iconos**: [Lucide React](https://lucide.dev/)
*   **Despliegue**: Docker (Multi-stage build)

## 🚀 Instalación y Uso Local

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Hlgblackhat/hlg-portfolio.git
    cd hlg-portfolio
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Correr el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🐳 Despliegue con Docker (Dokploy)

Este proyecto incluye un `Dockerfile` optimizado para producción.

1.  Asegúrate de tener un servidor con Docker o Dokploy.
2.  Configura el despliegue apuntando a este repositorio.
3.  Usa el `Dockerfile` presente en la raíz.
4.  Puerto del contenedor: `3000`.

```bash
# Construir manualmente
docker build -t hlg-portfolio .

# Correr contenedor
docker run -p 3000:3000 hlg-portfolio
```

## 📄 Licencia

Este proyecto es propiedad de **Haider Lopez (hlgcodes)**. Todos los derechos reservados.

---
Hecho con 💜 por [hlgcodes](https://hlg.codes).
