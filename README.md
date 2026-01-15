# Full Stack Development

## Overview

フロントエンドに Next + React、
バックエンドに Django を用いた
フルスタックWebアプリケーション。

## Tech Stack

### Frontend

- TypeScript
- Next.js
- React
- UI
  - Material UI (@mui/material)
  - @emotion/react
  - @emotion/styled
  - @mui/x-data-grid
- Data Fetching
  - SWR
- Tooling
  - Biome

### Backend

- Python
- Django
- uv
- MySQL (mysqlclient)

## Development

### Frontend Setup

```bash
npm run dev
```

### Backend Setup

```bash
uv run python manage.py runserver --settings config.settings.development
```

## Directory

```text
.
├── README.md
├── backend
│   └── config
│       └── settings
└── frontend
    ├── README.md
    ├── app
    └── public
```
