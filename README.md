1. Task: https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md
2. Screenshot:

![Screenshot from 2023-05-28 20-36-49](https://github.com/PavelZabalotny/graphiql-app/assets/41519166/b834064c-b2cf-489e-b957-199986012dae)

![Screenshot from 2023-05-28 20-38-35](https://github.com/PavelZabalotny/graphiql-app/assets/41519166/98247216-a80a-48be-aca0-ed6895b9256e)

4. Deploy: https://graphiql-auth-3a77c.web.app/
5. Video explanation: https://youtu.be/1JoQXga4u3o
7. Done 28.05.2023 / deadline 29.05.2023
8. Score: 90 / 90

### Please **PAY ATTENTION**:
When opening the Welcome page, one notification is displayed in the console: _"Error with Permissions-Policy header: Unrecognized feature: 'ch-ua-form-factor'"_. This is because of the inserted video from Youtube using the official proposed method - <iframe> HTML element.

![Screenshot from 2023-05-28 20-52-02](https://github.com/PavelZabalotny/graphiql-app/assets/41519166/f9754a79-7bc2-428e-8f80-7daa4d185c81)

### Welcome route - max 10 points

- [x] The welcome page should contain general information about the developers, project, and course. **2 point**
- [x] In the upper right corner there are 2 buttons: Sign In and Sign Up. **2 point**
- [x] If login token is valid and unexpired, change the Sign In and Sign Up buttons to the "Go to Main Page" button. **2 points**
- [x] When the token expires - the user should be redirected to the "Welcome page" automatically. **3 points**
- [x] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up  - max 20 points

- [x] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **5 points**
- [x] Client-side validation should be implemented. **10 points**
- [x] Upon successful login, the user should be redirected to the Main page **3 point**
- [x] If the user is already logged in and tries to reach these routes, they should be redirected to the Main page. **2 point**

### GraphiQL route - max 50 points
- [x] Working editor allowing to edit the query. **15 points**
- [x] Working documentation explorer, should be visible only when sdl request will succeed. **15 points**
- [x] Variables section. Should be closed/opened **5 points**
- [x] Headers section. Should be closed/opened **5 points**
- [x] Response section. **10 points**


### General requirements - max 10 points

- [x] Localization **5 point**
- [x] Sticky header **5 points**