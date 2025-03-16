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
![one](https://github.com/user-attachments/assets/121bf841-306a-4f6f-b59f-1b097ea7f302)
![three](https://github.com/user-attachments/assets/853baf20-ed16-4d4b-87a9-a384e18b21f3)
![two](https://github.com/user-attachments/assets/c0edab1e-ee4f-4e23-a161-0a9b9d71d637)





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

---

## Evaluation Criteria
This project was evaluated based on the following criteria:
1. **Code Quality**: Clean, organized, and well-commented code.
2. **React Native Usage**: Efficient use of React Native components and navigation.
3. **Data Handling**: Successful fetching, processing, and display of API data.
4. **UI Design**: Aesthetically pleasing and responsive user interface.
5. **Error Handling**: Proper management of edge cases and potential errors.

---

## Improvements
Here are some potential improvements for the app:
1. **Error Handling**:
   - Display user-friendly error messages for API failures.
   - Handle edge cases (e.g., missing or invalid data).

2. **UI Enhancements**:
   - Add shadows and rounded corners to the card for a modern look.
   - Improve the spacing and alignment of user information fields.

3. **Loading State**:
   - Display a loading indicator while fetching data.

4. **Testing**:
   - Add unit tests for components and services using **Jest** and **React Testing Library**.

---

## Technologies Used
- **React Native**: For building the mobile app.
- **Expo**: For simplifying the development and testing process.
- **Random Data API**: For fetching user data.
- **React Native Paper** (optional): For pre-styled components and a modern UI.

---

## Contributing
If you'd like to contribute to this project, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact
If you have any questions or feedback, feel free to reach out:
- **Email**: your-email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

## Acknowledgments
- Thanks to **Random Data API** for providing the user data.
- Inspired by React Native tutorials and documentation.

---

This **README.md** file provides a comprehensive overview of your project and instructions for running it locally. Make sure to replace placeholders (e.g., `your-username`, `your-email@example.com`) with your actual information. You can also add screenshots to the `screenshots/` folder and update the **Screenshots** section accordingly.
