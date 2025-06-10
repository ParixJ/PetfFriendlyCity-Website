# College Tips Website

A modern website for college students to share and discover tips, stories, and resources.

## Features

- Modern, responsive design
- Interactive navigation
- AI-powered chatbot assistant
- User-friendly interface
- Mobile-first approach

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd college-tips
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
PORT=3001
```

## Running the Application

1. Start the backend server (in one terminal):
```bash
npm run server
```

2. Start the React development server (in another terminal):
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Project Structure

```
college-tips/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Chatbot.js
│   │   └── Chatbot.css
│   ├── App.js
│   └── index.js
├── server.js
├── package.json
└── .env
```

## Features

### Navigation
- Responsive navbar with mobile menu
- Smooth transitions and animations
- Active state indicators

### Chatbot
- AI-powered navigation assistant
- Real-time responses
- Mobile-friendly interface
- Typing indicators
- Error handling

## Technologies Used

- React.js
- Express.js
- OpenAI API
- Material-UI
- CSS3
- Node.js

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@collegetips.com or open an issue in the repository. 