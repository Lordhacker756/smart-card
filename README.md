# Smart Business Card Application

A modern digital business card solution that allows users to create, manage, and share their professional profiles through smart cards with NFC capabilities.

## Features

### 1. Digital Profile Management
- Create and edit professional profiles
- Upload profile picture and background image
- Add contact information (email, WhatsApp, address)
- Manage social media accounts
- Add and showcase services/products

### 2. Smart Card Integration
- NFC-enabled business cards
- Instant profile sharing
- Available in PVC and Metal card options
- Quick save-to-phone functionality

### 3. User Dashboard
- Secure authentication system
- Intuitive profile management interface
- Real-time preview of changes
- Image upload and management
- Dynamic service/product showcase

## Pages

### 1. Home Page (index.html)
- Landing page with product information
- Features and benefits showcase
- Quick access to registration/login
- Company information and contact details

### 2. Dashboard (dashboard.html)
- Profile management interface
- Form sections:
  - Basic Information
  - Contact Details
  - Social Media Accounts
  - Services/Products
- Image upload functionality
- Real-time data saving

### 3. Profile Theme (theme.html)
- Public-facing profile page
- Accessible via unique URL: `https://rfc-backend.onrender.com/theme.html?userId=[USER_ID]`
- Displays:
  - Profile picture and background
  - Contact information
  - Social media links
  - Services/products showcase

## Setup Instructions

1. Clone the repository
2. Set up the backend server (runs on port 5000)
3. Configure the frontend:
   ```bash
   # Start a local server on port 5500
   python -m http.server 5500
   # or
   php -S localhost:5500
   ```

## Usage Guide

### 1. Creating a Profile
1. Register/Login through the home page
2. Access the dashboard
3. Fill in profile information
4. Upload images
5. Add social media accounts
6. Add services/products
7. Save changes

### 2. Sharing Profile
1. Get your unique profile URL: `http://localhost:5500/theme.html?userId=[YOUR_ID]`
2. Share the URL or use the NFC card for instant sharing
3. Recipients can view your profile without authentication

### 3. Updating Profile
1. Login to dashboard
2. Make necessary changes
3. Changes are reflected immediately on the public profile

## Technical Details

### Frontend
- HTML5, CSS3, JavaScript
- Bootstrap 5.3
- Responsive design
- Client-side image processing
- Dynamic content loading

### Backend Integration
- RESTful API endpoints
- JWT authentication
- Image upload functionality
- User data management

### Security Features
- Protected dashboard access
- JWT token validation
- Secure image upload
- Public/Private data separation

## API Endpoints

1. Authentication
   - POST `/auth/login`
   - POST `/auth/register`

2. User Profile
   - GET `/user/get/:userId`
   - POST `/user/:userId`

3. Utilities
   - POST `/util/upload-image`

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Support
For technical support or queries:
- Email: support@yourcompany.com
- Phone: +1 234 567 890

## License
© 2024 Your Company Name. All rights reserved.
