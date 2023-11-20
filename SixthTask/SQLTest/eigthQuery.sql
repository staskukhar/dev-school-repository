update city 
set city = 'Dnipro'
where city_id = 100
returning *;