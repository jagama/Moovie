This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

# Moovie

![Image description](/public/snap.png)


### External Links

"bootstrap": "^v4.0",        
"google fonts",         
"font-awesome":"^v5.11.2,          
"omdb",          

### `bootstrap`       

Frontend Component Library                 
See here => https://getbootstrap.com/      

### `google fonts`          

Font Library by Google            
See here => https://fonts.google.com/               

### `font-awesome`        

Toolkit for web icons        
See here => https://fontawesome.com/        

### `omdb`        

External real DB for real REST call to obtain data              
See here => http://www.omdbapi.com/   

# Descrizione       

The `CardDeck` component is displayed inside the `App` component. In this component there is a search bar, where you can enter the title of a film to be searched. The component renders, through the `* ngFor` directive, a number of `Cards` equal to the number of fetched movies that have the title entered by the user in the search bar.          

This is possible by the `ngModel` which, through data-binding, takes care of matching the string entered by the user with the variable that will be used for searching on the DB.
The `Card` will then be filled in according to the previously created `"Class Model []"` data model.

In `/services/services.ts` I use `HttpClient`, the `Observable` object pre-fetched from the RxJs library, and the `subscribe` method also used by RxJs, to make the call to the DB `http://www.omdbapi.com/` + `APIKEY` + `PARAMETER` (film title).

Once the `CardDeck` has been rendered, it is possible to request more information on a specific film using the appropriate button. At the `onClick()` of the button the `MovieDetail` component will be rendered which at its `ngOnInit()` will make a second call, this time `http://www.omdbapi.com/` + `APIKEY` + `PARAMETER` (Movie ID), thus generating an HTML template with data relating to the specific film.

This is possible by using Angular Routing, in fact the MovieDetail component receives via the path: `'movie /: id'`, an ID relating to the specific film rendered on the `Card`, by switching to the `MovieDetail` component related to that ID.       

   


### TODO       
Add movie trailer clip

# Standard Readme

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
