hey,
thanks for an exciting home assignment !

i have completed all of the assingment specs and bounus.
i have added a few unit tests,
animation : for the cards and the clouds.
cards - grow in.
when the forecast shows that it will be raining - there will be rain animation going down inside the card.

the packages i have used in addition with React:

1. redux , redux-thunk for global state management.
2. material ui , react-bootstrap - for styling.
3. axios - for api calls
4. react-hook-form - for form validation.
5. enzyme - for unit tests.

project structure:

1. pages:
   I. Main - home page and for displaying default city , geolocation city and forecast.
   II. FavoritePage - for displaying Favorites citys cards.
   III. FavCityPage - for displaying a favorite city after click on the Favorite page.

2. components:

I. MainComponents: ( components mainly related to the MainPage)

1.  CurrentCity - for displaying current city name and temprature.
2.  FavFeatures - for add \ deleting a city from the favorites
3.  ForeCastList - rendring a list of foreCast cards - 5 days ahead.
4.  foreCastCards - Cards with foreCast information .
5.  SearchBox - for searching a city from the api.

II. FavoriteComponents:

1. FavCard - for displaying FavCard City
2. FavList - for displaying a list of Favcard city's.

III.Header

IV.Message: for displaying errors using toast.

3. Actions - all of the actions of redux:
4. reducers - all of the redux reducers.

LINK:

http://orber3.github.io/HeroloWeather/
