# API Specification: Daftar Provinsi Indonesia

## 1. Deskripsi

API ini menyediakan daftar provinsi di Indonesia, termasuk informasi seperti nama provinsi, kode provinsi, dan ibu kota provinsi.

## 2. Teknologi yang Digunakan

- **Backend:** Node.js (Express.js)
- **Database:** MySQL (Menggunakan Prisma ORM)

## 3. Endpoint API

### 3.1. **Get All Provinces**

**Endpoint:** `GET /api/provinces`

**Deskripsi:** Mendapatkan daftar semua provinsi di Indonesia.

**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Aceh",
      "code": "AC",
      "capital": "Banda Aceh",
      "image": "https://cdn.timesmedia.co.id/images/2020/07/13/Masjid-Raya-Baiturrahman.jpg"
    }
  ]
}
```

### 3.2. **Get Province by ID**

**Endpoint:** `GET /api/provinces/:id`

**Deskripsi:** Mendapatkan detail provinsi berdasarkan ID.

**Response:**

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Aceh",
    "code": "AC",
    "capital": "Banda Aceh",
    "image": "https://cdn.timesmedia.co.id/images/2020/07/13/Masjid-Raya-Baiturrahman.jpg",
    "island": "Sumatera",
    "population": 522121
  }
}
```

### 3.3. **Create Province (Admin Only)**

**Endpoint:** `POST /api/provinces`

**Deskripsi:** Menambahkan data provinsi baru.

**Body:**

```json
{
  "name": "Bali",
  "code": "BA",
  "capital": "Denpasar",
  "image": "https://cdn.timesmedia.co.id/images/2020/07/13/Masjid-Raya-Baiturrahman.jpg",
  "island": "Java",
  "population": 522121
}
```

**Response:**

```json
{
  "success": true,
  "message": "Province added successfully",
  "data": {
    "id": 2,
    "name": "Bali",
    "code": "BA",
    "capital": "Denpasar",
    "image": "https://cdn.timesmedia.co.id/images/2020/07/13/Masjid-Raya-Baiturrahman.jpg",
    "island": "Java",
    "population": 522121
  }
}
```

### 3.4. **Update Province (Admin Only)**

**Endpoint:** `PUT /api/provinces/:id`

**Deskripsi:** Memperbarui data provinsi berdasarkan ID.

**Body:**

```json
{
  "name": "Bali Updated",
  "code": "BA",
  "capital": "Denpasar",
  "image": "https://cdn.timesmedia.co.id/images/2020/07/13/Masjid-Raya-Baiturrahman.jpg",
  "island": "Java",
  "population": 522121
}
```

**Response:**

```json
{
  "success": true,
  "message": "Province updated successfully"
}
```

### 3.5. **Delete Province (Admin Only)**

**Endpoint:** `DELETE /api/provinces/:id`

**Deskripsi:** Menghapus data provinsi berdasarkan ID.

**Response:**

```json
{
  "success": true,
  "message": "Province deleted successfully"
}
```

## 4. Autentikasi & Autorisasi

- **Endpoints CRUD (Create, Update, Delete)** hanya dapat diakses oleh admin.
- Menggunakan JWT untuk autentikasi pengguna.

## 5. Struktur Database (Prisma Schema)

```prisma
model Province {
  id          Int    @id @default(autoincrement())
  name        String
  code        String?
  capital     String
  image       String?
  island      String
  pupulation  Int?
}
```
