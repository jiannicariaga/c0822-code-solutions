select count("cities"."name") as "cities",
       "countries"."name" as "countryName"
  from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
