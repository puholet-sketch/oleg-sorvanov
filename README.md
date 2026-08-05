# Олег Сорванов — портфолио

Next.js + Tailwind + shadcn-паттерн. Сайт: https://puholet-sketch.github.io/oleg-sorvanov/

## Локально

```bash
npm install
npm run dev
```

## Сборка как на GitHub Pages

```bash
set NEXT_PUBLIC_BASE_PATH=/oleg-sorvanov
npm run build
npx --yes serve out
```

## Контент

- Тексты и ссылки: `src/lib/site.ts`
- Фото героя: `public/hero.jpg`
- Резюме: `public/cv.html`

## Деплой

Push в `main` → GitHub Actions собирает static export и публикует на Pages.
