# 🎭 Mask Tracker: Majora's Mask Progress Tracker

A simple web app to track progress on creating all 30 masks from *Majora's Mask*. Built using **React, Vite, and Bootstrap**, with progress saved in **local storage**.

## 🚀 Features
- Displays all 30 masks in the order they are obtained in the game.
- Each mask has an image, name, and a checkbox to mark progress.
- Progress is **saved in local storage** so it persists after page refresh.
- A **counter at the top** shows how many masks are left to complete.
- Smooth **animations** on hover and click for checkboxes.

## 📸 Screenshot
![Mask Tracker Screenshot](./public/masks-tracker-preview.png)

## 🛠️ Installation

### **1. Clone the repository:**
```sh
git clone https://github.com/Octozek/mask-tracker.git
cd mask-tracker
```

### **2. Install dependencies:**
```sh
npm install
```

### **3. Run the development server:**
```sh
npm run dev
```

### **4. Open the app in your browser:**
The app should start at `http://localhost:5173` by default.

## 📂 Folder Structure
```
mask-tracker/
│── public/
│   ├── masks/  # Contains all 30 mask images
│── src/
│   ├── components/
│   │   ├── MaskTracker.jsx  # Main tracking component
│   ├── styles/
│   │   ├── styles.css  # Custom styles for animations
│   ├── App.jsx  # Main entry point
│   ├── main.jsx  # Bootstrap & global imports
│── README.md  # Project documentation
│── package.json  # Dependencies and scripts
│── vite.config.js  # Vite configuration
```

## 📜 Usage
- **Click on a checkbox** to mark a mask as completed.
- **Hover over a checkbox** to make it slightly larger.
- **Click a checkbox** to make it temporarily grow bigger before returning to normal.
- Your progress is **automatically saved** in local storage.

## 🤝 Contributing
Feel free to fork this repository and submit pull requests!

## 📝 License
This project is open-source under the **MIT License**.
