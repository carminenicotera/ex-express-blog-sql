# Project Guidelines

## Architecture
- Main application entrypoint: `server.js`
- Static files served from `public/`
- Uses Express 4 with in-memory data storage
- Router-based structure with posts router registered at `/posts` prefix

## Build and Test
- `npm start` → `node server.js` (production server)
- `npm run watch` → `node --watch server.js` (development with auto-reload)
- No test suite configured

## Current Implementation Status
- `GET /` returns "Server del mio blog"
- `GET /posts` returns JSON array of posts
- `GET /posts/:id` returns JSON post or 404 if not found
- `POST /posts` returns stub text: "Creazione nuovo post"
- `PUT /posts/:id` returns stub text: "Modifica integrale del post X"
- `DELETE /posts/:id` returns stub text: "Cancellazione del post X" (no actual deletion)

## Conventions
- REST-style route conventions
- JSON responses for read operations (GET)
- Text confirmations for write operations (POST/PUT/DELETE)
- Preserve the existing `posts` array in `routers/posts.js`
- Keep static image serving behavior unchanged
- Prefer `express.Router()` for route organization

## Exercise Milestones
See [README.md](README.md) for detailed exercise specifications.

- **Milestone 1**: Create `controllers/` folder, refactor route logic into controller functions
- **Milestone 2**: Create `data/` folder, move posts array there, implement full CRUD with proper HTTP status codes

## When Editing
- Keep package scripts unchanged unless explicitly requested
- Use `server.js` as source of truth for current app behavior
- For ambiguous requests, clarify if goal is to match README milestones or preserve current implementation
- Test changes manually with `npm start` or `npm run watch`
