create table users (
	userID serial PRIMARY KEY,
	userName varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	UNIQUE(userName, email)
);
INSERT INTO users (userName, email)
values ('someone', 'someone@email.com'),
	('someoneElse', 'someoneelse@email.com')
returning *;