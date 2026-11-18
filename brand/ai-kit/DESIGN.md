---
version: alpha
name: CAMPS.ES
description: "CAMPS.ES — маркетплейс спортивных баз: команды находят базу по параметрам и бронируют сборы онлайн, базы публикуют информацию о себе и получают заявки."
colors:
  paper: "#F7F5EF"
  paper-deep: "#EFECE2"
  white: "#FFFFFF"
  ink: "#0D1117"
  ink-soft: "#2A313C"
  mute: "#667085"
  line: "#E4E0D3"
  blue: "#2347FF"
  blue-dark: "#1630C8"
  tint: "#E8ECFF"
  lime: "#D4FF00"
  coral: "#FF5A36"
  background: "{colors.paper}"
  surface: "{colors.white}"
  text: "{colors.ink}"
  accent: "{colors.blue}"
typography:
  display:
    fontFamily: Oswald
    fontWeight: 700
    textTransform: uppercase
    lineHeight: 0.88
  label:
    fontFamily: Unbounded
    fontWeight: 500
    fontSize: 11px
    textTransform: uppercase
    letterSpacing: 0.08em
  body:
    fontFamily: "Golos Text"
    fontWeight: 400
    fontSize: 16px
    lineHeight: 1.55
rounded:
  card: 22px
  field: 14px
  pill: 9999px
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: 16px 30px
    fontWeight: 700
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    border: 2px solid ink
    rounded: "{rounded.pill}"
  card:
    backgroundColor: "{colors.white}"
    border: 1px solid line
    rounded: "{rounded.card}"
  sticker:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    fontFamily: Unbounded
    fontWeight: 800
    transform: rotate(-4deg)
---

## Overview

CAMPS.ES выглядит спортивно и дерзко, но светло: тёплая бумага вместо чёрного фона, почти чёрные огромные заголовки Oswald, электрик-синий для действий и лаймовый «маркер» как фирменная вспышка. Смелость держится на масштабе типографики, диагоналях и фотографиях, а не на тёмных заливках.

Голос и правила логотипа — в BRAND.md, файлы логотипа — в `logo/`.

## Colors

- **paper** `#F7F5EF` — основной фон страниц
- **white** `#FFFFFF` — карточки, поля, поверхности
- **paper-deep** `#EFECE2` — подвал, спокойные панели
- **ink** `#0D1117` — текст и заголовки
- **ink-soft** `#2A313C` — второстепенный текст
- **mute** `#667085` — подписи, подсказки
- **blue** `#2347FF` — кнопки, ссылки, действие (hover — blue-dark `#1630C8`, плашка — tint `#E8ECFF`)
- **lime** `#D4FF00` — маркер за словом, «.ES» в логотипе, стикеры. Только точечно
- **coral** `#FF5A36` — редкая вспышка: бейдж «Хит», сердечко при наведении. Не для кнопок

Пропорции: 60% бумага/белый, 25% ink, 10% blue, 4% lime, 1% coral.
Лайм никогда не используется как цвет текста на светлом (контраст 1.06:1) — только как фон под тёмным текстом.

## Typography

Все три шрифта бесплатные (SIL OFL, Google Fonts) — их можно скачать и ставить везде.

- **Display — Oswald 700**, ЗАГЛАВНЫЕ, межстрочный 0.84–0.9. Заголовки: hero 76–168 px, H2 46–92 px, H3 30 px.
- **Label — Unbounded 500–800**, 11–12 px, заглавные, трекинг +0.08em. Метки разделов, стикеры.
- **Body — Golos Text 400/600/700**, 16 px / 1.55. Всё остальное, включая кнопки (700).
- Запасной вариант, если шрифты недоступны: Oswald → Arial Narrow/Impact, Golos Text → Arial. Не подставлять Inter и системные шрифты в макетах бренда.

## Layout

- Контейнер 1320 px, поля 32 px (16 px на телефоне).
- Радиусы: карточки 22 px, поля ввода 14 px, кнопки и чипы — полная «пилюля».
- Диагональные срезы секций (clip-path) и наклонные элементы (-4° стикеры, -8°/-12° скос маркера).
- Кнопки: пилюля, padding 16×30, синий фон, белый текст, при наведении подъём на 3 px и синяя тень.

## Do's and Don'ts

- Do: светлый тёплый фон, тёмный текст, огромные заголовки.
- Do: синий — для кнопок и ссылок; лайм — маркер за одним словом в заголовке.
- Do: реальные фотографии спорта в естественных цветах.
- Do: цена за человека в сутки и условия отмены — сразу на карточке.
- Don't: не заливай страницы целиком лаймом или коралловым; не ставь лайм-текст на светлое.
- Don't: не пиши белым по лайму; белый по коралловому — только крупно (контраст 3.1:1).
- Don't: не придумывай цифры, клиентов и отзывы вне помеченных демо-данных.
- Don't: не растягивай, не перекрашивай и не пересобирай логотип.
