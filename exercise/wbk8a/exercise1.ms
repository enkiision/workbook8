EXERCISE 1
In this exercise, you are going to build a 2-page web site: a home page and an
information page that has 3 buttons on it with the text "1", "2" and "3".

***Completed 2 pages , and info page has 3 buttons***

On the first page, it will gather user information and allow them to:
 - enter their name ***Completed***
 - choose from a radio button group whether they are a student or instructor ***Completed***
 - click an extra-large ENTER button ***Completed***

***Completed***

When the user presses the Enter button, store their name and role (instructor or
student) into Web Storage. Then, redirect the browser to the information page using
code similar to:
location.href = "information.html";


When the information page loads, you must decide what type of user has landed on the
page and display the page with either student-related text or instructor-related text on
the page (see below). To find out who the user is and what their role is, pull the user's
name and role from Web Storage.



If the user is an instructor, display a message at the top similar to:
 Welcome Instructor their-name
The page should also show buttons 1 and 2 (that do nothing) and some Lorem ipsum
text in blue.
If the user is a student, display a message at the top similar to:
 Welcome Student their-name
The page should also show buttons 1 and 2 (that do nothing) and different Lorem ipsum
text in purple.


Test your new site!


IMPORTANT: This is NOT an example of authentication! We are not communicating
back to a server over HTTPS to authenticate user credentials. But it is showing how to
carry over data collected in one part of the web site to be used in other pages.