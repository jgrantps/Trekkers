# Trekker

Trekker is a single-page javascript-powered app that allows users to sign up and build collections of the bridge crew of various Star Trek series.  The app connects via JSON to a Ruby on Rails backend API, where seed data for the main characters of the four primary Star Trek shows are held.

To install and run Trekkers, simply:

* clone and download the Trekker file from github (https://github.com/jgrantps/Trekkers)
* Navigate to the folder `trekker-backend` in your console and run `bundle`.
* After all necessary dependancies are installed, run `rake db:migrate` and `rake db:seed` to set up the database and primary seed data.
* Once you are finished setting up and seeding the database, navigate to the `trekker-frontend/public/build/index.html` file and open the file in your default browser.

When opened, you will be greeted with a simple signup/login prompt.  After logging in or signing up, you will be able to choose your Star Trek series, and then select the corresponding characters from the updated dropdown list.

* After browsing and selecting your list of Star Trek characters, you are then able to remove them from your list, or further copies of the characters.  

* For added functionality, signup with multiple account names to create customized lists of Star Trek characters to suit your specific Star Trek Needs.

# Note

This app is a simple exploration in my understanding of vanilla Javascript concepts and Object Orientation principles.  Representations of any Star Trek IP is done so with no malintent or profit motive.  

* Any bugs or improvement suggestions that users may notice in the program can be brought to my attention via a pull request on the github repo.

