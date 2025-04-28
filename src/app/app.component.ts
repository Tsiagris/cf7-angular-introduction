import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name = 'Tassos';
  
  // //Step 1: one way binding of data
  // person = {
  //   givenName: 'Tassos',
  //   surName: 'Siagkris',
  //   age:40,
  //   email: 'asiagris2011@gmail.com'
  // }

  // // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragkoudakis",
  //   age:55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName:"John",
  //   surName:"Doe",
  //   age:32,
  //   email:"john@example.com",
  //   address:"New York, USA"
  // }

  // users: Person[] = [
  //   {
  //     "givenName": "Becki",
  //     "surName": "McDaid",
  //     "email": "bmcdaid0@imageshack.us",
  //     "age": 1,
  //     "address": "64265 Hoffman Alley"
  //   }, {
  //     "givenName": "Coral",
  //     "surName": "Janu",
  //     "email": "cjanu1@cbc.ca",
  //     "age": 2,
  //     "address": "6910 Alpine Point"
  //   }, {
  //     "givenName": "Murial",
  //     "surName": "Anfusso",
  //     "email": "manfusso2@nbcnews.com",
  //     "age": 3,
  //     "address": "9035 Scott Park"
  //   }, {
  //     "givenName": "Lucie",
  //     "surName": "Torri",
  //     "email": "ltorri3@etsy.com",
  //     "age": 4,
  //     "address": "923 Moose Parkway"
  //   }, {
  //     "givenName": "Yancey",
  //     "surName": "Lampitt",
  //     "email": "ylampitt4@spotify.com",
  //     "age": 5,
  //     "address": "4721 Crowley Terrace"
  //   }, {
  //     "givenName": "Valle",
  //     "surName": "Clemson",
  //     "email": "vclemson5@list-manage.com",
  //     "age": 6,
  //     "address": "3197 Mitchell Circle"
  //   }, {
  //     "givenName": "Barbee",
  //     "surName": "McCaughan",
  //     "email": "bmccaughan6@skyrock.com",
  //     "age": 7,
  //     "address": "6198 Bartelt Place"
  //   }, {
  //     "givenName": "Gavin",
  //     "surName": "Zanotti",
  //     "email": "gzanotti7@deviantart.com",
  //     "age": 8,
  //     "address": "0 Center Terrace"
  //   }, {
  //     "givenName": "Anastasia",
  //     "surName": "Reeme",
  //     "email": "areeme8@ftc.gov",
  //     "age": 9,
  //     "address": "44993 Swallow Parkway"
  //   }, {
  //     "givenName": "Jecho",
  //     "surName": "Pilgrim",
  //     "email": "jpilgrim9@tuttocitta.it",
  //     "age": 10,
  //     "address": "1 Browning Road"
  //   }, {
  //     "givenName": "Brigit",
  //     "surName": "Campe",
  //     "email": "bcampea@jigsy.com",
  //     "age": 11,
  //     "address": "46097 Stone Corner Plaza"
  //   }, {
  //     "givenName": "Daphna",
  //     "surName": "Ghidotti",
  //     "email": "dghidottib@privacy.gov.au",
  //     "age": 12,
  //     "address": "290 Rieder Drive"
  //   }, {
  //     "givenName": "Philippe",
  //     "surName": "O'Fihily",
  //     "email": "pofihilyc@amazon.de",
  //     "age": 13,
  //     "address": "456 Morning Road"
  //   }, {
  //     "givenName": "Raddy",
  //     "surName": "Burridge",
  //     "email": "rburridged@mit.edu",
  //     "age": 14,
  //     "address": "0231 Evergreen Road"
  //   }, {
  //     "givenName": "Katie",
  //     "surName": "Renzo",
  //     "email": "krenzoe@baidu.com",
  //     "age": 15,
  //     "address": "60194 Maryland Avenue"
  //   }, {
  //     "givenName": "Myrta",
  //     "surName": "Justis",
  //     "email": "mjustisf@mozilla.org",
  //     "age": 16,
  //     "address": "97 Bartillon Circle"
  //   }, {
  //     "givenName": "Paule",
  //     "surName": "Iles",
  //     "email": "pilesg@indiatimes.com",
  //     "age": 17,
  //     "address": "3845 Crownhardt Parkway"
  //   }, {
  //     "givenName": "Chevalier",
  //     "surName": "Henderson",
  //     "email": "chendersonh@istockphoto.com",
  //     "age": 18,
  //     "address": "99155 Melby Plaza"
  //   }, {
  //     "givenName": "Vannie",
  //     "surName": "Craigg",
  //     "email": "vcraiggi@rediff.com",
  //     "age": 19,
  //     "address": "1587 Huxley Lane"
  //   }, {
  //     "givenName": "Radcliffe",
  //     "surName": "Arens",
  //     "email": "rarensj@foxnews.com",
  //     "age": 20,
  //     "address": "267 Merry Road"
  //   }]
    
  

}
