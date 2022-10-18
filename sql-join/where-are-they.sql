select "addresses"."line1" as "address",
       "cities"."name" as "cityName",
       "countries"."name" as "country"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
