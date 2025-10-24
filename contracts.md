# API Contracts - Lycée Ali Farasu Website

## Overview
این سند قراردادهای API بین Frontend و Backend را مشخص می‌کند.

## Mock Data Location
تمام داده‌های mock در `/app/frontend/src/mock.js` قرار دارند

## Authentication

### Admin Login
**Endpoint:** `POST /api/admin/login`
**Request:**
```json
{
  "username": "string",
  "password": "string"
}
```
**Response:**
```json
{
  "token": "jwt_token_string",
  "user": {
    "username": "string",
    "role": "admin"
  }
}
```

### Verify Token
**Endpoint:** `GET /api/admin/verify`
**Headers:** `Authorization: Bearer {token}`
**Response:**
```json
{
  "valid": true,
  "user": {
    "username": "string"
  }
}
```

## News Management

### Get All News
**Endpoint:** `GET /api/news`
**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "date": "string",
    "image": "string (URL)",
    "summary": "string"
  }
]
```

### Create News (Admin only)
**Endpoint:** `POST /api/admin/news`
**Headers:** `Authorization: Bearer {token}`
**Request:**
```json
{
  "title": "string",
  "date": "string",
  "image": "string (URL)",
  "summary": "string"
}
```

### Update News (Admin only)
**Endpoint:** `PUT /api/admin/news/:id`
**Headers:** `Authorization: Bearer {token}`
**Request:** Same as Create

### Delete News (Admin only)
**Endpoint:** `DELETE /api/admin/news/:id`
**Headers:** `Authorization: Bearer {token}`

## Achievements Management

### Get All Achievements
**Endpoint:** `GET /api/achievements`
**Response:**
```json
[
  {
    "id": "string",
    "title": "string",
    "year": "string",
    "description": "string"
  }
]
```

### Create Achievement (Admin only)
**Endpoint:** `POST /api/admin/achievements`
**Headers:** `Authorization: Bearer {token}`

### Update Achievement (Admin only)
**Endpoint:** `PUT /api/admin/achievements/:id`
**Headers:** `Authorization: Bearer {token}`

### Delete Achievement (Admin only)
**Endpoint:** `DELETE /api/admin/achievements/:id`
**Headers:** `Authorization: Bearer {token}`

## Teachers Management

### Get All Teachers
**Endpoint:** `GET /api/teachers`
**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "subject": "string",
    "experience": "string",
    "image": "string (URL)"
  }
]
```

### Create/Update/Delete Teacher (Admin only)
Similar endpoints as News

## Top Students Management

### Get All Top Students
**Endpoint:** `GET /api/students`
**Response:**
```json
[
  {
    "id": "string",
    "name": "string",
    "grade": "string",
    "achievement": "string",
    "image": "string (URL)"
  }
]
```

### Create/Update/Delete Student (Admin only)
Similar endpoints as News

## Gallery Management

### Get All Gallery Items
**Endpoint:** `GET /api/gallery`
**Response:**
```json
[
  {
    "id": "string",
    "image": "string (URL)",
    "title": "string"
  }
]
```

### Create/Update/Delete Gallery Item (Admin only)
Similar endpoints as News

## Futsal Team Management

### Get Futsal Team Data
**Endpoint:** `GET /api/futsal`
**Response:**
```json
{
  "teamImage": "string (URL)",
  "coach": "string",
  "achievements": "string",
  "players": [
    {
      "number": "number",
      "name": "string"
    }
  ]
}
```

### Update Futsal Team (Admin only)
**Endpoint:** `PUT /api/admin/futsal`
**Headers:** `Authorization: Bearer {token}`

## School Info Management

### Get School Info
**Endpoint:** `GET /api/school-info`
**Response:**
```json
{
  "name": "string",
  "established": "string",
  "motto": "string",
  "logo": "string (URL)",
  "principal": {
    "name": "string",
    "image": "string (URL)",
    "message": "string"
  },
  "contact": {
    "phone": "string",
    "email": "string",
    "address": "string"
  },
  "stats": {
    "students": "number",
    "teachers": "number",
    "classes": "number",
    "achievements": "number"
  }
}
```

### Update School Info (Admin only)
**Endpoint:** `PUT /api/admin/school-info`
**Headers:** `Authorization: Bearer {token}`

## Implementation Notes

### Backend Implementation Steps:
1. Create MongoDB models for:
   - Admin (username, hashed password)
   - News
   - Achievements
   - Teachers
   - TopStudents
   - Gallery
   - FutsalTeam
   - SchoolInfo

2. Implement JWT authentication middleware

3. Create routes for public endpoints (GET requests)

4. Create protected admin routes (POST, PUT, DELETE)

5. Seed initial admin user with credentials:
   - Username: admin
   - Password: farasu2024 (to be hashed)

### Frontend Integration Steps:
1. Create `/app/frontend/src/services/api.js` for all API calls

2. Create admin panel pages:
   - `/admin/login` - Login page
   - `/admin/dashboard` - Admin dashboard
   - `/admin/news` - Manage news
   - `/admin/achievements` - Manage achievements
   - `/admin/teachers` - Manage teachers
   - `/admin/students` - Manage students
   - `/admin/gallery` - Manage gallery
   - `/admin/futsal` - Manage futsal team
   - `/admin/school-info` - Manage school info

3. Replace mock data imports with API calls:
   - In Home.jsx: fetch news, achievements
   - In News.jsx: fetch news
   - In Achievements.jsx: fetch achievements
   - In Teachers.jsx: fetch teachers
   - In Students.jsx: fetch students
   - In Gallery.jsx: fetch gallery
   - In Futsal.jsx: fetch futsal team

4. Create AuthContext for managing authentication state

5. Add protected routes for admin panel

## Data Migration
All data from `mock.js` should be seeded into MongoDB when backend starts.
