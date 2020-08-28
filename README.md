### Pre-requisites to run automated test
Node installed on machine 

1. unzip directory to local machine, cd in, and run `npm install` via terminal 
2. to run ui tests `npm run test:web`
3. to run api tests `npm run testapi`


---
While testing manually a few things were noted: 

1. The datepicker sometimes incorrect dates (seen on Chrome Version 84.0.4147.135), odd numbers have been duplicated, no even numbers are displayed. But this is only in the display, the underlying values of the datepicker fields are correct
2. There is no validation on the name fields of the booking input form , numbers can be entered and submitted instead of strings 
3. There is no visible success response on the ui after entering or deleting a booking. The page must be refreshed manually to see updated results
4. A js console error is thrown after loading the page only if there are no existing bookings. This is becasue after the page is loaded, the bookings are populated by an ajax request that subsequently gets executed. If no bookings are found this request should hadle the response gracefully instead of throwng the error 
5. Attempting to enter a booking with missing or incorrect data causes a 500 server error, you will only see this in the network console. Ui validation would help prevent this, in any event the ui should receive a 400 bad request rather than a 500 