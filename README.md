# Портфолио — Олег Сорванов

Статический сайт для GitHub Pages: личный бренд (IT + предпринимательство + яхтинг).

## Локальный просмотр

```bash
cd D:\projects\Porfolio
npx --yes serve .
```

Откройте `http://localhost:3000` (или порт из вывода команды).

## Публикация на GitHub Pages

1. Создайте репозиторий **`puholet-sketch/oleg-sorvanov`** (Public).
2. Залейте содержимое папки `Porfolio` в корень репозитория.
3. **Settings → Pages → Deploy from a branch** → ветка **`main`**, папка **`/ (root)`**.
4. Через 1–5 минут сайт будет доступен:

   **https://puholet-sketch.github.io/oleg-sorvanov/**

Файл `.nojekyll` уже в корне.

## Структура

| Файл | Назначение |
|------|------------|
| `index.html` | Главная, RU/EN |
| `cv.html` | Резюме 2026 (печать → PDF) |
| `assets/css/main.css` | Стили |
| `assets/js/main.js` | Переключатель языка |

## PDF резюме

Откройте `cv.html` → кнопка **«Сохранить как PDF»** → в диалоге печати выберите «Сохранить как PDF».

Старый файл `Oleg_Sorvanov_CV_2023_09.pdf` можно архивировать — актуальная версия в `cv.html`.
