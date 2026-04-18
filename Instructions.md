# Figma Dashboard - Angular Implementation

This project is a high-fidelity recreation of the provided Figma dashboard design using Angular 18, Bootstrap, and Chart.js.

## Tech Stack
- **Framework**: Angular 18 (Standalone Components)
- **Styling**: Bootstrap 5.3 + Custom CSS
- **Icons**: Bootstrap Icons
- **Charts**: Chart.js

## Project Highlights
- **Pixel-Perfect**: Attempted to match Figma colors, spacing, and typography (Inter font).
- **Responsive**: Layout adapts to different screen sizes (Sidebar and Right Panel hide on smaller screens).
- **Clean Architecture**: Modular component structure as per interview requirements.
- **Reusability**: Stats cards and chart sections are designed to be easily extensible.

## How to Run the Project

1. **Clone or Download** the project folder.
2. **Open Terminal** in the `dashboard-ui` directory.
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm start
   ```
5. **View Application**:
   Open your browser and navigate to `http://localhost:4200`

## Components Implemented
- **Sidebar**: Complete with section labels, active states, and submenus.
- **Header**: Includes breadcrumbs, search bar with keyboard shortcut UI, and action icons.
- **Dashboard Cards**: Stats for Orders, Sales, Profit, and Growth with trend indicators.
- **Charts**: 
  - Main Line Chart for "Total Users" vs "Last Year".
  - Traffic by Website progress bars.
  - Spendings Donut Chart.
- **Tables**: Product status table with custom badge styling.
- **Activity/Right Panel**: Separate sections for Notifications, Activities, and Contacts.

## Mock Data
All content is generated from local mock data in the component TypeScript files, making it easy to replace with API calls later.
