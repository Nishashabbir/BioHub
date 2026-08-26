# Bio Website Generator Platform - Backend

Production-ready Node.js & Express backend for the Link-in-Bio Builder Platform. Built with clean MVC architecture, Mongoose, JWT authentication, Multer file uploads, Swagger documentation, and robust validation.

---

## Folder Structure

```
backend/
├── src/
│   ├── config/          # DB & Cloudinary config
│   ├── controllers/     # Route business logic
│   ├── docs/            # Swagger configuration
│   ├── helpers/         # Response formatting helpers
│   ├── middleware/      # Auth, error handler, upload, validation
│   ├── models/          # Mongoose database schemas
│   ├── routes/          # API endpoint routes
│   ├── uploads/         # Local file storage fallback
│   ├── validators/      # express-validator rules
│   └── app.js           # Express app setup
├── server.js            # Entry point
├── package.json         # Dependencies & scripts
├── .env.example         # Environment variables template
├── postman_collection.json # Postman API collection
└── README.md            # Documentation
```

---

## Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose** (ODM)
- **JWT Authentication** (`jsonwebtoken`) & **bcryptjs** (password hashing)
- **Multer** (image & avatar uploads)
- **Cloudinary** (cloud image hosting with local fallback)
- **express-validator** (request validation)
- **CORS**, **Helmet**, **Compression**, **Morgan** (security & performance)
- **Swagger UI** (`swagger-ui-express`) for interactive API documentation

---

## Installation & Setup

1. **Clone / Navigate to backend folder**:
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT secret:
   ```bash
   cp .env.example .env
   ```

4. **Seed Database (Optional)**:
   ```bash
   npm run seed
   ```

5. **Run Locally**:
   - Development mode (with nodemon):
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

---

## API Documentation & Endpoints

Interactive Swagger documentation is available at:
`http://localhost:5000/api-docs`

### Auth Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current logged-in user (Protected)

### Profile Endpoints
- `GET /api/profile` - Get user profile and links (Protected)
- `PUT /api/profile` - Update user profile (Protected)
- `POST /api/profile/avatar` - Upload avatar image (Protected)
- `DELETE /api/profile/avatar` - Remove avatar (Protected)
- `GET /api/username/:username` - Check username availability
- `POST /api/publish` - Toggle profile publication status (Protected)
- `DELETE /api/account` - Delete account and all data (Protected)

### Link Endpoints
- `GET /api/links` - Get all social links (Protected)
- `POST /api/links` - Create new social link (Protected)
- `PUT /api/links/:id` - Update social link (Protected)
- `DELETE /api/links/:id` - Delete social link (Protected)
- `PUT /api/links/reorder` - Reorder social links (Protected)
- `POST /api/click` - Record link click count

### Public & Analytics Endpoints
- `GET /api/public/:username` - Get public published bio profile & active links
- `POST /api/visit` - Record profile visit
- `GET /api/analytics` - Get analytics summary (Protected)

---

## Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "errors": []
}
```
