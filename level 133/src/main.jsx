import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)

/*
jsx ში ზოგიერთი ატრიბუტი არ იწერება რადგან ატრიბუტის სახელი ემთხვევა js-ის keywords, მაგალითად class js ში არის keyword, constructor არის.
ვიყენებთ className-ს. 
self-closing თეგი არის თეგი რომელიც თავის თავს ხურავს, html-ში empty tag ეწოდება რადგან ცალკე მეორე დამხურავი არ აქვს. self closing tag არის მაგალითად <img />

*/