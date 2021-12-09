# Hal-O World

# Description
This application allows you to access space missions. User can join the mission, create one on his own.
the user can Create Edit Update and Delete their own space missions.
User can also join missions created by other users, by saving it to his profil and add it to his calendar.
Each mission can also be reviewed by users (Rating + Comments). HELLOOOOOOO

# User Stories
- 404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- Signup: As an anon I can sign up in the platform so that I can start creating and managing my missions
- Login: As a user I can login to the platform so that I can start creating and managing my missiosn
- Logout: As a user I can logout from the platform so no one else can modify my information
- Add elements As a user I can add missions to my profile
- Delete elements As a user I can delete elements from my profile
- Mark elements As a user I can save missions in my profile 
- Random element As a user I can get a random picture from the Nasa
- Check profile As a user I can check my profile 

# Backlog
- APOD + Chilling sounds
- Chatbot - Spacetrip tips
    - Distance calculator
    - Weather info

# --------------------------------- Client / Frontend ------------------------------------------------------------------------------------------------------------------------------------------

| Path                      | Component                      | Permissions | Behavior                                                                  |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------------------- |
| `/`                       | NavBar / LandingPage / Footer  | public `<Route>`            | Home page                                                 |
| `/about`                  | NavBar / AboutPage / Footer    | public `<Route>`            | About the app and its creators                            |
| `/missions/`              | NavBar, MissionList, FooterBar | public `<Route>`.           | Shows all tv series on backlog                            |
| `/missions/detail`        | NavBar, MissionDetails, FtBar  | user only `<PrivateRoute>`  | Shows mission details                                     |
| `/auth`                   | SignupPage / LoginPage         | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to login after signup|
| `/logout`                 | n/a                            | user only `<PrivateRoute>`  | Navigate to homepage after logout, expire session         |
| `/profile`                | Profile,                       | user only  `<PrivateRoute>` | Check profile                                             |
| `/profile/edit`           | Profile Form,                  | user only  `<PrivateRoute>` | Edit profile                                              |
| `/profile/my-missions`    | MyMission,                     | user only  `<PrivateRoute>` | Check my missions                                         |
| `/profile/mission/create` | Mission create form,           | user only  `<PrivateRoute>` | Create missions                                           |
| `/profile/mission/edit`   | Mission edit form,             | user only  `<PrivateRoute>` | Edit a mission                                            |


# Components
- App
- Auth
- NavBar
- FooterBar
- Landing
- MissionsList
- SearchBar
- MissionDetail
- MissionCreateForm
- MissionEditForm
- MyMissions
- Profile
- ProfileEdit
- NotFound
- ChatBot
- LottieFiles
- Calendar -- last feature/Backlog

# Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()

- Missions Service
  - missions.detail(id)
  - mission.create(id)
  - mission.delete(id)
  - mission.edit(id)
  
- External API / librairies
  - Nasa API
  - LottieFiles
  - Komunicate
  - FullCalendar
  - Cloudinary
 

# ----------------------------------- Server / Backend--------------------------------------------------------------------------------------------
<hr>

# User model
{
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  profilePic: {type: String},
  MissionsAdded: [{type: Schema.Types.ObjectId, ref: 'Missions'}],
  MissionsCreated: [{type: Schema.Types.ObjectId, ref: 'Missions'}]
}

# Mission model
{
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  duration: {type: Number, required: true},
  difficulty: {type: String, required: true},
  creator: [{type: Schema.Types.ObjectId, ref: 'User'}]
}

# review model
{
  rate: {type: Number, required: true},
  date: {type: Date, required: true},
  comments: {type: String, required: true},
  missionId: [{type: Schema.Types.ObjectId, ref: 'Mission'}],
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
}



# Backend Routes
| HTTP                          | URL                      
| ----------------------------- | -----------------------------|      
|  GET                          |  /signup
|  POST                         |  /signup
|  POST                         |  /logout
|  GET                          |  /:profile
|  PATCH                        |  /:profile/edit
|  GET                          |  /missions
|  GET                          |  /missions/:missionId/details
|  GET                          |  /missions/create
|  POST                         |  /missions/create
|  PATCH                        |  /missions/edit
|  DELETE                       |  /missions/delete
|  GET                          |  /missions/:missionId/review
|  POST                         |  /missions/:missionId/review


# ------------------------------------ Links --------------------------------------------------------------------------

# Wireframes
https://www.figma.com/file/TrIfQXStAxeNeibtLw5QH3/Untitled?node-id=0%3A1



# Git



# Slides
Google Slides will go there
