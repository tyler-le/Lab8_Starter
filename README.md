# Lab 8 - Starter

Individual Lab

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   - Within a GitHub action that runs whenever code is pushed. You want to incrementally run tests so that, if a failure did occur, you could fix it quickly and easily. This is analogous to pushing a big rock up the hill incrementally as shown in lecture.

2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)

   - No, E2E testing is used to replicate the workflow from start to finish

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

   - No because this functionality can be broken up into multiple units. For example, I would create several unit tests to check if the message can be written, another to check if the message can be sent, and another to test if the message was received. We cannot use unit tests to see how many components interact with eachother.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, this is an encapsulated unit and isn't dependent on other moving parts of the application.


