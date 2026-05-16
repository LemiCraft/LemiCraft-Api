# LemiCraft Api

Сайт с документацией публичного API [lemicraft.ru](https://lemicraft.ru)
Доступен по адресу: **https://lemicraft.ru/api-reference**

Построен на [Nuxt 4](https://nuxt.com) + [Scalar](https://scalar.com) - интерактивный UI генерируется из файла `public/openapi.yaml`

## Стек

- **Nuxt 4** - SSR / Node-сервер
- **Scalar** - рендер OpenAPI-спецификации
- **PM2** - управление процессом на сервере
- **GitHub Actions** - автодеплой при пуше в `main`

## Локальный запуск

```bash
pnpm install
pnpm dev
```

Откроется на `http://localhost:3002`

## Деплой

Деплой происходит автоматически при пуше в ветку `main` через GitHub Actions:

1. Сборка Nuxt (`pnpm build`)
2. Копирование `.output/` на сервер по SCP
3. Перезапуск PM2

Для работы workflow нужно добавить следующие секреты в настройках репозитория (`Settings → Secrets`):

| Секрет | Описание |
|---|---|
| `DEPLOY_HOST` | IP или домен сервера |
| `DEPLOY_USER` | SSH-пользователь |
| `DEPLOY_KEY` | Приватный SSH-ключ |
| `DEPLOY_PORT` | SSH-порт |
| `DEPLOY_PATH` | Путь на сервере до папки проекта |

## Обновление документации

Вся документация хранится в одном файле - `public/openapi.yaml`
После изменений достаточно сделать пуш в `main`, деплой произойдёт автоматически

## API

Полная документация с примерами запросов доступна на **https://lemicraft.ru/api-reference**

Базовый URL: `https://lemicraft.ru/api`

Большинство эндпоинтов требуют API-ключ, который игрок может сгенерировать в [настройках аккаунта](https://lemicraft.ru/settings). Ключ передаётся в заголовке:

```
Authorization: Bearer <ваш_ключ>
```

Без ключа доступны только эндпоинты раздела **Лаунчер** (лимит: 60 запросов/мин по IP)
С ключом - все эндпоинты (лимит: 300 запросов/мин)