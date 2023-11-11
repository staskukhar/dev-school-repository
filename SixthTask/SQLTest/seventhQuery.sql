insert into city (city, country_id, last_update)
values ('Hadiach', 100, NOW()) returning *;