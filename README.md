# React Native User Information App

## Overview
This is a simple React Native application that fetches and displays user information from the **Random Data API**. The app displays one user's details at a time and allows navigation between users using **Previous** and **Next** buttons. The goal of this project is to showcase skills in React Native development, particularly in handling data from APIs and presenting it in a user-friendly interface.

### Features
- Fetches user data from the **Random Data API**.
- Displays the following user information:
  - `id`
  - `uid`
  - `password`
  - `first_name`
  - `last_name`
  - `username`
  - `email`
  - `avatar` (user image)
- Allows navigation between 80 users using **Previous** and **Next** buttons.
- Responsive and clean UI design.

---

## Screenshots
Here are some screenshots of the app:
![Screenshot_2025-03-16-12-53-27-842_host exp exponent](https://github.com/user-attachments/assets/89f5e15e-a856-48a4-a871-b6411635e52f)



## Installation
Follow these steps to run the app locally:

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** (package manager)
- **Expo CLI** (for running the app)
- **Android/iOS Emulator** or a physical device with the **Expo Go** app installed.

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-native-user-info-app.git
   cd react-native-user-info-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the app**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open the app**:
   - Use the **Expo Go** app on your mobile device to scan the QR code displayed in the terminal.
   - Alternatively, press `a` to run the app on an Android emulator or `i` to run it on an iOS simulator.

---

## Project Structure
The project is organized as follows:
```
/react-native-user-info-app
├── assets/               # Images and other assets
├── src/
│   ├── components/       # Reusable components (e.g., UserCard, NavigationButtons)
│   ├── screens/          # Screens (e.g., Home)
│   ├── services/         # API service (e.g., fetchUsers)
│   └── App.js            # Main entry point
├── .gitignore            # Files and folders to ignore in Git
├── package.json          # Project dependencies and scripts
├── README.md             # This file
└── ...                   # Other configuration files
```

---

## API Usage
The app fetches user data from the **Random Data API**:
- Endpoint: `https://random-data-api.com/api/users/random_user?size=80`
- The `size` parameter specifies the number of users to fetch (e.g., `size=80` fetches 80 users).

