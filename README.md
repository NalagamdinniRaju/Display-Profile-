# Profile Card Application

This React-based application dynamically renders user profile data fetched from an API and displays it in two visually distinct designs. Users can toggle between the designs to view the profile information in different layouts.

## Features

1. **Dynamic User Data**:
   - Fetches random user data from the [Random User API](https://randomuser.me/).
   - Displays comprehensive user information including name, gender, email, phone, address, and age.

2. **Multiple Designs**:
   - **Design 1**: A clean and static design using icons and styled components.
   - **Design 2**: A dynamic and animated design powered by `framer-motion` for enhanced user experience.

3. **Responsive UI**:
   - Ensures compatibility across different devices and screen sizes.

4. **Design Switcher**:
   - Allows users to toggle between Design 1 and Design 2 via buttons.

## Components

### 1. **Design1**
- Displays user information in a card layout with a focus on structured and readable design.
- Key components:
  - `ProfileImageSection`: Renders the user’s profile picture.
  - `DetailsSection`: Lists personal details and address.
  - `InfoItem`: Reusable component for displaying an icon, label, and value.
- Uses `react-icons` for icons.

### 2. **Design2**
- A visually dynamic design with animations using `framer-motion`.
- Key components:
  - `ProfileImageSection`: Displays profile picture with animation effects.
  - `DetailsSection`: Displays user details using the `InfoCard` component.
  - `InfoCard`: A reusable card component with hover effects.
- Uses `react-icons` for icons and `framer-motion` for animations.

### 3. **App**
- The main application component:
  - Manages user data fetched from the API.
  - Handles toggling between Design 1 and Design 2.

## API Integration
- Fetches user data from [Random User API](https://randomuser.me/).
- API call: `https://randomuser.me/api/?page=1&results=1&seed=abc`
- Data includes user’s name, gender, email, phone, location, picture, and date of birth.

## Styling
- CSS files:
  - `App.css`: Styles for the main application layout and design switcher.
  - `Design1.css`: Styles specific to Design 1.
  - `Design2.css`: Styles specific to Design 2.
- Incorporates modular and reusable CSS classes.

## Libraries and Dependencies
- **React**: Frontend framework.
- **react-icons**: For rendering icons.
- **framer-motion**: For animations in Design 2.

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/NalagamdinniRaju/Display-Profile-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd profile-card-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Folder Structure
```
profile-card-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Design1.js
│   │   ├── Design2.js
│   │   ├── InfoCard.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Design1.css
│   │   ├── Design2.css
│   ├── App.js
│   ├── index.js
└── package.json
```

## Future Enhancements
- Add more designs.
- Implement dark mode.
- Include additional user details such as hobbies and social media links.
- Cache API results to reduce unnecessary network requests.

