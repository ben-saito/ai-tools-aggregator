# SQLDoom: Running Doom in a Relational Database at 60 FPS

A developer has successfully implemented Doom, the classic 1993 first-person shooter, running entirely inside a SQL relational database. The project, called SQLDoom, renders accurate bitmapped graphics through pure SQL queries at around 60 frames per second on a standard laptop — an engineering stunt that reveals something meaningful about the flexibility of modern database systems.

---

## How It Works

The project uses a small Python client to handle input, timing, and display output, but all game logic — geometry, collision detection, rendering — executes as SQL queries against a CedarDB database. Converting Doom's classic WAD level files to a relational schema was relatively straightforward, since the original game already structured its world as vertices, lines, sectors, and other discrete elements that map naturally to database tables.

The challenge was rendering floors and ceilings. Doom's original engine used a technique called "visplanes" to efficiently compute which parts of the screen needed to be redrawn each frame. This approach relies heavily on mutable state, which SQL's declarative model handles poorly. The developer had to adapt the rendering algorithm to work within SQL's constraints, trading some efficiency for the ability to express the computation as queries.

Despite the overhead of reading and writing to SQL tables for every game state mutation, performance is surprisingly competitive: SQLDoom runs at approximately 60 fps on a Ryzen 7 laptop, with dips to 35 fps in visually complex scenes. This is well within playable territory for a project that has no optimization as a stated goal.

---

## Database as a Computing Platform

SQLDoom builds on an earlier project, DoomQL, which ran a multiplayer Doom-like shooter in SQL but with raycasting-based ASCII graphics. The jump from ASCII to accurate bitmapped rendering demonstrates how far relational databases have come as general-purpose computing platforms.

The project is available on GitHub for anyone with CedarDB and a Doom WAD file who wants to run a game server backed entirely by SQL. An online hosted demo is also available for browser-based testing without local setup.

---

## Reference

- [Ars Technica: Someone got Doom in an SQL database](https://arstechnica.com/gaming/2026/10/can-it-run-doom-sql-database-edition/)

---

*Information current as of October 2, 2026.*
