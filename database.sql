-- database name: react_gallery

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(120) NOT NULL,
	"description" VARCHAR (120),
    "likes" INTEGER NOT NULL
);

INSERT INTO "gallery" ("path", "description", "likes")
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0), 
('images/paulie.jpeg', 'Agent orange in his element', 1), 
('images/saucey.jpeg', 'The big one', 2),
('images/sleepy.jpeg', 'Someone sure is sleepy', 3),
('images/tuna.jpeg', 'The old man himself', 4),
('images/two_cats.jpeg', 'Two is better than one', 5);