# Nippon Navigator
Nippon Navigator is a website application designed to help travelers explore cities in Japan and plan their travel itinerary.

## Features
- Explore major Japanese cities
- Search travel destinations
- View travel information and recommendations

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Jest
- Vercel

## Architecture
The application follows the MVC (Model-View-Controller) design pattern.

Model:
Handles travel data such as city information.

View:
Frontend HTML pages that display the user interface.

Controller:
Backend API routes that process requests and return data.

## Design Pattern
MVC Pattern
Separates UI, logic, and data.

Factory Pattern
Creates standardized city objects for the application.

## Setup Instructions
Clone the repository:
git clone https://github.com/ShaneBecker2004/Travel-Itinerary.git

Install dependencies:
npm install

Run the server:
node backend/server.js

## CI/CD Pipeline

This project uses GitHub Actions to automate testing.

Whenever code is pushed to the main branch or a pull request is opened, GitHub Actions automatically:

1. Installs project dependencies
2. Runs the full test suite using Jest
3. Verifies the application builds successfully

This automation ensures that all changes are tested before deployment and helps prevent bugs from being introduced into the main branch.

## Deployment

The application is deployed using Vercel.

Deployed URL:
(https://vercel.com/shane-makoto-beckers-projects/travel-itinerary-35h4)

## Known Limitations
- Limited number of cities
- Basic search functionality

## Troubleshooting
Tests not running
Run: npm install

Server not starting
Ensure port 3000 is available.

404 errors on Vercel
Ensure index.html exists in root.

## Future Improvements
- Add interactive map
- Add hotel recommendations
- Implement user login and saved itineraries
