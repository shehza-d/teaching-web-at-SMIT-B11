# Firebase Hosting

Firebase Hosting provides fast and secure hosting for your web app, static and dynamic content, and microservices. Firebase Hosting is production-grade web content hosting for developers. With a single command, you can quickly deploy web apps and serve both static and dynamic content to a global CDN (content delivery network). You can also pair Firebase Hosting with Cloud Functions or Cloud Run to build and host microservices on Firebase.

## Steps

1. Install the Firebase CLI

   ```bash
   npm install -g firebase-tools
   ```

1. Login to Firebase

   ```bash
   firebase login
   ```

   - (Yes, Press enter) Allow Firebase to collect ...

1. Initialize your project

   ```bash
   firebase init
   ```

   Options to select:

   - (with space select this option) Hosting: Configure files for Firebase Hosting and...
   - Use an existing project (If you don't have a project, create one in the Firebase Console and come back)
   - Select any existing project
   - What do you want to use as your public directory? `./`
   - Configure as a single-page app
     - No for HTML
     - Yes for React
   - Set up automatic builds and deploys with GitHub? `No`
   - File .//index.html already exists. Overwrite? `No`

1. Deploy your site

   ```bash
   firebase deploy
   ```

To Redeploy your site just run `firebase deploy` again.
